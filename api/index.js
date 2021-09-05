// const app = require("express")();
// const { v4 } = require("uuid");

// app.get("/api", (req, res) => {
//   const path = `/api/item/${v4()}`;
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
//   res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
// });

// app.get("/api/item/:slug", (req, res) => {
//   const { slug } = req.params;
//   res.end(`Item: ${slug}`);
// });

// module.exports = app;

// // Start the server on port 3000
// app.listen(3001, "127.0.0.1");
// console.log("Node server running on port 3001");

const spawn = require("child_process").spawn;

const process = spawn("python", [
  "./gpt_sql.py",
  "Display the lowest salary from the Worker table",
]);

process.stdout.on("data", (data) => {
  console.log(data.toString());
});

// const path = require("path");
// const { spawn } = require("child_process");
// /**
//  * Run python myscript, pass in `-u` to not buffer console output
//  * @return {ChildProcess}
//  */
// function runScript() {
//   return spawn("python", [
//     "-u",
//     path.join(__dirname, "myscript.py"),
//     "--foo",
//     "some value for foo",
//   ]);
// }
// const subprocess = runScript();
// // print output of script
// subprocess.stdout.on("data", (data) => {
//   console.log(`data:${data}`);
// });
// subprocess.stderr.on("data", (data) => {
//   console.log(`error:${data}`);
// });
// subprocess.stderr.on("close", () => {
//   console.log("Closed");
// });
