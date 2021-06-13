const latestTag = require('./latest_vscode_theme_tag.js');

latestTag().then((value) => {
  console.log(value);
});
