import { path } from "src/deps.ts";
import { currentDir } from "utils/files.ts";

/**
 * The defaults for the toml files.
 * @module parser/default.ts
 */

/**
 * @desc Default values for the SpiderFile on Windows
 */
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
  choco: [
    {
      pkg: "python",
      nightly: true,
    },
  ],
  git: [
    {
      repo: "github.com/TeoDev1611/astro.nvim",
      homeUser: true,
      destination: "AppData\\Local\\nvim",
      fastDepth: true,
    },
  ],
};

/**
 * @desc The defaults values for the linux spider file support
 * NOT TESTED ON LINUX
 */
export const DEAFULT_DATA_LINUX = {
  info: {
    name: "Teo start workspace",
    author: "Teo",
    description: "My Startup workspace config",
    version: 1.0,
  },
  snap: [
    { pkg: "neovim" },
  ],
  apt: [
    { pkg: "python" },
  ],
  pacman: [
    { pkg: "cowsay" },
  ],
  git: [
    {
      repo: "github.com/TeoDev1611/astro.nvim",
      homeUser: true,
      destination: ".config/nvim",
      fastDepth: true,
    },
  ],
};

/**
 * @desc The default data for the MacOS SpiderFile
 * NOT TESTED ON MACOS
 */
export const DEFAULT_DATA_MACOS = {
  info: {
    name: "Teo start workspace",
    author: "Teo",
    description: "My Startup workspace config",
    version: 1.0,
  },
  brew: [
    { pkg: "neovim", nightly: true },
  ],
  git: [
    {
      repo: "github.com/TeoDev1611/astro.nvim",
      homeUser: true,
      destination: ".config/nvim",
      fastDepth: true,
    },
  ],
};

/**
 * @desc The SpiderFilepath for use
 * @type {string}
 * @returns {string}
 */
export const SPIDER_FILE_PATH: string = path.join(
  currentDir,
  "SpiderFile.toml",
);
