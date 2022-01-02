import { dirs, fs, log, path } from "src/deps.ts";

export const currentDir: string = Deno.cwd();
export const cacheDir = dirs.baseDirs.setup().cacheDir;

export function getLogPath(file: string): string {
  if (existsFile(path.join(cacheDir, "denoUp")) != true) {
    Deno.mkdir(path.join(cacheDir, "denoUp"));
    log.info("DenoUp folder created");
  }
  return path.join(cacheDir, "denoUp", file);
}

export function existsFile(file: string): boolean {
  if (fs.existsSync(file)) {
    return true;
  } else {
    return false;
  }
}
