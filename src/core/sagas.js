import { all } from 'redux-saga/effects'

import { statSagas } from './stats'
import { walletSagas } from './wallet'

export default function* rootSage() {
  yield all([...statSagas, ...walletSagas])
}
