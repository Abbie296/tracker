var express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

db.serialize(() =>{
    db.run('CREATE TABLE lorem(info TEXT)');
    const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
    for  (let i = 0; i <10; i++){
        stmt.run(`Ipsum${i}`);
    }
    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM lorem',(err,row) => {
        console.log(`${row.id}: ${row.info}`);
    })
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


