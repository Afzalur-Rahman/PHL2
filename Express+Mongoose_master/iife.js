((require, module, __dirname, __filename) => {
  let a = 10;
  ((name) => {
    let a = 10;

    console.log(`Learning rate ${name}`);
  })("node");

  console.log(a);
  console.log(module);
  console.log(__dirname);
})(require, module, "./utils/add.js");
