module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },

    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
    ],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native', 'import'],
    rules: {
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
        'import/order': [
            'error',
            {
                groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
                pathGroups: [
                    {
                        pattern: '@(react|react-native)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['internal', 'react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
    },
};
