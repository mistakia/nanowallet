import {
  takeLeading,
  fork,
  call,
  put,
  takeLatest,
  select
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
import ClipboardPlus from 'react-native-clipboard-plus'
import { wallet } from 'nanocurrency-web'
import Snackbar from 'react-native-snackbar'

import { walletActions } from './actions'
import { getWallet } from './selectors'
import { localStorageAdapter, validateSeed } from '@core/utils'
import constants from '@core/constants'

export function* load() {
  const seed = yield call(localStorageAdapter.getItem, 'seed')
  if (!seed) {
    return yield put(push('/landing'))
  }
  const w = wallet.fromLegacySeed(seed)
  yield put(walletActions.set(w))
  yield put(walletActions.confirm())

  const accountIndex = yield call(localStorageAdapter.getItem, 'accountIndex')
  if (accountIndex) {
    const accounts = wallet.accounts(w.seed, 1, accountIndex)
    yield put(walletActions.setAccounts(accounts))
  }
}

export function* create() {
  const w = wallet.generateLegacy()
  yield put(walletActions.set(w))
  localStorageAdapter.setItem('seed', w.seed)
}

export function* copy() {
  const w = yield select(getWallet)
  yield call(ClipboardPlus.copyText, w.seed)
  Snackbar.show({
    text: 'Copied',
    duration: Snackbar.LENGTH_SHORT
  })
}

export function* exit() {
  localStorageAdapter.removeItem('seed')
  yield put(push('/landing'))
}

export function* confirm() {
  return yield put(push('/dashboard'))
}

export function* add() {
  const w = yield select(getWallet)
  const idx = w.accounts.size
  const accounts = wallet.accounts(w.seed, idx - 1, idx)
  localStorageAdapter.setItem('accountIndex', idx)
  yield put(walletActions.setAccounts(accounts))
}

const generateWalletFromSeed = (seed) => {
  const type = validateSeed(seed)
  switch (type) {
    case constants.SEED_BLAKE2B:
      return wallet.fromLegacySeed(seed)

    case constants.SEED_BIP39:
      return wallet.fromSeed(seed)
  }
}

export function* importFromSeed({ payload }) {
  const { seed } = payload
  const w = generateWalletFromSeed(seed)
  yield put(walletActions.set(w))
  yield put(walletActions.confirm())

  const accountIndex = yield call(localStorageAdapter.getItem, 'accountIndex')
  if (accountIndex) {
    const accounts = wallet.accounts(w.seed, 1, accountIndex)
    yield put(walletActions.setAccounts(accounts))
  }
}

//= ====================================
//  WATCHERS
// -------------------------------------

export function* watchLoadWallet() {
  yield takeLeading(walletActions.LOAD_WALLET, load)
}

export function* watchCopySeed() {
  yield takeLatest(walletActions.COPY_SEED, copy)
}

export function* watchCreateWallet() {
  yield takeLatest(walletActions.CREATE_WALLET, create)
}

export function* watchExitWallet() {
  yield takeLatest(walletActions.EXIT_WALLET, exit)
}

export function* watchConfirmWallet() {
  yield takeLatest(walletActions.CONFIRM_WALLET, confirm)
}

export function* watchAddAccount() {
  yield takeLatest(walletActions.ADD_ACCOUNT, add)
}

export function* watchImportFromSeed() {
  yield takeLatest(walletActions.IMPORT_FROM_SEED, importFromSeed)
}

//= ====================================
//  ROOT
// -------------------------------------

export const walletSagas = [
  fork(watchLoadWallet),
  fork(watchCopySeed),
  fork(watchCreateWallet),
  fork(watchExitWallet),
  fork(watchConfirmWallet),
  fork(watchAddAccount),
  fork(watchImportFromSeed)
]
