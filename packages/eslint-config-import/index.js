'use strict';

module.exports = {
    'extends': [
        require.resolve('./rules/imports'),
    ],
    'plugins': [
        'import',
    ],
    'parserOptions': {
        sourceType: 'module',
    },
};
