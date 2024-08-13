import fs from 'fs';
import path from 'path';

export function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

export function readJsonFile(filePath: string) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function writeJsonFile(filePath: string, data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function getFilesFromDir(dir: string): string[] {
  return fs.readdirSync(dir).filter(file => !fs.statSync(path.join(dir, file)).isDirectory());
}
