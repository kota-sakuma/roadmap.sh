console.log('Hello');

process.stdout.write('Hello');
process.stdout.write(' World\n');

/**
 * Simple Progress Bar
 * @param {number} progress - number between 0 and 1
 */
function drawProgressBar(progress) {
  const BAR_LENGTH = 30;
  const filledLength = Math.round(BAR_LENGTH * progress);

  const bar = '='.repeat(filledLength) + '>'.repeat(BAR_LENGTH - filledLength);
  const percentage = Math.round(progress * 100);

  process.stdout.write(`\rProgress: [${bar}] ${percentage}%`);

  if (progress >= 1) {
    process.stdout.write('\nDone!\n');
  }
}

let current = 0;
const timer = setInterval(() => {
  current += 0.05;
  drawProgressBar(Math.min(current, 1));

  if (current >= 1) {
    clearInterval(timer);
  }
}, 100);
