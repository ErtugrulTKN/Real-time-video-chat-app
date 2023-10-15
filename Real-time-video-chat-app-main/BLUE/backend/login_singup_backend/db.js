const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.mongoUrl);

module.exports={connection}


// buna chat gpt den bakalım:
/* const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db: 'mongodb://localhost:27017/your_database_name', // Replace with your database URL
      options: {
        useUnifiedTopology: true, // Use this option if needed
      },
    }),
  ],
});

// Now you can use this logger to log messages.
logger.info('This is an info message.'); */
