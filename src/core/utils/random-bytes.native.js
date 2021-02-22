import { randomBytes as RNRandomBytes } from 'react-native-randombytes'

export const randomBytes = {
  generate () {
    return RNRandomBytes(32).toString('hex')
  }
}
