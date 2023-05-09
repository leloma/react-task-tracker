
const express = require('express')

const app = express();
require('dotenv').config()

app.get('/',(req,res,next)=>{
    res.send('started a server')
})

app.listen(process.env.PORT,()=>{
    console.log("server start on Port : ", process.env.PORT);
})