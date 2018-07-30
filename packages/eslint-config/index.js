'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/errors'),
        require.resolve('./rules/best-practices'),
        require.resolve('./rules/strict'),
        require.resolve('./rules/variables'),
        require.resolve('./rules/commonjs'),
        require.resolve('./rules/style'),
        require.resolve('./rules/es6'),
    ],
    'env': {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    'parserOptions': {
        ecmaVersion: 2018,
    },
};
