import { race, call, put, take, cancelled } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'

import { api, apiRequest } from '@core/api/service'
import {
  getMarketsActions,
  getRepresentativeActions,
  getNetworkActions
} from '@core/stats'

import { getAccountInfoActions } from '@core/accounts'

function* fetchAPI(apiFunction, actions, opts = {}) {
  // const { token } = yield select(getApp)
  const { abort, request } = apiRequest(apiFunction, opts /* , token */)
  try {
    yield put(actions.pending(opts))
    const data = yield call(request)
    yield put(actions.fulfilled(opts, data))
  } catch (err) {
    console.log(err)
    if (!opts.ignoreError) {
      /* yield put(notificationActions.show({ severity: 'error', message: err.message }))
       * Bugsnag.notify(err, (event) => {
       *   event.addMetadata('options', opts)
       * }) */
    }
    yield put(actions.failed(opts, err.toString()))
  } finally {
    if (yield cancelled()) {
      abort()
    }
  }
}

function* fetch(...args) {
  yield race([call(fetchAPI.bind(null, ...args)), take(LOCATION_CHANGE)])
}

export const getAccountInfo = fetch.bind(
  null,
  api.getAccountInfo,
  getAccountInfoActions
)

export const getMarkets = fetch.bind(null, api.getMarkets, getMarketsActions)
export const getNetwork = fetch.bind(null, api.getNetwork, getNetworkActions)
export const getRepresentative = fetch.bind(
  null,
  api.getRepresentative,
  getRepresentativeActions
)
