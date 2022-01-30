# github-vscode-themes

![GitHub Actions](https://github.com/brianzelip/github-vscode-themes/actions/workflows/auto-update.yml/badge.svg) ![npm](https://img.shields.io/npm/v/github-vscode-themes)

This is a simple npm package wrapper around Primer's [github-vscode-theme](https://github.com/primer/github-vscode-theme) project to make its built theme data available via npm.

Primer's project is not published to npm, and requires a build step to create the theme json files.

This package uses GitHub Actions to auto build Primer's latest release and publish the new theme files to npm. It started at v4.1.1, which was Primer's latest release when this package was created.

## Install

```bash
npm i -S github-vscode-themes
```

## Use

```js
const darkDimmed = require('github-vscode-themes').darkDimmed;
// Or
import { darkDimmed } from 'github-vscode-themes';

console.log(darkDimmed);
// Logs an object, see ./dist for details
```

Primer's project currently provides 9 different themes, which are available in this package via the following property names:

1. `dark`
2. `darkColorblind`
3. `darkDefault`
4. `darkDimmed`
5. `darkHighContrast`
6. `light`
7. `lightColorblind`
8. `lightDefault`
9. `lightHighContrast`

## Contributing

Open a PR!

## References

- [Update SwaggerUI for GitHub Pages example at peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request/blob/master/docs/examples.md#update-swaggerui-for-github-pages)
- [How do I update a single value in a json document using jq?](https://stackoverflow.com/a/31037640/2145103)
- [jq Play](https://jqplay.org/)
- https://keepachangelog.com/en/1.0.0/
- [Append text to a file using sed](https://stackoverflow.com/a/30219386/2145103)
- [How to use sed to replace only the first occurrence in a file?](https://stackoverflow.com/a/148473/2145103)
- [GNU sed REPL](https://sed.js.org/)
- [How can I strip first X characters from string using sed?](https://stackoverflow.com/a/11470096/2145103)
- [How do I fix “sed: illegal option — r” in macOS Sierra Android build?](https://stackoverflow.com/q/43696304/2145103)
- [Jq to replace text directly on file (like sed -i)](https://stackoverflow.com/a/36577521/2145103)
- [Grabbing the first [x] characters for a string from a pipe](https://unix.stackexchange.com/a/3455/161921)
- [sed Manual](https://www.gnu.org/software/sed/manual/sed.html)
- [How to replace paired square brackets with other syntax with sed?](https://stackoverflow.com/a/10646534/2145103)
- [sed replace ' with \'](https://stackoverflow.com/a/11514818/2145103)
- [Push a commit using the built-in token](https://github.com/actions/checkout#Push-a-commit-using-the-built-in-token)
- [GitHub Actions to securely publish npm packages](https://snyk.io/blog/github-actions-to-securely-publish-npm-packages/)

## Author

Brian Zelip, https://zelip.me

## License

MIT
