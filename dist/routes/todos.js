"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = express_1.Router();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((item) => item.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), { text: req.body.text });
        return res.status(200).json({ todos });
    }
    res.status(400).json({ msg: "todo not found at all" });
});
exports.default = router;
