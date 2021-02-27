export const walletActions = {
  LOAD_WALLET: 'LOAD_WALLET',
  CREATE_WALLET: 'CREATE_WALLET',
  SET_WALLET: 'SET_WALLET',
  CLEAR_WALLET: 'CLEAR_WALLET',
  CONFIRM_WALLET: 'CONFIRM_WALLET',

  COPY_SEED: 'COPY_SEED',

  ADD_ACCOUNT: 'ADD_ACCOUNT',
  SET_ACCOUNTS: 'SET_ACCOUNTS',

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
  }),

  addAccount: () => ({
    type: walletActions.ADD_ACCOUNT
  }),

  setAccounts: (accounts) => ({
    type: walletActions.SET_ACCOUNTS,
    payload: accounts
  })
}
