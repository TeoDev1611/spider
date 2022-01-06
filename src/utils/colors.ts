import { colors } from "src/deps.ts";

/**
 * The Header log info
 * @param msg Message to show in the out
 */
export function Header(msg: string) {
  const InfoSym = colors.blue("ⓘ INFO:");
  console.log(`${InfoSym} ${msg}`);
}

/**
 * The Done function log
 * @param msg Message to print in out
 */
export function Done(msg: string) {
  const DoneSym = colors.green("✓ DONE! :");
  console.log(`${DoneSym} ${msg}`);
}

/**
 * Print the keys with format
 * @param msg Message to print
 */
export function Keys(msg: string) {
  const KeySym = colors.brightMagenta("→ KEY:");
  console.log(`${KeySym} ${msg}`);
}

/**
 * Print the error beautifull :)
 * @param msg Error to print
 */
export function Error(msg: string) {
  const ErrorSym = colors.red("✗ ERROR:");
  console.log(`${ErrorSym} ${msg}`);
}
