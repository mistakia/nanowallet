import { all } from 'redux-saga/effects'

import { accountSagas } from './accounts'
import { statSagas } from './stats'
import { walletSagas } from './wallet'

export default function* rootSage() {
  yield all([...accountSagas, ...statSagas, ...walletSagas])
}
