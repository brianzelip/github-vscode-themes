const latest = require('./latest_vscode_theme_tag.js');

latest().then((value) => {
  console.log(value);
});
