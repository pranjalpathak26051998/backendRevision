const express =require('express')
const mongoose=require('mongoose')
const route=require('./route')
const app=express();
require('dotenv').config();
const {PORT,MONGODB_URL}= process.env

app.use('/',route)


app.listen(PORT ,()=>{
    console.log(`Express is running successfully on port ${PORT}`)
})



