export const statActions = {
  LOAD_MARKETS: 'LOAD_MARKETS',

  GET_MARKETS_PENDING: 'GET_MARKETS_PENDING',
  GET_MARKETS_FULFILLED: 'GET_MARKETS_FULFILLED',
  GET_MARKETS_FAILED: 'GET_MARKETS_FAILED',

  LOAD_REPRESENTATIVE: 'LOAD_REPRESENTATIVE',

  GET_REPRESENTATIVE_PENDING: 'GET_REPRESENTATIVE_PENDING',
  GET_REPRESENTATIVE_FULFILLED: 'GET_REPRESENTATIVE_FULFILLED',
  GET_REPRESENTATIVE_FAILED: 'GET_REPRESENTATIVE_FAILED',

  LOAD_NETWORK: 'LOAD_NETWORK',

  GET_NETWORK_PENDING: 'GET_NETWORK_PENDING',
  GET_NETWORK_FAILED: 'GET_NETWORK_FAILED',
  GET_NETWORK_FULFILLED: 'GET_NETWORK_FULFILLED',

  loadMarkets: () => ({
    type: statActions.LOAD_MARKETS
  }),

  getMarketsPending: (opts) => ({
    type: statActions.GET_MARKETS_PENDING,
    payload: {
      opts
    }
  }),

  getMarketsFailed: (opts, error) => ({
    type: statActions.GET_MARKETS_FAILED,
    payload: {
      opts,
      error
    }
  }),

  getMarketsFulfilled: (opts, data) => ({
    type: statActions.GET_MARKETS_FULFILLED,
    payload: {
      opts,
      data
    }
  }),

  loadRepresentative: () => ({
    type: statActions.LOAD_REPRESENTATIVE
  }),

  getRepresentativePending: (opts) => ({
    type: statActions.GET_REPRESENTATIVE_PENDING,
    payload: { opts }
  }),

  getRepresentativeFailed: (opts, error) => ({
    type: statActions.GET_REPRESENTATIVE_FAILED,
    payload: { opts, error }
  }),

  getRepresentativeFulfilled: (opts, data) => ({
    type: statActions.GET_REPRESENTATIVE_FULFILLED,
    payload: { opts, data }
  }),

  loadNetwork: () => ({
    type: statActions.LOAD_NETWORK
  }),

  getNetworkPending: (opts) => ({
    type: statActions.GET_NETWORK_PENDING,
    payload: { opts }
  }),

  getNetworkFailed: (opts, error) => ({
    type: statActions.GET_NETWORK_FAILED,
    payload: { opts, error }
  }),

  getNetworkFulfilled: (opts, data) => ({
    type: statActions.GET_NETWORK_FULFILLED,
    payload: { opts, data }
  })
}

export const getMarketsActions = {
  pending: statActions.getMarketsPending,
  failed: statActions.getMarketsFailed,
  fulfilled: statActions.getMarketsFulfilled
}

export const getRepresentativeActions = {
  pending: statActions.getRepresentativePending,
  failed: statActions.getRepresentativeFailed,
  fulfilled: statActions.getRepresentativeFulfilled
}

export const getNetworkActions = {
  pending: statActions.getNetworkPending,
  failed: statActions.getNetworkFailed,
  fulfilled: statActions.getNetworkFulfilled
}
