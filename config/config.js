require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 5000,
    db: {
        host:process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,

        connectionLimit :
           Number(process.env.DB_CONNECTION_LIMIT) || 10,

           queueLimit:
             Number(process.env.DB_QUEUE_LIMIT) || 0

     
    }
};

module.exports = config;