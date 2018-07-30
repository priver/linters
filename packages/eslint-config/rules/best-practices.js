'use strict';

module.exports = {
    rules: {
        'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': 'off',
        'consistent-return': 'error',
        'curly': 'error',
        'default-case': ['error', { commentPattern: '^no default$' }],
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
        'guard-for-in': 'error',
        'max-classes-per-file': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': ['error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
        'radix': 'off',
        'require-await': 'off',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'inside'],
        'yoda': 'error',
    },
};