# github-vscode-themes

This is a npm package wrapper around [Primer's github-vscode-theme](https://github.com/primer/github-vscode-theme).

## Reason

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

## Author

Brian Zelip, https://zelip.me

## License

MIT
