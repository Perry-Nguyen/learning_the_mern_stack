require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');
const cors = require('cors');
//express app
const app = express();

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use(cors());
//routes    
app.use('/api/workouts',workoutRoutes);

//connnect to the db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, ()=>{
            console.log(`listen to ` + process.env.PORT );
        })
    })
    .catch((error) =>{
        console.log(error);
    })

