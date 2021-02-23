export const walletActions = {
  LOAD_WALLET: 'LOAD_WALLET',
  CREATE_WALLET: 'CREATE_WALLET',
  SET_WALLET: 'SET_WALLET',
  CLEAR_WALLET: 'CLEAR_WALLET',
  CONFIRM_WALLET: 'CONFIRM_WALLET',

  COPY_SEED: 'COPY_SEED',

  load: () => ({
    type: walletActions.LOAD_WALLET
  }),

  create: () => ({
    type: walletActions.CREATE_WALLET
  }),

  copy: () => ({
    type: walletActions.COPY_SEED
  }),

  set: (w) => ({
    type: walletActions.SET_WALLET,
    payload: w
  }),

  clear: () => ({
    type: walletActions.CLEAR_WALLET
  }),

  confirm: () => ({
    type: walletActions.CONFIRM_WALLET
  })
}
