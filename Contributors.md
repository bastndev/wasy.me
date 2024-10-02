# Contributor Covenant Code of Conduct

## Welcome to 'wasy.me' 🌐

We are delighted that you're interested in contributing to our project! This document will guide you through the steps necessary to contribute your valuable work to 'wasy.me', a project developed with Astro. We aim to make this process simple and transparent, so here’s a step-by-step guide.

### Getting Started 🚀

1. **Familiarize yourself with Astro JS**: If you haven't done so already, make sure you understand how Astro JS works. You can find lots of useful information in [the official Astro documentation](https://docs.astro.build).

2. **Set up your development environment**: We recommend using `pnpm` as a package manager due to its efficiency and speed. If you don't have `pnpm` installed, you can do so by running `npm install -g pnpm`.

### How to Contribute 🛠

#### 1. Set up your environment

- **Fork the repository**: Fork the project to your GitHub account to have your own copy. To do this, click the "Fork" button at the top right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.

- **Clone your fork**: After forking, clone the repository to your local machine. To do this, copy the URL of your fork by clicking the green "Code" button and then run `git clone <fork URL>` in your terminal.

- **Add the original repository as a remote**: To keep your fork updated with changes from the original repository, add the original repository as a remote. You can do this by running `git remote add upstream <original repository URL>`.

- **Ensure you're using the correct Node version**: To do this, use `nvm use` or `nvm use <version>`. If you don't use `nvm`, make sure to download the version specified in `.node-version` or `.nvmrc`.

- **Install dependencies**: Navigate to the cloned project directory and run `pnpm install` to install all the necessary dependencies.

#### 2. Work on your changes

- **Sync your fork**: You can do this from `github.com/your-username/your-repository-wasy.me` by clicking on `Sync fork`. You can also do it from the terminal using `gh repo sync -b main` or `git switch main && git fetch upstream && git merge upstream/main`. More information is available in the [official GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
- **Create a new branch**: Before starting your changes, create a new branch using `git switch -c your-branch-name`.
- **Develop your changes**: Implement your changes or improvements in your local branch. Make sure to follow the project's coding practices and standards.
- **Test your changes**: Run `pnpm run dev` to start Astro's development server and review your changes in the browser.

#### 3. Submit your changes

- **Commit your changes**: Once you're satisfied with your changes, commit them with a clear and descriptive message.
- **Push to your fork**: Push your branch with the changes to your fork on GitHub using `git push origin your-branch-name`.
- **Create a Pull Request (PR)**: On GitHub, go to your fork of 'wasy.me' and click on "Pull request" to initiate one. Be sure to clearly describe what changes you've made and why they are necessary or beneficial for the project.

### Best Practices 🌟

- **Review open issues** before opening a PR. If you believe you can fix an issue and there's no PR already open, use `#issue-number` in your commit message to link it to the issue. It's also a good idea to leave a comment so others know which PR is addressing the issue.
- **Review open PRs** to make sure you're not working on something already in progress. You can always help with open PRs by contributing changes, comments, reviews, etc.
- **Keep your commits clean and descriptive**.
- **Follow the project's coding conventions**.
- **Update your branch frequently** to keep it up-to-date with the main branch of the project.
- **Participate in discussions** on your PR if there are comments or suggestions.
- **Use global objects and types** like `new Date` -> `new window.Date`, `NodeListOf` -> `globalThis.NodeListOf`, `NodeJS` -> `globalThis.NodeJS`. If you're unsure what to use, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) or Astro's [framework documentation](https://docs.astro.build/en/guides/typescript/#extending-window-and-globalthis).

### Need help? 🆘

If you have any questions or need help, don't hesitate to open an "issue" in the repository. Our team and the community will be happy to assist you.

Thank you for contributing to 'wasy.me'! Together, we're building something amazing. 🚀
