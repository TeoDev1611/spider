import { ReadSpiderFile } from "parser/start.ts";
import { platform } from "utils/os.ts";
import { Header, Keys } from "utils/colors.ts";
import * as log from "utils/logs.ts";

/**
 * @desc GetPkg function for the map and get the value from the pkg
 * @returns {string}
 */
export function GetPkg(value, index, array) {
  if ("pkg" in value) {
    return value.pkg;
  } else {
    return "Nothing";
  }
}

/**
 * @description Improve the list and info for the command!
 */
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
            `--- \nREPO: ${repo.repo} \nUSER HOME: ${repo.homeUser} \nDESTINATION: ${repo.destination} \nFAST DOWNLOAD: ${repo.fastDepth} \n---`,
          );
        });
      }
      break;
    }

    case "linux": {
      if ("apt" in TOML) {
        const data = TOML.apt.map(GetPkg);
        Header("       --- APT PACKAGES ---       ");
        Keys("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
        });
      }
      if ("pacman" in TOML) {
        const data = TOML.pacman.map(GetPkg);
        Header("       --- PACMAN PACKAGES ---       ");
        Info("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
        });
      }
      if ("snap" in TOML) {
        const data = TOML.snap.map(GetPkg);
        Header("       --- SNAP PACKAGES ---       ");
        Keys("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
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

    case "darwin": {
      if ("brew" in TOML) {
        Header("       --- BREW PACKAGES ---       ");
        Keys("PACKAGES AND NIGHTLY:");
        TOML.brew.forEach((pkg) => {
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
