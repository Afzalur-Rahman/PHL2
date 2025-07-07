const fs = require("fs");

// // console.log("Task 1");

// // const text = "Learning file system";

// // fs.writeFileSync("./hello.txt", text);
// // console.log("task 3");
// // const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// // console.log("task 4");

// // console.log(data);

// fs.readFile("./hello-world.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("something went wrong", err);
//     return;
//   }

//   // Uncomment the next line if you want to log the data read
//   // console.log(data);

//   fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
//     if (err) {
//       console.log("something went wrong", err);
//       return;
//     }
//     console.log("written succesfully");
//   });
// });

// // console.log("task 3");

const readStream = fs.createReadStream("./hello-world.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error", err);
    }
  });
});

readStream.on("error", (err));
