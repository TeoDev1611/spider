export async function Run(command: string) {
  const cmd = command.split(" ");
  const p = Deno.run({
    cmd: cmd,
  });
  await p.status();
}
