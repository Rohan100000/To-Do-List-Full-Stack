const express = require("express");
const app = express();
const port = 8000;

// use express router using middleware
app.use('/',require('./routes/index.js'));

// use ejs as the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function (error) {
  if (error) {
    console.log(`Error in running the server: ${error}`);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
