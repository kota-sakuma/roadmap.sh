import { Command } from 'commander';

const program = new Command();

program.name('my-cli').description('My CLI Application').version('1.0.0');

program
  .argument('<name>', 'User name')
  .option('-p, --port <number>', 'Port number', '3000')
  .option('-d, --debug', 'Enable debug mode')
  .action((name, options) => {
    console.log(`Hello, ${name}!`);
    console.log(`Port: ${options.port}`);
    if (options.debug) {
      console.log('Debug mode is enabled');
    }
  });

program.parse(process.argv);
