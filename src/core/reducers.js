import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import { walletReducer } from './wallet'
import { statReducer } from './stats'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    stats: statReducer,
    wallet: walletReducer
  })

export default rootReducer
