import { ReadSpiderFile } from "parser/start.ts";
import { platform } from "utils/os.ts";
import { Header, Info } from "utils/colors.ts";
import * as log from "utils/logs.ts";

export function GetPkg(value, index, array) {
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
    Info("NAME:");
    console.log(TOML.info.name);
    Info("DESCRIPTION:");
    console.log(TOML.info.description);
    Info("AUTHORS:");
    console.log(TOML.info.author);
    Info("VERSION:");
    console.log(TOML.info.version);
  }
  switch (platform) {
    case "windows": {
      if ("scoop" in TOML) {
        const data = TOML.scoop.map(GetPkg);
        Header("       --- SCOOP PACKAGES ---       ");
        Info("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
        });
      }
      if ("choco" in TOML) {
        Header("       --- CHOCO PACKAGES ---       ");
        Info("PACKAGES AND NIGHTLY:");
        TOML.choco.forEach((pkg) => {
          console.log(
            `--- \nPACKAGE: ${pkg.pkg} \nNIGHTLY: ${pkg.nightly} \n---`,
          );
        });
      }
      if ("git" in TOML) {
        Header("       --- GIT REPOS ---       ");
        Info("GIT INFORMATION:");
        TOML.git.forEach((repo) => {
          console.log(
            `--- \nREPO: ${repo.repo} \nUSER HOME: ${repo.homeUser} \nDESTINATION: ${repo.destination} \n---`,
          );
        });
      }
      break;
    }

    case "linux": {
      if ("apt" in TOML) {
        const data = TOML.apt.map(GetPkg);
        Header("       --- APT PACKAGES ---       ");
        Info("PACKAGES LISTED:");
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
        Info("PACKAGES LISTED:");
        data.forEach((pkg) => {
          console.log(pkg);
        });
      }
      if ("git" in TOML) {
        Header("       --- GIT REPOS ---       ");
        Info("GIT INFORMATION:");
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
        Info("PACKAGES AND NIGHTLY:");
        TOML.brew.forEach((pkg) => {
          console.log(
            `--- \nPACKAGE: ${pkg.pkg} \nNIGHTLY: ${pkg.nightly} \n---`,
          );
        });
      }
      if ("git" in TOML) {
        Header("       --- GIT REPOS ---       ");
        Info("GIT INFORMATION:");
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
