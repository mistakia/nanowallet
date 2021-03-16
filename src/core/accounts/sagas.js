import { fork, call, takeLatest, put, select } from 'redux-saga/effects'

import { localStorageAdapter } from '@core/utils'
import { accountActions } from './actions'
import { getAccountInfo, getAccountHistory } from '@core/api'
import { blockActions, getBlocks, getBlockByHash } from '@core/blocks'
import { getAccounts, getSelectedAccount } from './selectors'

export function* load({ payload }) {
  const { account } = payload

  // load accounts from cache
  const accountsCache = yield call(localStorageAdapter.getItem, 'accounts')
  if (accountsCache) {
    yield put(accountActions.setAccounts(accountsCache))
  }

  yield call(getAccountInfo, account)

  // load blocks from cache
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

      // cache blocks
      const d = yield select(getBlocks)
      const blocks = d.toList().toJS()
      localStorageAdapter.setItem('blocks', blocks)
    }
  }

  // cache accounts
  const accounts = yield select(getAccounts)
  localStorageAdapter.setItem('accounts', accounts.toList().toJS())
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
