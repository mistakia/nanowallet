export const blockActions = {
  SET_BLOCKS: 'SET_BLOCKS',

  set: (blocks) => ({
    type: blockActions.SET_BLOCKS,
    payload: {
      blocks
    }
  })
}
