import axios from 'axios';
import fs from 'fs';
import path from 'path';
const chalk = require('chalk');
import { getFilesFromDir, readJsonFile } from '../../utils/fileUtils';
import { config } from '../../config/config';
import { importDashboard } from '../../utils/apiUtils';

export async function importDashboards() {

  try {
    const files = getFilesFromDir(config.inputDir);

    for (const file of files) {
      const filePath = path.join(config.inputDir, file);
      const dashboardJson = readJsonFile(filePath);

      const cleanedJson = cleanDashboardJson(dashboardJson);

      try {
        await importDashboard(config.destUrl, config.destApiKey, cleanedJson);
        console.log(chalk.greenBright(`✅ Imported: ${file}`));
      } catch (error: any) {
        console.error(chalk.redBright(`❌ Error importing ${file}: ${error.response?.data?.message || error.message}`));
      }
    }
  } catch (error: any) {
    console.error(chalk.redBright(`❌ Error during import: ${error.message}`));
  }
}

function cleanDashboardJson(dashboardJson: any): any {
  dashboardJson['id'] = null;
  return {
    dashboard: dashboardJson,
    overwrite: true
  };
}
