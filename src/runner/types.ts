// Setup the windows commands
export const Scoop = {
  Status: "scoop status",
  Install: "scoop install",
  Version: "scoop version",
  Uninstall: "scoop uninstall",
};

export const Git = {
  Clone: "git clone",
  Version: "git --version",
  Flags: {
    DepthFast: "--depth=1",
  },
};

export const Choco = {
  Version: "choco -v",
  Install: "choco install",
  Uninstall: "choco uninstall",
  Flags: {
    InstallNow: "-y",
    Nightly: "--pre",
  },
};

export const Helpers = {
  CmdAdmin: 'powershell -Command "Start-Process cmd -Verb RunAs"',
  RunPowershellFile: "powershell -NoLogo -NoProfile",
};
