import AsyncStorage from '@react-native-async-storage/async-storage'

export const localStorage = {
  async getItem(key) {
    const item = await AsyncStorage.getItem(key)
    return item != null ? JSON.parse(item) : null
  },

  removeItem(key) {
    AsyncStorage.removeItem(key)
  },

  setItem(key, value) {
    const jsonValue = JSON.stringify(value)
    AsyncStorage.setItem(key, jsonValue)
  }
}
