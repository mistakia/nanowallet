import { Record } from 'immutable'

import { statActions } from './actions'

const initialState = new Record({
  networkConfirmationsPerSecond: null,
  networkAvgConfirmationTime: null,
  networkDifficulty: null,
  networkPrincipleRepresentativesOnline: null,
  networkConfirmations24h: null,
  networkOnlineStake: null,
  circulatingSupply: null,

  currentPrice: null,

  marketVolume24: null,
  bidTotal: null,
  askTotal: null,

  representativeSync: null,
  representativeUptime30d: null,
  representativeWeight: null,
  representativeLatency: null,
  representativeUptime: null,
  representativeNinjaScore: null,
  representativeAvoid: null,
  representativeLastVoted: null
})

export function statReducer(state = initialState(), { payload, type }) {
  switch (type) {
    case statActions.GET_MARKETS_FULFILLED: {
      const marketVolume24 = payload.data.data.reduce((s, i) => s + i.volume, 0)
      const bidTotal = payload.data.data.reduce((s, i) => s + i.bidTotal, 0)
      const askTotal = payload.data.data.reduce((s, i) => s + i.askTotal, 0)

      return state.merge({
        currentPrice: payload.data.data[0].price,
        marketVolume24,
        bidTotal,
        askTotal
      })
    }

    case statActions.GET_REPRESENTATIVE_FULFILLED: {
      return state.merge({
        representativeSync: payload.data.monitor.sync,
        representativeUptime30d: payload.data.uptime_over.month,
        representativeWeight: payload.data.votingweight,
        representativeLatency: payload.data.votelatency,
        representativeUptime: payload.data.uptime,
        representativeNinjaScore: payload.data.score,
        representativeAvoid: payload.data.avoid,
        representativeLastVoted: payload.data.lastVoted
      })
    }

    case statActions.GET_NETWORK_FULFILLED: {
      return state.merge({
        networkConfirmations24h: payload.data.TOTAL_CONFIRMATIONS_24H,
        circulatingSupply: payload.data.circulatingSupply
      })
    }

    default:
      return state
  }
}
