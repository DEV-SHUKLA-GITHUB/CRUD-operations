const fileSystem = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "");
const filePath = `${dirPath}/fruits.txt`;
fileSystem.writeFile(filePath, "this is a simple file", (err) => {
  if (err) throw err;
  console.log("write complete");
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error ${err}`);
  process.exit(1);
});
// fileSystem.readFile(filePath, "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fileSystem.appendFile(filePath, " for fruits", (err) => {
//   if (!err) console.log("file is updated");
// });
// fileSystem.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

// fileSystem.unlinkSync(`${dirPath}/fruit.txt`);
