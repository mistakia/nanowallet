import { all } from 'redux-saga/effects'

import { walletSagas } from './wallet'

export default function* rootSage() {
  yield all([...walletSagas])
}
