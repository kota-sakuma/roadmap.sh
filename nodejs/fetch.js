import chalk from 'chalk';

async function getBtcPrice() {
  try {
    const response = await fetch(
      'https://api.coinbase.com/v2/prices/BTC-USD/spot'
    );

    // check the status code
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Current BTC price: $${data.data.amount}`);
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

getBtcPrice();
