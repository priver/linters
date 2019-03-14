'use strict';

module.exports = {
    rules: {
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'error',
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'error',
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'error',
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/es-syntax': 'error',
        'node/no-unsupported-features/node-builtins': 'error',
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-decoder': ['error', 'never'], // node >=11
        'node/prefer-global/text-encoder': ['error', 'never'], // node >=11
        'node/prefer-global/url': ['error', 'never'], // node >=10
        'node/prefer-global/url-search-params': ['error', 'never'], // node >=10
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
        'node/no-deprecated-api': 'error',
        'node/exports-style': ['error', 'module.exports'],
    },
};
