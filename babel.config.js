module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
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
                },
            },
        ],
    ],
};
