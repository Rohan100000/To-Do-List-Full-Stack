/* **********************To Do List functions************************ */
const db = require("../config/mongoose");
const Todo = require("../models/todo");

// fetching the to do list tasks
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

// create a todo
module.exports.create = function (request, response) {
  console.log("create action in todo_controller is working"); 
  Todo.create(
    {
      task: request.body.task,
      completed: false
    },
    function (error, newTodo) {
      if (error) {
        console.log("Error in creating a todo");
        return;
      } else {
        console.log("********", newTodo);
      }
    }
  );
  return response.redirect("/");
};

// toggle the checkbox, i.e. change completed to opposite of its value
module.exports.toggle_checkbox = function(request,response){
  console.log("toggle checkbox action is working");
  console.log(request.body);
  return response.redirect("/");
}