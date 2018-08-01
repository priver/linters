# @priver/tslint-config

Shareable config for [tslint]. Uses rules from [`tslint-eslint-rules`].

[![npm version](https://img.shields.io/npm/v/@priver/tslint-config.svg)](https://www.npmjs.com/package/@priver/tslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@priver/tslint-config.svg)](https://www.npmjs.com/package/@priver/tslint-config)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

```bash
yarn add --dev typescript tslint @priver/tslint-config
# or
npm install --save-dev typescript tslint @priver/tslint-config
```

## Usage

Add the following in your `tslint.json`:

```json
{
    "extends": "@priver/tslint-config",
}
```

[tslint]: https://palantir.github.io/tslint/
[`tslint-eslint-rules`]: https://github.com/buzinas/tslint-eslint-rules
