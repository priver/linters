# @priver/commitlint-config-lerna

Shareable config for [commitlint]. For use in monorepositories managed by [lerna].

[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

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
