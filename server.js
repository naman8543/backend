const app = require('./app')

const config = require('./config/config');

const server = app.listen(config.port,()=>{
    console.log(
        `sever running in ${config.env} mode on port ${config.port}`
    );
});