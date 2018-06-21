const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// this is body parser stuff, use specifically mounts and executes the middleware at that path.
//http://expressjs.com/en/api.html#app.use
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Serve up static assets
// https://expressjs.com/en/starter/static-files.html
// the path that you provide to the express.static function is relative to the directory from where you launch your node process.
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
// http://mongoosejs.com/docs/promises.html#plugging-in-your-own-promises-library
// In a nutshell this lets us use es6 promises instead of mongoose own.
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//self explanitory but here are the docs
//http://mongoosejs.com/docs/connections.html
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
