const chalk = require('chalk');
import { config } from '../config/config';
import { exportDashboards } from '../domain/useCases/exportDashboards';
import { importDashboards } from '../domain/useCases/importDashboards';
const promptSync = require('prompt-sync');

async function run() {
  const prompt = promptSync();

  config.sourceUrl = prompt(chalk.bold.bgGreen('🔗 Enter the source URL: '));
  config.sourceApiKey = prompt(chalk.bold.bgGreen('🔑 Enter the source API key: '));
  config.destUrl = prompt(chalk.bold.bgBlue('🔗 Enter the destination URL: '));
  config.destApiKey = prompt(chalk.bold.bgBlue('🔑 Enter the destination API key: '));

  console.log(chalk.cyan('🌟 Exporting dashboards...'));
  await exportDashboards();

  console.log(chalk.cyan('🌟 Importing dashboards...'));
  await importDashboards();

  console.log(chalk.magentaBright('🚀 All done!'));
}

run();