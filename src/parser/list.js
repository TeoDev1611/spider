import { ReadSpiderFile } from "parser/start.ts";
import { platform } from "utils/os.ts";
import * as log from "utils/logs.ts";
import { colors } from "src/deps.ts";

function Header(msg) {
  console.log(colors.bgBlue(msg));
}

function Keys(msg) {
  console.log(colors.brightMagenta(msg));
}

function GetPkg(value, index, array) {
  if ("pkg" in value) {
    return value.pkg;
  } else {
    return "Nothing";
  }
}

export function CheckAndListInfo() {
  const TOML = ReadSpiderFile();
  if (!("info" in TOML)) {
    log.error("Is necessary the Info data complete this please");
    Deno.exit(1);
  } else {
    Header("       --- INFORMATION ABOUT THIS SPIDEY WORKSPACE ---       ");
    Keys("NAME:");
    console.log(TOML.info.name);
    Keys("DESCRIPTION:");
    console.log(TOML.info.description);
    Keys("AUTHORS:");
    console.log(TOML.info.author);
    Keys("VERSION:");
    console.log(TOML.info.version);
  }
  switch (platform) {
    case "windows": {
      if ("scoop" in TOML) {
        const data = TOML.scoop.map(GetPkg);
        Header("       --- SCOOP PACKAGES ---       ");
        Keys("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
        });
      }
      if ("choco" in TOML) {
        Header("       --- CHOCO PACKAGES ---       ");
        Keys("PACKAGES AND NIGHTLY:");
        TOML.choco.forEach((pkg) => {
          console.log(
            `--- \nPACKAGE: ${pkg.pkg} \nNIGHTLY: ${pkg.nightly} \n---`,
          );
        });
      }
      if ("git" in TOML) {
        Header("       --- GIT REPOS ---       ");
        Keys("GIT INFORMATION:");
        TOML.git.forEach((repo) => {
          console.log(
            `--- \nREPO: ${repo.repo} \nUSER HOME: ${repo.homeUser} \nDESTINATION: ${repo.destination} \n---`,
          );
        });
      }
      break;
    }

    default: {
      log.error("Platform unsupported!");
      break;
    }
  }
}
