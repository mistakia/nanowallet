import { call, fork, throttle } from 'redux-saga/effects'

import { statActions } from './actions'
import { getMarkets, getRepresentative, getNetwork } from '@core/api'

export function* loadMarkets() {
  yield call(getMarkets)
}

export function* loadNetwork() {
  yield call(getNetwork)
}

export function* loadRepresentative() {
  // TODO - get selected account representative
  const address =
    'nano_3zapp5z141qpjipsb1jnjdmk49jwqy58i6u6wnyrh6x7woajeyme85shxewt'
  yield call(getRepresentative, { address })
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

//= ====================================
//  ROOT
// -------------------------------------

export const statSagas = [
  fork(watchLoadMarkets),
  fork(watchLoadRepresentative),
  fork(watchLoadNetwork)
]
