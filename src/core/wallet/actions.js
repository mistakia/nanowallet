export const walletActions = {
  LOAD_WALLET: 'LOAD_WALLET',
  CREATE_WALLET: 'CREATE_WALLET',
  SET_WALLET: 'SET_WALLET',
  CONFIRM_WALLET: 'CONFIRM_WALLET',
  EXIT_WALLET: 'EXIT_WALLET',

  IMPORT_FROM_SEED: 'IMPORT_FROM_SEED',

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

  exit: () => ({
    type: walletActions.EXIT_WALLET
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
  }),

  importFromSeed: (seed) => ({
    type: walletActions.IMPORT_FROM_SEED,
    payload: { seed }
  })
}
