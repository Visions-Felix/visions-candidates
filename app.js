// Candidate service vars
// Indiques ici les 2 variables qui vont été transmises pour le test
const serviceName = "LinkedIn";
const serviceId = "5fd34277c0aa4521f470267c";


var express = require("express");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var json2xls = require("json2xls");
var cors = require("cors");
const moment = require("moment");

var candidatePwd = "kdGQNqFPq7epfoLM"
var candidateUser = "visions-candidate"

// Database
var mongoDB = "mongodb+srv://"+candidateUser+":"+candidatePwd+"@cluster0.klwyv.mongodb.net/visions-candidates?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


mongoose.Promise = require("bluebird");

// Routes
const general = require("./Routes/general");
const webApp = require("./Routes/webApp");
const dataview = require("./Routes/dataview");

const app = express();

app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/sections"),
]);

app.set("view engine", "ejs");

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/")));
app.use(json2xls.middleware);
app.use(cors());

// Candidates
app.use((req, res, next) => {
  req.body.serviceName = serviceName;
  req.body.serviceId = serviceId;
  next()
})

// Routes
app.use("/", general);
app.use("/webApp", webApp);
app.use("/dataview", dataview);

app.use(function (err, req, res, next) {
  console.log(err);
});

let port = process.env.PORT || 8626;
app.listen(port, () => {
  console.log("App running on: http://localhost:" + port);
});
