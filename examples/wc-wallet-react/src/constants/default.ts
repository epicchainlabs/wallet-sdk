import { Chain, Method } from '@cityofzion/wallet-connect-sdk-wallet-react'

export const DEFAULT_RELAY_PROVIDER = 'wss://relay.walletconnect.com'

export const DEFAULT_PROJECT_ID = '56de852a69580b46d61b53f7b3922ce1'

export const DEFAULT_METHODS: Method[] = [
  'invokeFunction',
  'testInvoke',
  'signMessage',
  'verifyMessage',
  'getWalletInfo',
  'traverseIterator',
  'getNetworkVersion',
  'decrypt',
  'encrypt',
  'decryptFromArray',
  'calculateFee',
  'signTransaction',
]

export const DEFAULT_LOGGER = 'error'

export const DEFAULT_APP_METADATA = {
  name: 'EpicChain Wallet Prototype',
  description: 'WalletConnect integration Prototype',
  url: 'https://epic-chain.org/',
  icons: [
    'https://raw.githubusercontent.com/CityOfZion/visual-identity/develop/_CoZ%20Branding/_Logo/_Logo%20icon/_PNG%20200x178px/CoZ_Icon_DARKBLUE_200x178px.png',
  ],
}

export const DEFAULT_CHAIN: Chain = 'testnet'
export const DEFAULT_NETWORKS: Record<Chain, { url: string | null; name: string }> = {
  testnet: { url: 'testnet1-seed.epic-chain.org:20111', name: 'Testnet' },
  mainnet: { url: 'http://mainnet1-seed.epic-chain.org:10111', name: 'Mainnet' },
  private: { url: null, name: 'Private Network' },
}
export const DEFAULT_BLOCKCHAINS = ['neo3'] as const
