const express = require('express');
 const userRoute = require('./routes/userRoutes');
 const errorHandler = require('./middlewares/errorHandler')

 const app = express();

 //middleware
 app.use(express.json());

 //route

 app.use('/api', userRoute);

 //health check

 app.get('/health' , (req,res) =>{
    res.status(200).json({
        success:true,
        message:'server is running '
    });
 });

// Error Handler — always after routes

 app.use(errorHandler);

 module.exports = app;