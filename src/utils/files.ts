import { dirs, fs, path } from "src/deps.ts";
import * as log from "utils/logs.ts";

export const currentDir: string = Deno.cwd();
export const cacheDir: string = dirs.baseDirs.setup().cacheDir;
export const configDir: string = dirs.baseDirs.setup().configDir;
export const homeDir: string = dirs.baseDirs.setup().homeDir;

export function getLogPath(file: string): string {
  if (existsFile(path.join(cacheDir, "Spider")) != true) {
    Deno.mkdir(path.join(cacheDir, "Spider"));
    log.info("Spider folder created");
  }
  return path.join(cacheDir, "Spider", file);
}

export function getConfigDir(file: string) {
  if (existsFile(path.join(configDir, "Spider")) != true) {
    Deno.mkdir(path.join(configDir, "Spider"));
    log.info("Spider config folder created");
  }
  return path.join(configDir, "Spider", file);
}

export function writeJson(path: string, data: Record<string, unknown>) {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));
    log.info("Writed the new config.json file!");
  } catch (e) {
    log.error(e);
  }
}

export function existsFile(file: string): boolean {
  if (fs.existsSync(file)) {
    return true;
  } else {
    return false;
  }
}
