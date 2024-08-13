import axios from 'axios';
import path from 'path';
import { config } from '../../config/config';
import { ensureDirExists, writeJsonFile } from '../../utils/fileUtils';
const chalk = require('chalk');

export async function exportDashboards() {

  try {
    ensureDirExists(config.outputDir);

    const response = await axios.get(`${config.sourceUrl}/api/search?type=dash-db`, {
      headers: { Authorization: `Bearer ${config.sourceApiKey}` },
    });

    const dashboards = response.data;
    for (const dash of dashboards) {
      const dashResponse = await axios.get(`${config.sourceUrl}/api/dashboards/uid/${dash.uid}`, {
        headers: { Authorization: `Bearer ${config.sourceApiKey}` },
      });

      const dashboardJson = dashResponse.data.dashboard;
      const fileName = `${dashboardJson.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
      const filePath = path.join(config.outputDir, fileName);

      writeJsonFile(filePath, dashboardJson);
      console.log(chalk.blueBright(`✅ Exported: ${fileName}`));
    }

    console.log(chalk.greenBright('✅ Export completed successfully.'));
  } catch (error) {
    console.error(chalk.red(`❌ Error during export: ${error}`));
  }
}