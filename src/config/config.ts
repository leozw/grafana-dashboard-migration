export interface Config {
  sourceUrl: string;
  sourceApiKey: string;
  destUrl: string;
  destApiKey: string;
  inputDir: string;
  outputDir: string;
}

export const config: Config = {
  sourceUrl: '',
  sourceApiKey: '',
  destUrl: '',
  destApiKey: '',
  inputDir: 'exported_dashboards',  
  outputDir: 'exported_dashboards', 
};
