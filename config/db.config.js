const mysql = require('mysql');
//local mysql db connection
var dbConn = mysql.createConnection({
    host     : 'todo.c6mtvn0p0nmh.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'a1b2c3d4',
    port     : 3306,
    database : 'employee'
  });
  
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;