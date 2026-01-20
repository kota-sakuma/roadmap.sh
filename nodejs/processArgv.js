const args = process.argv.slice(2);

if (args.includes('--help')) {
  console.log('This is a help message');
  console.log('Usage: node processArgv.js [--port <port>]');
  process.exit(0);
}

const port = args[0] === '--port' ? args[1] : 3000;
console.log(`Server is running on port ${port}`);
