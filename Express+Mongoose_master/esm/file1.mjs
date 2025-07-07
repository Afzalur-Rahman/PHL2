// const var1 = require("./file-2");

import { a, add, b } from "./file2.mjs";
// const { a: a3, add: add3, b: b3 } = require("./file-3");
import { a as A3, b as B3, add as ADD3 } from "./file3.mjs";

console.log(A3);
console.log(add(2, 3));
console.log(b);
