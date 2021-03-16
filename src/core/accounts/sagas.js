import { fork, call, takeLatest, put, select } from 'redux-saga/effects'

import { localStorageAdapter } from '@core/utils'
import { accountActions } from './actions'
import { getAccountInfo, getAccountHistory } from '@core/api'
import { blockActions, getBlocks, getBlockByHash } from '@core/blocks'
import { getSelectedAccount } from './selectors'

export function* load({ payload }) {
  const { account } = payload

  yield call(getAccountInfo, account)

  // load blocks from disk
  const b = yield call(localStorageAdapter.getItem, 'blocks')
  if (b) {
    yield put(blockActions.set(b))
  }

  // check if frontier exists in block store before getting account history
  const a = yield select(getSelectedAccount)
  if (a.frontier) {
    const block = yield select(getBlockByHash, a.frontier)
    if (!block) {
      yield call(getAccountHistory, account)

      const d = yield select(getBlocks)
      const blocks = d.toList().toJS()
      localStorageAdapter.setItem('blocks', blocks)
    }
  }
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
