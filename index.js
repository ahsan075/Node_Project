/*
 *
 * Title:Uptime Monitoring Application
 * Description:A RESTFul API to monitor up or down time of user defined links
 * Author:Ahsan Shakil
 * Date:24/06/21
 *
 */

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environment");
const data = require("./lib/data");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// Create
// data.create("test", "newFile", { name: "Ahsan", age: "25" }, (err) => {
//     console.log(`Error was`, err);
// });

// Read
// data.read("test", "newFile", (err, result) => {
//     console.log(result, err);
// });

// Update
// data.update("test", "newFile", { name: "Shakil", age: "50" }, (err) => {
//     console.log(`Error was`, err);
// });

// Delete
// data.delete("test", "newFile", (err) => {
//     console.log(`Error was`, err);
// });

// create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start
app.createServer();
