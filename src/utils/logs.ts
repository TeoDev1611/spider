import { log } from "src/deps.ts";
import { getLogPath } from "utils/files.ts";

export const Headers = {
  spiderHeader: `SPIDER ->`,
  logsSym: {
    info: "ⓘ INFO:",
    error: "✗ ERROR:",
    warn: "⚠ WARNING:",
  },
};

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
  log.info(`${Headers.spiderHeader} ${Headers.logsSym.info} ${message} `);
}

export function warn(message: string) {
  log.warning(`${Headers.spiderHeader} ${Headers.logsSym.warn} ${message}`);
}

export function error(message: string) {
  log.error(`${Headers.spiderHeader} ${Headers.logsSym.error} ${message}`);
  Deno.exit(1);
}
