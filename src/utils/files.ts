import { dirs, fs, path } from "src/deps.ts";
import * as log from "utils/logs.ts";

export const currentDir: string = Deno.cwd();
export const cacheDir: string = dirs.baseDirs.setup().cacheDir;
export const configDir: string = dirs.baseDirs.setup().configDir;
export const homeDir: string = dirs.baseDirs.setup().homeDir;

/**
 * The function to generate and create if dont exists the logs folder
 * @param file File to joint to the log path
 * @returns {string} Path to the spider log folder
 */
export function getLogPath(file: string): string {
  if (existsFile(path.join(cacheDir, "Spider")) != true) {
    Deno.mkdir(path.join(cacheDir, "Spider"));
    log.info("Spider folder created");
  }
  return path.join(cacheDir, "Spider", file);
}

/**
 * Function to generate the folder and get the path
 * @param file File to join to the config dir
 * @returns {string} Path to the spider config folder
 */
export function getConfigDir(file: string) {
  if (existsFile(path.join(configDir, "Spider")) != true) {
    Deno.mkdir(path.join(configDir, "Spider"));
    log.info("Spider config folder created");
  }
  return path.join(configDir, "Spider", file);
}

/**
 * Write a json to any path and log
 * @param path Path to write the json
 * @param data Data to write the json
 */
export function writeJson(path: string, data: Record<string, unknown>) {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));
    log.info("Writed the new config.json file!");
  } catch (e) {
    log.error(e);
  }
}

/**
 * Check if file or folder exists
 * @param file File or folder to check if exists
 * @returns {boolean} Result true if exists or false if not
 */
export function existsFile(file: string): boolean {
  if (fs.existsSync(file)) {
    return true;
  } else {
    return false;
  }
}
