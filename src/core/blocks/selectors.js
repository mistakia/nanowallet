export function getBlocks(state) {
  return state.get('blocks')
}

export function getBlockByHash(state, hash) {
  return getBlocks(state).get(hash)
}
