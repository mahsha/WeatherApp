module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  fakeTimers: { enableGlobally: true },
};
