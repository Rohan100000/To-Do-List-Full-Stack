// todo model
const db = require("../config/mongoose");
const Todo = require("../models/todo");

// module.exports.actionName = function(req,res){}

module.exports.home = function (request, response) {
  Todo.find({}, function (error, todos) {
    if (error) {
      console.log("Error in fetching todos from the database.");
      return;
    } else {
      console.log("home action in home_controller is working");
      return response.render("index", {
        title: "To Do List",
        todo_list: todos,
      });
    }
  });
};
