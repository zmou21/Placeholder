var express = require("express");
var bodyParser = require("body-parser");
// var session = require("express-session");
// var passport = require('passport');
// var flash = require('connect-flash');
// var ejs = require('ejs')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
//
// app.use(passport.initialize());
//
// app.use(passport.session());
//
// app.use(flash());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =============================================================
// var routes= require("./routes/html-routes.js");
var routes= require("./routes/api-routes.js");
//require('./routes/passport.js')(passport);

app.use(routes);

//comment
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force:false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
