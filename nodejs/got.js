import chalk from 'chalk';
import got from 'got';

async function downloadData() {
  try {
    // fetch data from the API
    const data = await got(
      'https://api.github.com/repos/sindresorhus/got'
    ).json();
    console.log(chalk.cyan(`Project: ${data.full_name}`));

    // pagination
    const count = got.paginate('https://api.example.com/items');
    for await (const item of count) {
      console.log(item.id);
    }
  } catch (error) {
    console.error(chalk.red(`Request failed: ${error.message}`));
    process.exit(1);
  }
}

downloadData();
