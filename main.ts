import uri from "./src/uri.ts";
import { color } from "./src/util.ts";

const get_data = async () => {
  const url = uri();
  console.log(color.yellow(url));
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

console.log(color.cyan("START"));
console.log(color.cyan("-".repeat(30)));

const data = await get_data();
console.log(data);

console.log(color.cyan("-".repeat(30)));
console.log(color.cyan("END"));
