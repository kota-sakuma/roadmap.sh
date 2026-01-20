import chalk from 'chalk';
import figlet from 'figlet';

figlet.fonts((err, fonts) => {
  if (err) {
    console.log('Something went wrong...');
    return;
  }
  console.log(fonts);
});

figlet.text('My CLI App', { font: 'Standard' }, (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    return;
  }
  console.log(chalk.cyan(data));
});
