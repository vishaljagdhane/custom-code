const express = require('express');
const Opreation_Router = express.Router()
const Connection_Module = require('./MyDataBase');



// This function is Get Mysql Data 
Opreation_Router.get('/userData', (req, res) => {
    const MysqlQueryGetingData = 'SELECT * FROM userregister'; // SQL query to fetch all data from userregister table
  
    Connection_Module.query(MysqlQueryGetingData, (error, results) => {
      if (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from database' });
      } else {
        res.status(200).json(results); // Send the fetched data as JSON response
        console.log("Fetched")
      }
    });
  });




  Opreation_Router.post('/userDataPost', (req, res) => {
    const { fname, lname, mobile, email, password } = req.body;

    if (!fname || !lname || !mobile || !email || !password) {
        return res.status(400).json({ error: "Please fill all the details" });
    }

    const DataPostingQuery = `INSERT INTO userregister (fname, lname, email, mobile, password) 
                              VALUES (?, ?, ?, ?, ?)`;

    Connection_Module.query(DataPostingQuery, [fname, lname, email, mobile, password], (error, result) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).json({ error: 'Failed to insert data into database' });
        } else {
            res.status(200).json({ message: 'User registered successfully', userId: result.insertId });
        }
    });
});


module.exports = Opreation_Router;

