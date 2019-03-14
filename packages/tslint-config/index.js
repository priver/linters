'use strict';

module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        require.resolve('./rules/typescript'),
        require.resolve('./rules/functionality'),
        require.resolve('./rules/maintainability'),
        require.resolve('./rules/style'),
        require.resolve('./rules/format'),
        require.resolve('./rules/eslint'),
    ],
};
