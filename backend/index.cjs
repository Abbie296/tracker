// Documentation
// https://github.com/TryGhost/node-sqlite3/wiki/API


var express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');
const app = express();
var port = '3000';

// Creates database and tables if the database is gone
db.serialize(() =>{
    db.run('CREATE TABLE "users" ("userId"	INTEGER NOT NULL UNIQUE,"password"	TEXT NOT NULL,"email"	TEXT NOT NULL UNIQUE,"age"	INTEGER NOT NULL,"sex"	TEXT NOT NULL,"height"	NUMERIC NOT NULL,"weight"	NUMERIC NOT NULL,"phonenumber"	TEXT NOT NULL UNIQUE,"name "	TEXT NOT NULL,PRIMARY KEY("userId" AUTOINCREMENT));',(err)=> {
        if (err){
            console.log("'users' table already exists")
        }
    });
    db.run('CREATE TABLE "foods" ("foodId"	INTEGER NOT NULL UNIQUE,"foodName"	TEXT NOT NULL,"ingredient"	TEXT NOT NULL,"rating"	INTEGER NOT NULL,"date"	TEXT NOT NULL,PRIMARY KEY("foodId" AUTOINCREMENT));',(err)=> {
        if (err){
            console.log("'foods' table already exists")
        }
    });
});



// Test the server works
app.get('/',function(req,res){
    res.send("Hello world!");
});


//Displays all the info from users
app.get('/users', function(req,res){
    db.get(`SELECT * FROM users;`,(err,row) => {
        res.send(row);
    });
});

app.get('/signup',function(req,res){
    res.send("Test");
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


