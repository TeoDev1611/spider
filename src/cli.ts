import Denomander from "https://deno.land/x/denomander@0.9.1/mod.ts";

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
    console.log(cli.now);
  });

cli.parse(Deno.args);
