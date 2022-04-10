const express= require('express');
const cors = require('cors');

// import the routes

const restaurantsRoute = require('./routes/restaurants')
const sampleAPI = require('./routes/sample')
const reswidgetRoute=require('./routes/reswidget')

//expose env variables as process.env
require('dotenv').config();


//initialize the app
const app = express();
//use the cors
app.use(cors());

//listen to the routes

app.use('/',restaurantsRoute)
app.use('/sample', sampleAPI)
app.use('/widgits', reswidgetRoute)

//set the error handler
// call the error handler using next(msg)
app.use((err,req,res, next)=>{
    console.log(err.stack);
    res.status(500)
       .send('Something broke!');
});

//listen the app at port
// get the post from the env
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`eator api running at ${port}`);
});


