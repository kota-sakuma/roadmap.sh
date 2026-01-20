import chalk from 'chalk';
import cliProgress from 'cli-progress';

const bar = new cliProgress.SingleBar({
  format: 'Progress |' + chalk.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || ETA: {eta}s',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
  linewrap: true
});

bar.start(100, 0);

let value = 0;
const timer = setInterval(() => {
  value += 5;
  bar.update(value);

  if (value >= 100) {
    clearInterval(timer);
    bar.stop();
    console.log(chalk.green('\nDownload Completed!'));
  }
}, 100);
