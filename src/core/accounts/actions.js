export const accountActions = {
  LOAD_ACCOUNT: 'LOAD_ACCOUNT',

  GET_ACCOUNT_INFO_PENDING: 'GET_ACCOUNT_INFO_PENDING',
  GET_ACCOUNT_INFO_FAILED: 'GET_ACCOUNT_INFO_FAILED',
  GET_ACCOUNT_INFO_FULFILLED: 'GET_ACCOUNT_INFO_FULFILLED',

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
  })
}

export const getAccountInfoActions = {
  pending: accountActions.getAccountInfoPending,
  failed: accountActions.getAccountInfoFailed,
  fulfilled: accountActions.getAccountInfoFulfilled
}
