import express from "express";

// const { createServer } = require("node:http");
const app = express();
const PORT = 3000;

const middleware = (req, res, next) => {};

app.get("/", middleware, (req, res) => {
	console.log("req.accepted=>");
	res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}`));

// const server = createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader("Content-Type", "text/plain");
// 	res.end("Hello World");
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
