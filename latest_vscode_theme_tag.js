require('dotenv').config();
const { request } = require('@octokit/request');

module.exports = async function vscodeThemeLatestTag() {
  const response = await request('GET /repos/{owner}/{repo}/releases/latest', {
    headers: {
      authorization: `token ${process.env.GITHUB_PAT}`
    },
    owner: 'primer',
    repo: 'github-vscode-theme'
  });

  return response.data.tag_name;
};
