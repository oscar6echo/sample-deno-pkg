// works always
import * as ac from "jsr:@cliffy/ansi@1.0.0-rc.5/colors";

// works except when run as https://xyz/main.ts
// import * as ac from "@cliffy/ansi/colors";

const color = {
  red: ac.colors.bold.red,
  yellow: ac.colors.bold.yellow,
  blue: ac.colors.bold.blue,
  cyan: ac.colors.bold.cyan,
  gray: ac.colors.bold.gray,
  shiny: ac.colors.bold.bgBrightMagenta,
};

export { color };
