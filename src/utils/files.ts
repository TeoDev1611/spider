import { dirs, fs, log, path } from "src/deps.ts";

export const currentDir: string = Deno.cwd();
export const cacheDir = dirs.baseDirs.setup().cacheDir;

export function getLogPath(file: string): string {
  if (existsFile(path.join(cacheDir, "Spider")) != true) {
    Deno.mkdir(path.join(cacheDir, "Spider"));
    log.info("Spider folder created");
  }
  return path.join(cacheDir, "Spider", file);
}

export function existsFile(file: string): boolean {
  if (fs.existsSync(file)) {
    return true;
  } else {
    return false;
  }
}
