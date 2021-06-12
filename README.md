# github-vscode-themes

This is a npm package wrapper around [Primer's github-vscode-theme](https://github.com/primer/github-vscode-theme).

## Reason

I want to [use](https://github.com/brianzelip/hyper-github-dark-dimmed) the built themes from github-vscode-theme, but github-vscode-theme is not published to npm.

## Concept

Use GitHub Actions to:

1. get github-vscode-theme repo
2. run `npm i`
3. run `npm run build`
4. publish the built themes directory as npm package

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
