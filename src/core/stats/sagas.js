import { call, fork, throttle, select, takeLatest } from 'redux-saga/effects'

import { statActions } from './actions'
import { getMarkets, getRepresentative, getNetwork } from '@core/api'
import { accountActions, getSelectedAccount } from '@core/accounts'

export function* loadMarkets() {
  yield call(getMarkets)
}

export function* loadNetwork() {
  yield call(getNetwork)
}

export function* loadRepresentative() {
  const account = yield select(getSelectedAccount)
  if (account.representative) {
    yield call(getRepresentative, { address: account.representative })
  }
}

//= ====================================
//  WATCHERS
// -------------------------------------

export function* watchLoadMarkets() {
  yield throttle(600000, statActions.LOAD_MARKETS, loadMarkets)
}

export function* watchLoadRepresentative() {
  yield throttle(600000, statActions.LOAD_REPRESENTATIVE, loadRepresentative)
}

export function* watchLoadNetwork() {
  yield throttle(600000, statActions.LOAD_NETWORK, loadNetwork)
}

export function* watchGetAccountInfoFulfilled() {
  yield takeLatest(
    accountActions.GET_ACCOUNT_INFO_FULFILLED,
    loadRepresentative
  )
}

//= ====================================
//  ROOT
// -------------------------------------

export const statSagas = [
  fork(watchLoadMarkets),
  fork(watchLoadRepresentative),
  fork(watchLoadNetwork),
  fork(watchGetAccountInfoFulfilled)
]
