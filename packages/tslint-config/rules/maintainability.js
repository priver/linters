'use strict';

module.exports = {
    rules: {
        'cyclomatic-complexity': false,
        'deprecation': false,
        'eofline': true,
        'indent': false,
        'ter-indent': [true, 4, { SwitchCase: 1 }],
        'linebreak-style': false,
        'max-classes-per-file': false,
        'max-file-line-count': false,
        'max-line-length': false, // ter-max-len
        'no-default-export': false,
        'no-duplicate-imports': true,
        'no-mergeable-namespace': false,
        'no-require-imports': true,
        'object-literal-sort-keys': false,
        'prefer-const': true,
        'prefer-readonly': false,
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
    },
};
