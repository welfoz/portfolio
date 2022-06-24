module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'next',
        'next/core-web-vitals',
        // 'react-app'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        '@typescript-eslint',
        'prettier',
        // 'react-hooks'
    ],
    'rules': {
        // 'prettier/prettier': 'error'
    // "react-hooks/rules-of-hooks": 'error',
    // "react-hooks/exhaustive-deps": 'warn' // <--- THIS IS THE NEW RULE
    }
}
