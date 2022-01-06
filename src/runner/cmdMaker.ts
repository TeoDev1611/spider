import { Choco, Git, Helpers, Scoop } from "runner/types.ts";
import * as log from "utils/logs.ts";

export function GetCommand(
  prgm: "scoop" | "git" | "helper" | "choco",
  action:
    | "install"
    | "clone"
    | "uninstall"
    | "version"
    | "clone"
    | "status"
    | "cmdAdmin"
    | "runPs1",
  pkgs?: Array<string>,
  url?: string,
  dest?: string,
  file?: string,
  flags?: "chocoNightly" | "gitDepth",
): string {
  pkgs = (typeof pkgs === "undefined") ? ["neovim"] : pkgs;
  switch (prgm) {
    case "scoop": {
      switch (action) {
        case "install": {
          return `${Helpers.RunPowershellFile} ${Scoop.Install} ${
            pkgs.join(" ")
          }`;
        }

        case "status": {
          return `${Helpers.RunPowershellFile} ${Scoop.Status}`;
        }

        case "uninstall": {
          return `${Helpers.RunPowershellFile} ${Scoop.Uninstall} ${
            pkgs.join(" ")
          }`;
        }

        case "version": {
          return `${Helpers.RunPowershellFile} ${Scoop.Version}`;
        }
        default: {
          log.error("Action for scoop not found!");
          break;
        }
      }
      break;
    }

    case "git": {
      url = (typeof url === "undefined")
        ? "https://github.com/TeoDev1611/astro.nvim"
        : url;
      dest = (typeof dest === "undefined") ? "$HOME" : dest;
      switch (action) {
        case "clone": {
          if (flags == "gitDepth") {
            return `${Git.Clone} ${Git.Flags.DepthFast} ${url} ${dest}`;
          }
          return `${Git.Clone} ${url} ${dest}`;
        }

        case "version": {
          return `${Git.Version}`;
        }
        default:
          log.error("Action for git not found!");
          break;
      }
      break;
    }

    case "choco": {
      switch (action) {
        case "install": {
          if (flags === "chocoNightly") {
            return `${Choco.Install} ${pkgs} ${Choco.Flags.InstallNow} ${Choco.Flags.Nightly}`;
          }
          return `${Choco.Install} ${pkgs} ${Choco.Flags.InstallNow}`;
        }

        case "uninstall": {
          return `${Choco.Uninstall} ${pkgs} ${Choco.Flags.InstallNow}`;
        }

        case "version": {
          return Choco.Version;
        }

        default:
          log.error("Action for choco not found!");
          break;
      }
      break;
    }

    case "helper": {
      file = (typeof file === "undefined") ? "scoop.ps1" : file;
      switch (action) {
        case "cmdAdmin": {
          return Helpers.CmdAdmin;
        }
        case "runPs1": {
          return `${Helpers.RunPowershellFile} ${file}`;
        }

        default:
          log.error("Action not found");
          break;
      }
      break;
    }

    default:
      log.error("Program not found!");
      break;
  }
  return " ";
}
