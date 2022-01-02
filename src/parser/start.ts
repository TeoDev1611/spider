import { toml } from "src/deps.ts";

export const DEFAULT_DATA_WINDOWS = {
  info: {
    name: "Teo start workspace",
    author: "Teo",
    description: "My Startup workspace config",
    version: 1.0,
  },
  scoop: [
    { pkg: "deno" },
    { pkg: "neovim-nightly" },
  ],
  git: [
    {
      repo: "github.com/TeoDev1611/astro.nvim",
      homeUser: true,
      destination: "AppData\\Local\\nvim",
    },
  ],
  choco: [
    {
      pkg: "python",
      nightly: true,
    },
  ],
};
