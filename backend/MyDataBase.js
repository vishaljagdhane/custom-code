const mysql = require('mysql');

var Connection_Module = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'custom_code'
})

Connection_Module.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
  });

  module.exports =Connection_Module;