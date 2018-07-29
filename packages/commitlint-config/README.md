# @priver/commitlint-config

Shareable config for [commitlint].

[![license](https://img.shields.io/github/license/priver/linters.svg)](https://github.com/priver/linters/blob/master/LICENSE.txt)

## Installation

```bash
yarn add --dev @commitlint/cli @priver/commitlint-config
# or
npm install --save-dev @commitlint/cli @priver/commitlint-config
```

## Usage

Add the following in your `.commitlintrc.json`:

```json
{
    "extends": [
        "@priver/commitlint-config"
    ]
}
```

[commitlint]: http://marionebl.github.io/commitlint/
