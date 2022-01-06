export async function Run(command: string) {
  const cmd = command.split(" ");
  const anLittleConst = Deno.run({
    cmd: cmd,
  });
  await anLittleConst.status();
}
