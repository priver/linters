'use strict';

module.exports = {
    rules: {
        'array-bracket-newline': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': 'off',
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'camelcase': ['error', { properties: 'never' }],
        'capitalized-comments': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'off',
        'func-names': 'warn',
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        'function-paren-newline': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-depth': 'off',
        'max-len': ['error', 120, 4, { ignoreUrls: true, ignoreRegExpLiterals: true }],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': ['error', { max: 1 }],
        'multiline-comment-style': 'off',
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode.',
            },
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': 'off',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': 'off',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed', { keywords: true }],
        'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'semi-style': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': ['error', { after: true, before: false }],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',
    },
};
