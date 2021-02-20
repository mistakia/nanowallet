import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import { walletReducer } from './wallet'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  wallet: walletReducer
})

export default rootReducer
