const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/employees')
var cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB_URL = "mongodb+srv://trocha:trevorPassword123@trevorcluster.yqb8p.mongodb.net/101061114_assignment2?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("Connected to 101061114_assignment2 Database.");
}).catch((err) => {
    console.log("Error, No Connection.", err);
    process.exit();
});

app.get("/", (req, res) => {
    res.send("Welcome to employee API.");
});
app.use(cors());
app.use("/api/v1/employees", router);
app.listen(8000, () => {
    console.log("Server is listening on port: 8000")
});