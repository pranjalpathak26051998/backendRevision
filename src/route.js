const express=require('express')
const router=express.Router()

router.get('/test-api',(req,res)=>{
    return res.status(200).send({status:true,message:"Revision began succesfully"})
})

module.exports=router

