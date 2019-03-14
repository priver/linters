'use strict';

module.exports = {
    rules: {
        'align': [true, 'parameters', 'statements'],
        'arrow-parens': true,
        'eofline': true,
        'import-spacing': true,
        'indent': false, // ter-ident
        'jsdoc-format': true,
        'linebreak-style': false,
        'max-line-length': false, // ter-max-len
        'new-parens': true,
        'newline-before-return': false,
        'no-consecutive-blank-lines': [true, 2],
        'no-irregular-whitespace': true,
        'no-trailing-whitespace': true,
        'number-literal-format': true,
        'quotemark': [true, 'single', 'jsx-double', 'avoid-template', 'avoid-escape'],
        'semicolon': [true, 'always'],
        'trailing-comma': [true, {
            singleline: 'never',
            multiline: {
                arrays: 'always',
                objects: 'always',
                functions: 'never',
                imports: 'always',
                exports: 'always',
                typeLiterals: 'always',
            },
        }],
        'typedef-whitespace': [true, {
            'call-signature': 'nospace',
            'index-signature': 'nospace',
            'parameter': 'nospace',
            'property-declaration': 'nospace',
            'variable-declaration': 'nospace',
        }, {
            'call-signature': 'onespace',
            'index-signature': 'onespace',
            'parameter': 'onespace',
            'property-declaration': 'onespace',
            'variable-declaration': 'onespace',
        }],
        'whitespace': [
            'check-branch',
            'check-decl',
            'check-operator',
            'check-module',
            'check-separator',
            'check-rest-spread',
            'check-type',
            'check-typecast',
            'check-type-operator',
            'check-preblock',
            'check-postbrace',
        ],
    },
};
