import * as cmds from "runner/cmdMaker.ts";
import * as run from "runner/start.ts";
import * as toml from "parser/start.ts";
import * as colors from "utils/colors.ts";
import * as log from "utils/logs.ts";
import * as files from "utils/files.ts";
import * as list from "parser/list.js";
import { path } from "src/deps.ts";

/**
 * @description Install command for use directly in the CLI
 */
export async function Install() {
  const Toml = toml.ReadSpiderFile();
  if ("scoop" in Toml) {
    const data = Toml.scoop.map(list.GetPkg);
    colors.Header("---  SCOOP INSTALLING ---");
    const cmd = cmds.GetCommand("scoop", "install", data);
    await run.Run(cmd);
    log.info("Done! Scoop Installed");
  }
  if ("choco" in Toml) {
    Toml.choco.forEach((pkg) => {
      colors.Header("--- CHOCO INSTALLING ---");
      if (pkg.nightly === true) {
        const cmd = cmds.GetCommand(
          "choco",
          "install",
          pkg.pkg,
          undefined,
          undefined,
          undefined,
          "chocoNightly",
        );
        await run.Run(cmd);
      } else {
        const cmd = cmds.GetCommand(
          "choco",
          "install",
          pkg.pkg,
          undefined,
          undefined,
          undefined,
        );
        await run.Run(cmd);
      }
      log.info("Done! Choco Installed");
    });
  }
  if ("git" in Toml) {
    Toml.git.forEach((r) => {
      colors.Header("--- GIT REPOS CLONNING --- ");
      if (r.homeUser === true) {
        const Dest = path.join(files.homeDir, r.destination);
        if (r.fastDepth === true) {
          const cmd = cmds.GetCommand(
            "git",
            "clone",
            undefined,
            r.url,
            Dest,
            undefined,
            "gitDepth",
          );
          console.log(cmd);
        } else {
          const cmd = cmds.GetCommand(
            "git",
            "clone",
            undefined,
            r.url,
            Dest,
            undefined,
          );
          console.log(cmd);
        }
      } else {
        if (r.fastDepth === true) {
          const cmd = cmds.GetCommand(
            "git",
            "clone",
            undefined,
            r.url,
            r.destination,
            undefined,
            "gitDepth",
          );
          console.log(cmd);
        } else {
          const cmd = cmds.GetCommand(
            "git",
            "clone",
            undefined,
            r.url,
            r.destination,
            undefined,
          );
          console.log(cmd);
        }
      }
    });
  }
}
