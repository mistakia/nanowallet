export const accountActions = {
  LOAD_ACCOUNT: 'LOAD_ACCOUNT',

  GET_ACCOUNT_INFO_PENDING: 'GET_ACCOUNT_INFO_PENDING',
  GET_ACCOUNT_INFO_FAILED: 'GET_ACCOUNT_INFO_FAILED',
  GET_ACCOUNT_INFO_FULFILLED: 'GET_ACCOUNT_INFO_FULFILLED',

  GET_ACCOUNT_HISTORY_PENDING: 'GET_ACCOUNT_HISTORY_PENDING',
  GET_ACCOUNT_HISTORY_FAILED: 'GET_ACCOUNT_HISTORY_FAILED',
  GET_ACCOUNT_HISTORY_FULFILLED: 'GET_ACCOUNT_HISTORY_FULFILLED',

  load: (account) => ({
    type: accountActions.LOAD_ACCOUNT,
    payload: {
      account
    }
  }),

  getAccountInfoPending: (opts) => ({
    type: accountActions.GET_ACCOUNT_INFO_PENDING,
    payload: {
      opts
    }
  }),

  getAccountInfoFailed: (opts, error) => ({
    type: accountActions.GET_ACCOUNT_INFO_FAILED,
    payload: {
      opts,
      error
    }
  }),

  getAccountInfoFulfilled: (opts, data) => ({
    type: accountActions.GET_ACCOUNT_INFO_FULFILLED,
    payload: {
      opts,
      data
    }
  }),

  getAccountHistoryPending: (opts) => ({
    type: accountActions.GET_ACCOUNT_HISTORY_PENDING,
    payload: {
      opts
    }
  }),

  getAccountHistoryFailed: (opts, error) => ({
    type: accountActions.GET_ACCOUNT_HISTORY_FAILED,
    payload: {
      opts,
      error
    }
  }),

  getAccountHistoryFulfilled: (opts, data) => ({
    type: accountActions.GET_ACCOUNT_HISTORY_FULFILLED,
    payload: {
      opts,
      data
    }
  })
}

export const getAccountInfoActions = {
  pending: accountActions.getAccountInfoPending,
  failed: accountActions.getAccountInfoFailed,
  fulfilled: accountActions.getAccountInfoFulfilled
}

export const getAccountHistoryActions = {
  pending: accountActions.getAccountHistoryPending,
  failed: accountActions.getAccountHistoryFailed,
  fulfilled: accountActions.getAccountHistoryFulfilled
}
