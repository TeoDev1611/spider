import { Choco, Git, Scoop } from "runner/types.ts";

export async function Run(command: string) {
  const cmd = command.split(" ");
  const p = Deno.run({
    cmd: cmd,
  });
  await p.status();
}

export async function Runner(
  installer: "scoop" | "choco",
  pkgs: Array<string>,
) {
  switch (installer) {
    case "scoop": {
      console.log(Scoop.Status);
      await Run(Scoop.Status);
      console.log(Git.Version);
      await Run(Git.Version);
      pkgs.forEach((pkg: string) => {
        console.log(pkg);
      });
      break;
    }
    case "choco": {
      console.log(Choco.Version);
      await Run(Choco.Version);
      pkgs.forEach((pkg: string) => {
        console.log(pkg);
      });
      break;
    }
    default:
      break;
  }
}
