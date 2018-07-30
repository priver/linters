'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/node'),
    ],
    'plugins': [
        'node',
    ],
    'env': {
        browser: false,
        commonjs: false,
        es6: true,
        node: true,
        jest: false,
    },
    'parserOptions': {
        ecmaVersion: 2018,
        sourceType: 'script',
        ecmaFeatures: {
            globalReturn: true,
        },
    },
};
