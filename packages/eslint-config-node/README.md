# @priver/eslint-config-node

Shareable config for [`eslint-plugin-node`].

[![npm version](https://img.shields.io/npm/v/@priver/eslint-config-node.svg)](https://www.npmjs.com/package/@priver/eslint-config-node)
[![npm downloads](https://img.shields.io/npm/dm/@priver/eslint-config-node.svg)](https://www.npmjs.com/package/@priver/eslint-config-node)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn add --dev eslint eslint-plugin-node @priver/eslint-config @priver/eslint-config-node
# or
npm install --save-dev eslint eslint-plugin-node @priver/eslint-config @priver/eslint-config-node
```

## Usage

Add the following in your `.eslintrc.json`:

```json
{
    "root": true,
    "extends": [
        "@priver/eslint-config",
        "@priver/eslint-config-node"
    ]
}
```

[`eslint-plugin-node`]: https://github.com/mysticatea/eslint-plugin-node
