var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var apiRouter = require("./routes/api");

var app = express();


// const url = "mongodb://127.0.0.1:27017/redux";

// mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true } );


app.use("/api", apiRouter);

app.listen(3000, function () {
  console.log("Express app started on port 3000.");
});
