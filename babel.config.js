module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@src/screens': './src/screens',
          '@src/navigation': './src/navigation',
          '@src/assets': './src/assets',
          '@src/res': './src/res',
          '@src/utils': './src/utils',
          '@src/network': './src/network',
          '@src/models': './src/models',
          '@src/queries': './src/queries',
          '@src/atoms': './src/atoms',
        },
      },
    ],
  ],
};
