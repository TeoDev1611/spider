import { colors } from "src/deps.ts";

export function Header(msg: string) {
  const InfoSym = colors.blue("ⓘ INFO:");
  console.log(`${InfoSym} ${msg}`);
}

export function Done(msg: string) {
  const DoneSym = colors.green("✓ DONE! :");
  console.log(`${DoneSym} ${msg}`);
}

export function Keys(msg: string) {
  const KeySym = colors.brightMagenta("→ KEY:");
  console.log(`${KeySym} ${msg}`);
}

export function Error(msg: string) {
  const ErrorSym = colors.red("✗ ERROR:");
  console.log(`${ErrorSym} ${msg}`);
}
