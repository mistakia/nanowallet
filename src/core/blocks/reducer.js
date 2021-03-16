import { Map } from 'immutable'

import { accountActions } from '@core/accounts'
import { createBlock } from './block'
import { blockActions } from './actions'

export function blocksReducer(state = new Map(), { payload, type }) {
  switch (type) {
    case accountActions.GET_ACCOUNT_HISTORY_FULFILLED:
      return state.withMutations((blocks) => {
        payload.data.history.forEach((blockData) => {
          blocks.set(
            blockData.hash,
            createBlock({
              block_account: payload.opts.address,
              ...blockData
            })
          )
        })
      })

    case blockActions.SET_BLOCKS:
      return state.withMutations((blocks) => {
        payload.blocks.forEach((blockData) => {
          blocks.set(blockData.hash, createBlock(blockData))
        })
      })

    default:
      return state
  }
}
