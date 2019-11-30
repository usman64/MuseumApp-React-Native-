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
//PUPPETS BY ID
app.get("/puppets/:id", function(req,res){
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM puppets WHERE puppetid = "+id+"";
    client.query(query, function(error,result){
        res.json(result.rows);
    });
});
//ALL PUPPETS + PUPPET  IMAGE LINKS EXCEPT PUPPET DESCRIPTION 
app.get("/allpuppets", function (req, res) {
    var query = 
    `SELECT
    a.puppetId puppetId,
    a.puppetName puppetName,
    a.category category,
    a.puppetYear puppetYear,
    a.region region,
    b.imageLink imageLink
    FROM
    puppets a
    INNER JOIN puppetImage b ON a.puppetId = b.puppetId`;
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
    // var query2 = "SELECT * FROM puppetImage";
    // client.query(query2, function (error, result) {
    //     res.json(result.rows);
    // });
});
// EVENTS BY ID
app.get("/events/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM events WHERE eventId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
});
// ALL EVENTS
app.get("/allevents", function (req, res) {
    var query = "SELECT * FROM puppets";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
});
//PUPPET IMAGE BY PUPPET ID
app.get("/puppetimage/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM puppetImage WHERE puppetId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
});
// EVENT IMAGE BY BY EVENT ID
app.get("/eventimage/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM eventImages WHERE eventId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
})
// PUPPET VIDEO BY PUPPET ID 
app.get("/puppetvideo/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM puppetVideo WHERE puppetId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
})
// RELATED EVENTS BY EVENT ID
app.get("/relatedevents/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM relatedEvents WHERE eventId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
})

// EVENT TRAILER BY BY EVENT ID
app.get("/eventtrailer/:id", function (req, res) {
    console.log(req.params)
    var id = req.params.id
    var query = "SELECT * FROM eventTrailer WHERE eventId = " + id + "";
    client.query(query, function (error, result) {
        res.json(result.rows);
    });
})


/*
https://glacial-beyond-08798.herokuapp.com/
/puppets/:id 
/allpuppets 
/events/:id 
/allevents 
/puppetimage/:id 
/eventimage/:id 
/puppetvideo/:id 
/relatedevents/:id 
/eventtrailer/:id 
*/