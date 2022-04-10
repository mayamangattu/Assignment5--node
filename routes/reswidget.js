const express = require('express')
//const { ObjectId } = require('mongodb')
const reswidgetMiniApp = express.Router()
const mongoUtil = require('../mongoutil')

//read the body
reswidgetMiniApp.use(express.json())

//gets widgits
reswidgetMiniApp.get('/widgits',async (req,res)=>{
  
   try{
    const cursor = await mongoUtil.getDocs('Assignment5','widgits')
    const widgits =  await cursor.toArray()
    res.send(widgits)
   }catch(err){
     res.send(err.message)
        .sendStatus(500)
   }
})

module.exports= reswidgetMiniApp