import { takeLeading, fork, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { walletActions } from './actions'
import { localStorage } from '@core/utils'

export function* load() {
  const seed = yield call(localStorage.getItem, 'seed')
  if (!seed) {
    return yield put(push('/landing'))
  }
  // decrypt
  // set seed
}

//= ====================================
//  WATCHERS
// -------------------------------------

export function* watchLoadWallet() {
  yield takeLeading(walletActions.LOAD_WALLET, load)
}

//= ====================================
//  ROOT
// -------------------------------------

export const walletSagas = [fork(watchLoadWallet)]
