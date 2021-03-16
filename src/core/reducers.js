import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import { accountsReducer } from './accounts'
import { blocksReducer } from './blocks'
import { walletReducer } from './wallet'
import { statReducer } from './stats'

const rootReducer = (history) =>
  combineReducers({
    accounts: accountsReducer,
    blocks: blocksReducer,
    router: connectRouter(history),
    stats: statReducer,
    wallet: walletReducer
  })

export default rootReducer
