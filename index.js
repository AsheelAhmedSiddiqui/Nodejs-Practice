import express from "express";

// const { createServer } = require("node:http");
const app = express();
const PORT = 3000;

const middleware = (req, res, next) => {
	// next();
};

// app.use(middleware);

app.get("/", (req, res) => {
	console.log("req.accepted=>");
	res.send("Hello World");
});

app.put("/", (req, res) => {
	console.log("put ki request");
});

app.delete("/", (req, res) => {
	console.log("delete ki request");
});

app.post("/", (req, res) => {
	console.log("post ki request");
});

app.listen(PORT, () => console.log(`Server is runing on PORT ${PORT}`));
