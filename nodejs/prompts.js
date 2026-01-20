import prompts from 'prompts';

const run = async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'username',
      message: 'Enter your username',
      validate: (value) =>
        value.length < 3 ? 'Username must be at least 3 characters long' : true
    },
    {
      type: 'password',
      name: 'secret',
      message: 'Enter your secret'
    },
    {
      type: 'autocomplete',
      name: 'color',
      message: 'Pick your color',
      choices: [
        { title: 'Red', value: '#ff0000' },
        { title: 'Blue', value: '#0000ff' },
        { title: 'Green', value: '#00ff00' }
      ]
    }
  ]);

  console.log(response);
};

run();
