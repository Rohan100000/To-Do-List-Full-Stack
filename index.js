const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: false }));

// using middleware to specify the static files
app.use(express.static('./assets'));

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
