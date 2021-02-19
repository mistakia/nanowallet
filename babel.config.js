module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // aliases
    [
      require('babel-plugin-module-resolver'), {
        'root': ['./'],
        'alias': {
          '@core': './app/core',
          '@components': './app/views/components'
        }
      }
    ]
  ]
}
