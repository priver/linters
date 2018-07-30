# @priver/eslint-config-import

Shareable config for [`eslint-plugin-import`].

[![npm version](https://img.shields.io/npm/v/@priver/eslint-config-import.svg)](https://www.npmjs.com/package/@priver/eslint-config-import)
[![npm downloads](https://img.shields.io/npm/dm/@priver/eslint-config-import.svg)](https://www.npmjs.com/package/@priver/eslint-config-import)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn add --dev eslint eslint-plugin-import @priver/eslint-config @priver/eslint-config-import
# or
npm install --save-dev eslint eslint-plugin-import @priver/eslint-config @priver/eslint-config-import
```

## Usage

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": [
        "@priver/eslint-config",
        "@priver/eslint-config-import"
    ]
}
```

[`eslint-plugin-import`]: https://github.com/benmosher/eslint-plugin-import
