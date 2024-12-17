import express from "express";
import dotenv from "dotenv/config";

// const { createServer } = require("node:http");
const app = express();

const middleware = (req, res, next) => {
	next();
};

app.use(express.json());
app.use(middleware);

app.get("/", (req, res) => {
	console.log("req.accepted=>");
	res.send("<h1>Hello World</h1>");
});

app.put("/", (req, res) => {
	console.log("put ki request");
});

app.delete("/", (req, res) => {
	console.log("delete ki request");
});

app.post("/", (req, res) => {
	console.log("post ki request" + req.body);
	res.send("post ki request");
});

app.listen(process.env.PORT, () =>
	console.log(`Server is runing on PORT ${process.env.PORT}`)
);
