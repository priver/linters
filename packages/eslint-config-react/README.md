# @priver/eslint-config-react

Shareable config for [`eslint-plugin-react`].

[![npm version](https://img.shields.io/npm/v/@priver/eslint-config-react.svg)](https://www.npmjs.com/package/@priver/eslint-config-react)
[![npm downloads](https://img.shields.io/npm/dm/@priver/eslint-config-react.svg)](https://www.npmjs.com/package/@priver/eslint-config-react)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn add --dev eslint eslint-plugin-import eslint-plugin-react @priver/eslint-config @priver/eslint-config-import @priver/eslint-config-react
# or
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react @priver/eslint-config @priver/eslint-config-import @priver/eslint-config-react
```

## Usage

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": [
        "@priver/eslint-config",
        "@priver/eslint-config-import",
        "@priver/eslint-config-react"
    ],
    "settings": {
        "react": {
            "version": "16.4"
        }
    }
}
```

[`eslint-plugin-react`]: https://github.com/yannickcr/eslint-plugin-react
