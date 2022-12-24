// module.exports.actionName = function(req,res){}

module.exports.home = function (request, response) {
  console.log("home action in home_controller is working");
  return response.render("index", {
    title: "To Do List",
  });
};
