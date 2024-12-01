const mysql = require('mysql2');
// its very basic and using by the mysql XAMMP sever using
// var Connection_Module = mysql.createConnection({
//     // Database name is custom_code please use any time custom code 

//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'custom_code'
// })

// var Connection_Module = mysql.createConnection({
//     host: 'localhost', // Change to your MySQL host if it's not local
//     user: 'root', // MySQL username
//     password: 'Vishu@2016', // MySQL password (use the correct password if set)
//     database: ' custom_code', // Database name
//     port: 4401 // MySQL port
// });

// Database connection details
const DataBase_Hosting = 'localhost';
const MysqlUser_Name = 'root';
const Mysql_Password = 'Vishu@2016';
const DataBase_Name = 'custom_code';  // Remove extra space here
const DataBase_Port = 4401;


// Create a connection to the database And use the connection details mysql command Line Client 

var Connection_Module = mysql.createConnection({
    host: DataBase_Hosting ,// using by the hosting of DataBase 
    user: MysqlUser_Name,// this is User Name of the DataBase
    password: Mysql_Password,// this is Password of the DataBase
    database: DataBase_Name,// this is DataBase Name
    port: DataBase_Port,// this is DataBase Port
 
});
Connection_Module.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
  });

  module.exports =Connection_Module;