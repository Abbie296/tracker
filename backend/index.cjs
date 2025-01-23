var express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() =>{
    
    db.run('CREATE TABLE "users" ("userId"	INTEGER NOT NULL UNIQUE,"password"	TEXT NOT NULL,"email"	TEXT NOT NULL UNIQUE,"age"	INTEGER NOT NULL,"sex"	TEXT NOT NULL,"height"	NUMERIC NOT NULL,"weight"	NUMERIC NOT NULL,"phonenumber"	TEXT NOT NULL UNIQUE,"name "	TEXT NOT NULL,PRIMARY KEY("userId" AUTOINCREMENT));',(err)=> {
        if (err){
            console.log("hi")
        }
    });


    db.run('CREATE TABLE "foods" ("foodId"	INTEGER NOT NULL UNIQUE,"foodName"	TEXT NOT NULL,"ingredient"	TEXT NOT NULL,"rating"	INTEGER NOT NULL,"date"	TEXT NOT NULL,PRIMARY KEY("foodId" AUTOINCREMENT));',(err)=> {
        if (err){
            console.log("hi2")
        }
    });


    // const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    // for  (let i = 0; i <10; i++){
    //     stmt.run(`Ipsum${i}`);
    // }
    // stmt.finalize();

    // db.each('SELECT rowid AS id, info FROM lorem',(err,row) => {
    //     console.log(`${row.id}: ${row.info}`);
    // })
})
const app = express();
var sql = ('mssql');
var port = '3000';



// Test the server works
app.get('/',function(req,res){
    res.send("Hello world!");
});


//Displays all the info from users
app.get('/users', function(req,res){
    
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


