const express=require('express')
const logger=require('../logger/logger')
const router=express.Router()

router.get('/test-api',(req,res)=>{
    return res.status(200).send({status:true,message:"Successfully route create, apis ready to travel"})
})

router.get('/test-me',logger.welcome)

module.exports=router;