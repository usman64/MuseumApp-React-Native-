const express = require("express");
const mysql = require("mysql");
const { Client } = require("pg");
const cors = require("cors");

const client = new Client({
    connectionString: 'postgres://wnsauadxmdaocv:7eeb0ca53dd9464ee91ab1bd336b6b7beeee5278afaa6321c266477c75cfeec2@ec2-174-129-253-47.compute-1.amazonaws.com:5432/d9j6k3putoqcp7',
    ssl: true
});

client.connect();

const app = express();

const PORT = process.env.PORT||8080;

// const connection = mysql.createConnection({
//     host:"localhost",//changes here
//     port: 3306,// changes here
//     user: "root",// changes here
//     password: "password",//here change password = done
//     database: "testing1"//changes here
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(cors());

client.connect(function(error){
    console.log("connected to database");
    app.listen(PORT, function(){
        console.log("listening at port " + PORT);
    });
});

app.get("/api/all", function(req,res){
    client.query("SELECT * FROM test1", function(error,result){
        res.json(result);
    });
    // might need changes here
});
