# @priver/commitlint-config-lerna

Shareable config for [commitlint]. For use in monorepositories managed by [lerna].

[![npm version](https://img.shields.io/npm/v/@priver/commitlint-config-lerna.svg)](https://www.npmjs.com/package/@priver/commitlint-config-lerna)
[![npm downloads](https://img.shields.io/npm/dm/@priver/commitlint-config-lerna.svg)](https://www.npmjs.com/package/@priver/commitlint-config-lerna)
[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## DEPRECATED

You should use [config-lerna-scopes].

## Installation

```bash
yarn add --dev @commitlint/cli @priver/commitlint-config @priver/commitlint-config-lerna
# or
npm install --save-dev @commitlint/cli @priver/commitlint-config @priver/commitlint-config-lerna
```

## Usage

Add the following in your `.commitlintrc.json`:

```json
{
    "extends": [
        "@priver/commitlint-config",
        "@priver/commitlint-config-lerna"
    ]
}
```

[commitlint]: http://marionebl.github.io/commitlint/
[lerna]: https://lernajs.io/
[config-lerna-scopes]: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-lerna-scopes
