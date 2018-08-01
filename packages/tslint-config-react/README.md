# @priver/tslint-config-react

Shareable config for [`tslint-react`].

[![npm version](https://img.shields.io/npm/v/@priver/tslint-config-react.svg)](https://www.npmjs.com/package/@priver/tslint-config-react)
[![npm downloads](https://img.shields.io/npm/dm/@priver/tslint-config-react.svg)](https://www.npmjs.com/package/@priver/tslint-config-react)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

```bash
yarn add --dev typescript tslint @priver/tslint-config @priver/tslint-config-react
# or
npm install --save-dev typescript tslint @priver/tslint-config @priver/tslint-config-react
```

## Usage

Add the following in your `tslint.json`:

```json
{
    "extends": [
        "@priver/tslint-config",
        "@priver/tslint-config-react"
    ]
}
```

[`tslint-react`]: https://github.com/palantir/tslint-react
