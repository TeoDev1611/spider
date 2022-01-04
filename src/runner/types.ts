// Setup the windows commands
export const Scoop = {
  Status: "powershell -NoLogo -NoProfile scoop status",
  Install: "powershell -NoLogo -NoProfile scoop install",
  Version: "powershell -NoLogo -NoProfile scoop version",
};

export const Git = {
  Clone: "git clone --depth=1",
  Version: "git --version",
};

export const Choco = {
  Version: "choco -v",
};
