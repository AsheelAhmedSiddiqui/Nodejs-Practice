import express from "express";
import dotenv from "dotenv/config";

// const { createServer } = require("node:http");
const app = express();

const middleware = (req, res, next) => {
	next();
};

const todoArr = [
	{
		todo: "first",
		isCompleted: "false",
	},
	{
		todo: "second",
		isCompleted: "true",
	},
];

app.use(express.json());
app.use(middleware);

app.get("/", (req, res) => {
	console.log("req.accepted=>");
	res.send("<h1>Hello World</h1>");
});

app.post("/", (req, res) => {
	const newTodo = req.body;
	todoArr.push(newTodo);
	console.log("post ki request" + req.body);
	res.status(201).json(newTodo);
});

app.listen(process.env.PORT, () =>
	console.log(`Server is runing on PORT ${process.env.PORT}`)
);
