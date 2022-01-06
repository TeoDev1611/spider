/**
 * @description  The scoop commands for use in the lexer
 */
export const Scoop = {
  Status: "scoop status",
  Install: "scoop install",
  Version: "scoop version",
  Uninstall: "scoop uninstall",
};

/**
 * @description The Git Commands and the flags to use
 */
export const Git = {
  Clone: "git clone",
  Version: "git --version",
  Flags: {
    DepthFast: "--depth=1",
  },
};

/**
 * @description The chocolatey commands and flags
 */
export const Choco = {
  Version: "choco -v",
  Install: "choco install",
  Uninstall: "choco uninstall",
  Flags: {
    InstallNow: "-y",
    Nightly: "--pre",
  },
};

/**
 * @description The helper for the commands on windows
 */
export const Helpers = {
  CmdAdmin: 'powershell -Command "Start-Process cmd -Verb RunAs"',
  RunPowershellFile: "powershell -NoLogo -NoProfile",
};
