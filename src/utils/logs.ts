import { log } from "src/deps.ts";
import { getLogPath } from "utils/files.ts";

const headerDenoUp = `[ SPIDER ]:`;

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
    file: new log.handlers.FileHandler("INFO", {
      filename: getLogPath("spider.log"),
      formatter: "[ SPIDER ]: {levelName} -> {msg}",
    }),
  },

  loggers: {
    default: {
      level: "INFO",
      handlers: ["file", "console"],
    },
  },
});

export function info(message: string) {
  log.info(`${headerDenoUp} ${message} :p`);
}

export function warn(message: string) {
  log.warning(`${headerDenoUp} ${message} >:|`);
}

export function error(message: string) {
  log.error(`${headerDenoUp} ${message} >:{`);
  Deno.exit(1);
}
