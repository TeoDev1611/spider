import Denomander from "https://deno.land/x/denomander@0.9.1/mod.ts";
import * as parser from "parser/start.ts";
import * as pkg from "parser/list.js";
import * as install from "install/install.js";

const cli = new Denomander({
  app_name: "spider",
  app_description:
    "The most easy way to install a program - Help: github.com/TeoDev1611/spider",
  app_version: "0.1.0",
});

cli
  .command("init", "Start a new SpiderFile for download the programs")
  .option("-n, --now", "Start a spider file in the current directory now!")
  .action(() => {
    if (cli.now === true) {
      parser.WriteSpiderFile();
      Deno.exit();
    }
  });

cli
  .command("health", "Check the tools for usage spider")
  .option("-i, --info", "Get the information from the SpiderFile")
  .action(() => {
    if (cli.info === true) {
      pkg.CheckAndListInfo();
      Deno.exit();
    }
  });

cli
  .command("install [opts]", "Install the Spider Packages!")
  .action(({ opts }: any) => {
    if (opts === "now") {
      install.Install();
    }
  });

cli.parse(Deno.args);
