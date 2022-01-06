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

/**
 * Log to the info level and add to the spider.log file
 * @param message Message to log
 */
export function info(message: string) {
  log.info(`${Headers.spiderHeader} ${Headers.logsSym.info} ${message} `);
}

/**
 * Log to the warning level and add to the spider.log file
 * @param message Message to log
 */
export function warn(message: string) {
  log.warning(`${Headers.spiderHeader} ${Headers.logsSym.warn} ${message}`);
}

/**
 * Log to the error level, add to the spider.log and exit to 2 code
 * @param message Message to log
 */
export function error(message: string) {
  log.error(`${Headers.spiderHeader} ${Headers.logsSym.error} ${message}`);
  Deno.exit(2);
}
