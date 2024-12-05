const express = require('express');
const ApiRouter = express.Router();
const MysqlConnectionData = require('./myDataBase');


// this is the Check Only Get API method that

ApiRouter.use('/basicApiCheck',(req,res)=>{
    res.send("Basic Api is correctly configured")
})


module.exports = ApiRouter;
