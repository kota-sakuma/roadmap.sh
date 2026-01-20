import chalk from 'chalk';
import figlet from 'figlet';
import ky from 'ky';

async function fetchRepoInfo(repoPath) {
  try {
    const data = await ky.get(`https://api.github.com/repos/${repoPath}`).json();
    console.log(chalk.magenta(figlet.textSync('Repo Info')));
    console.log(`Stars: ${chalk.yellow(data.stargazers_count)}`);
  } catch (error) {
    const errorData = await error.response.json();
    console.error(chalk.red('Error:'), errorData.message);
    process.exit(1);
  }
}

fetchRepoInfo('sindresorhus/ky');
