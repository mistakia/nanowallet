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
import { localStorageAdapter, randomBytes } from '@core/utils'

export function* load() {
  const mnemonic = yield call(localStorageAdapter.getItem, 'mnemonic')
  if (!mnemonic) {
    return yield put(push('/landing'))
  }
  const w = wallet.fromMnemonic(mnemonic)
  yield put(walletActions.set(w))
}

export function* create() {
  const entropy = randomBytes.generate()
  const w = wallet.generate(entropy)
  yield put(walletActions.set(w))
  localStorageAdapter.setItem('mnemonic', w.mnemonic)
}

export function* copy() {
  const w = yield select(getWallet)
  yield call(ClipboardPlus.copyText, w.seed)
  Snackbar.show({
    text: 'Copied',
    duration: Snackbar.LENGTH_SHORT
  })
}

export function* clear() {
  localStorageAdapter.removeItem('mnemonic')
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

export function* watchClearWallet() {
  yield takeLatest(walletActions.CLEAR_WALLET, clear)
}

//= ====================================
//  ROOT
// -------------------------------------

export const walletSagas = [
  fork(watchLoadWallet),
  fork(watchCopySeed),
  fork(watchCreateWallet),
  fork(watchClearWallet)
]
