# GitHub Deployment

- The user's GitHub username is `oxxs2020-hash`
- Use SSH for git operations: `git@github.com:oxxs2020-hash/<repo>.git`
- SSH keys are at `~/.ssh/id_ed25519`
- Git config: name=`OXX2020h`, email=`OXXS2020@gmail.com`
- `gh` CLI is NOT installed via Homebrew (brew is unavailable). Download directly from GitHub releases if needed.
- For GitHub API operations (e.g., enabling Pages), ask the user for a Personal Access Token.
- Default deployment target: GitHub Pages (main branch, root `/`)
- When deploying static sites, commit and push to main, then enable Pages.

## Automation & Response Guidelines
- **Always Push Changes**: After completing code changes or updates, automatically stage, commit with a descriptive message, and push to `origin main`.
- **Always Provide Live Links**: Include the live GitHub Pages URL (`https://oxxs2020-hash.github.io/<repo>/`) and the GitHub repository link in the final response.
