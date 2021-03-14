import constants from '@core/constants'

export const getNode = function () {
  // TODO - get dynamic list of nodes
  const nodeIdx = 0 // Math.floor(Math.random() * constants.NODES.length)
  return constants.NODES[nodeIdx]
}
