/******************************************************************
 *  Node.js 中任何对象发出的事件都是 EventEmitter 类的实例，就像 http 模块，又比如流
 * *****************************************************************/
const events = require("events");
const eventEmitter = new events.EventEmitter();
const eventListener = function () {
    console.log("event triggered");
}
eventEmitter.on("emitted", eventListener);
eventEmitter.emit("emitted");

// stream 流是从源读取或写入数据并将其传输到连续流目标的管道。
// 每个流也是一个EventEmitter

/******************************************************************
 *  stream 流是从源读取或写入数据并将其传输到连续流目标的管道。
 *  每个流也是一个EventEmitter
 * *****************************************************************/
const fs = require("fs");
const readableStream = fs.createReadStream("test.txt");
let content = "";
readableStream.on("data", (chunk) => {
    content += chunk;
});
readableStream.on("end", () => {
    console.log(content);
});

/******************************************************************
 *  readFile 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。
 *  createReadStream 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。
 * *****************************************************************/
const fs = require("fs");
fs.readFile("test.txt", (err, content) => {
    console.log(content);
});



process.on("uncaughtException", (err) => {  console.log("exception caught: ", err);});
