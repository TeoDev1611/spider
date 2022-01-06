import * as cmds from "runner/cmdMaker.ts";
import * as run from "runner/start.ts";
import * as toml from "parser/start.ts";
import * as log from "utils/logs.ts";
import * as files from "utils/files.ts";
import * as list from "parser/list.js";

const Toml = toml.ReadSpiderFile();

export function Install() {
  if ("scoop" in Toml) {
    const data = Toml.scoop;
    console.log(data);
    console.log(typeof (data));
  }
}
