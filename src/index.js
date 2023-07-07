const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()

require('dotenv').config()
const {PORT,MONGODB_URL}=process.env
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',route);

app.listen(PORT, ()=>{
    console.log(`express running succesfully at ${PORT}`)
})
