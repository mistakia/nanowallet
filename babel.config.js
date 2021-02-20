module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    // aliases
    [
      require('babel-plugin-module-resolver'), {
        'root': ['./'],
        'alias': {
          '@core': './src/core',
          '@components': './src/views/components',
          '@views': './src/views',
          '@pages': './src/pages'
        }
      }
    ],

    'react-native-paper/babel'
  ]
}
