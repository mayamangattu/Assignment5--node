const express = require('express')

const restaurantsMiniApp = express.Router()
const mongoUtil = require('../mongoutil')

//read the body
restaurantsMiniApp.use(express.json())

//gets all the restaurants based on city
restaurantsMiniApp.get('/:city',async (req,res)=>{
   
   // get the docs from  coll
   const city=req.params.city
   let query={}
   query={"city":city}

   try{
    const cursor = await mongoUtil.getDocs('Assignment5','restaurants',query)
    const restaurants = await cursor.toArray()
    res.send(restaurants)
   }catch(err){
     res.send(err.message)
        .sendStatus(500)
   }
})

     


module.exports= restaurantsMiniApp