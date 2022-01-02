import { toml } from "src/deps.ts";
import * as log from "utils/logs.ts";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
import {
  DEAFULT_DATA_LINUX,
  DEFAULT_DATA_MACOS,
  DEFAULT_DATA_WINDOWS,
  SPIDER_FILE_PATH,
} from "parser/default.ts";

export function WriteSpiderFile() {
  const platform: string = os.platform();
  switch (platform) {
    case "windows": {
      const data = toml.stringify(DEFAULT_DATA_WINDOWS);
      Deno.writeTextFileSync(SPIDER_FILE_PATH, data);
      log.info("Writed the SpiderFile.toml");
      break;
    }
    case "linux": {
      const data = toml.stringify(DEAFULT_DATA_LINUX);
      Deno.writeTextFileSync(SPIDER_FILE_PATH, data);
      log.info("Writed the SpiderFile.toml");
      break;
    }
    case "darwin": {
      const data = toml.stringify(DEFAULT_DATA_MACOS);
      Deno.writeTextFileSync(SPIDER_FILE_PATH, data);
      log.info("Writed the Spiderfile.toml");
      break;
    }
    default: {
      log.error("Platform unsupported!");
      break;
    }
  }
}
