import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'プロジェクト名を入力してください: ',
    validate: (value) => value.length ? true : '名前を入力してください'
  },
  {
    type: 'select',
    name: 'template',
    message: '使用するテンプレートを選択してください: ',
    choices: ['JavaScript', 'TypeScript', 'Python']
  }
];

async function run() {
  const answers = await inquirer.prompt(questions);
  console.log(`｢${answers.projectName}｣ を ｢${answers.template}｣ で作成します...`);
}

run();
