# github-vscode-themes

This is a npm package wrapper around [Primer's github-vscode-theme](https://github.com/primer/github-vscode-theme).

## Reason

I want to [use](https://github.com/brianzelip/hyper-github-dark-dimmed) the built themes from github-vscode-theme, but github-vscode-theme is not published to npm.

## Build process

1. Get github-vscode-theme repo @ latest

- Query github api for github-vscode-theme latest release tag

2. Clone vscode theme

```bash
git clone git@github.com:primer/github-vscode-theme.git ./temp
cd temp
git checkout $LATEST
```

3. Build themes

```bash
npm i
npm run build
```

4. Copy themes to dist

```bash
cp themes/*.json ../dist/
```

5. Cleanup

```bash
cd ..
rm -rf temp
```

6. Run tests TODO

7. Update changelog TODO

8. Bump version to vscode theme's latest version

9. Commit new release

10. Tag new release

11. Push

12. Publish

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
