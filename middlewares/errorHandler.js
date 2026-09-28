const errorHandler = (err,req,res,next)=>{
    console.log('ERROR' , err.message);

    res.status(500).json({
        success: false,
        message: 'Internal server Error'
    });

};

module.exports = errorHandler;