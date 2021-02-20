import { Record, List } from 'immutable'

const initialState = new Record({
  seed: null,
  accounts: new List()
})

export function walletReducer (state = initialState(), { payload, type }) {
  switch (type) {
    default:
      return state
  }
}
