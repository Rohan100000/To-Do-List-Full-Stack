const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo_controller");

console.log("Router Todo loaded");

router.get("/", todoController.home);
router.post("/create", todoController.create);
router.post("/toggle-checkbox", todoController.toggle_checkbox);

module.exports = router;
