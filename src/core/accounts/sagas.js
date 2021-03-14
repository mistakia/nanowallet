import { fork, call, takeLatest } from 'redux-saga/effects'

import { accountActions } from './actions'
import { getAccountInfo } from '@core/api'

export function* load({ payload }) {
  const { account } = payload
  console.log(account)

  yield call(getAccountInfo, account)
  // TODO: get account history
}

//= ====================================
//  WATCHERS
// -------------------------------------

export function* watchLoadAccount() {
  yield takeLatest(accountActions.LOAD_ACCOUNT, load)
}

//= ====================================
//  ROOT
// -------------------------------------

export const accountSagas = [fork(watchLoadAccount)]
