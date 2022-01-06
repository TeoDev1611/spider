import * as cmds from "runner/cmdMaker.ts";
import * as run from "runner/start.ts";
import * as toml from "parser/start.ts";
import * as colors from "utils/colors.ts";
import * as log from "utils/logs.ts";
// import * as files from "utils/files.ts";
import * as list from "parser/list.js";

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
}
