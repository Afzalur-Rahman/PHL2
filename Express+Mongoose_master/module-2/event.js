const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("yee clash sesh");
});
schoolBell.on("ring", () => {
  console.log("ohho arekta class ache");
});

schoolBell.on("broken", () => {
  console.log("ghonta noshtoo");
});

schoolBell.emit("ring");
