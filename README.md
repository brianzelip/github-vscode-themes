# github-vscode-themes

![npm](https://img.shields.io/npm/v/github-vscode-themes)

![sync upstream](https://github.com/brianzelip/github-vscode-themes/actions/workflows/sync-upstream.yml/badge.svg)

This is a npm package wrapper around [Primer's github-vscode-theme](https://github.com/primer/github-vscode-theme).

## Motivation

I want to [use](https://github.com/brianzelip/hyper-github-dark-dimmed) the built themes from github-vscode-theme, but github-vscode-theme is not published to npm.

## Build process

1. Get github-vscode-theme repo @ latest

- Query github api for github-vscode-theme latest release tag

2. Test if latest is different from previous latest TODO

- Track vscode the latest version via [package.json `config` property](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#config)

```json
{
  "config": {
    "latestUpstream": "v4.1.1"
  }
}
```

3. Clone vscode theme

```bash
git clone git@github.com:primer/github-vscode-theme.git ./temp
cd temp
git checkout $LATEST
```

- See [Setting an environment variable for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions#setting-an-environment-variable)

```bash
# Set environment variable `tag` from latest version tag as stdout
tag="$(node index.js)"
echo $tag # v4.1.1
```

- See [this example from !so](https://stackoverflow.com/questions/58465057/trigger-a-github-action-when-another-repository-creates-a-new-release) --> https://github.com/peter-evans/create-pull-request/blob/master/docs/examples.md#update-swaggerui-for-github-pages

4. Build themes

```bash
npm ci
npm run build
```

5. Copy themes to dist

- Should clean up dist before adding new data, something like `rm ./dist/*.json`

```bash
cp themes/*.json ../dist/
```

6. Cleanup

```bash
cd ..
rm -rf temp
```

7. Run tests TODO

8. Update changelog TODO

9. Bump version to vscode theme's latest version

- WOW, overwriting package-lock.json via jq output doesn't work without some awkward work around. It's as if the lock file won't let itself be overwritten with any content, it just gets its content removed but not rewritten via this command: `jq '.packages[""].version |= "4.1.1"' package-lock.json > package-lock.json`
- also, the above wouldn't be a problem if
  a) the github actions runner ubuntu-latest had npm v7 installed instead of v6
  b) I could run `npm i npm@latest -g` on the gh actions runner
  (lock file is different from v6 to v7; locally v7 is used)

10. Commit new release

11. Tag new release

12. Push

13. Publish

## Install

```bash
npm install github-vscode-themes
```

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

## Author

Brian Zelip, https://zelip.me

## License

MIT
