import axios from 'axios';
import chalk from 'chalk';

async function getUserInfo(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );
    console.log(chalk.green(`User name: ${response.data.name}`));
    console.log(chalk.blue(`Followers: ${response.data.followers}`));
  } catch (error) {
    if (error.response) {
      console.error(
        chalk.red(
          `Error: ${error.response.status} - ${error.response.data?.message || error.message}`
        )
      );
    } else if (error.request) {
      console.error(
        chalk.red(`Error: No response received - ${error.message}`)
      );
    } else {
      console.error(chalk.red(`Error: ${error.message}`));
    }
    process.exit(1);
  }
}

getUserInfo('kota-sakuma');
