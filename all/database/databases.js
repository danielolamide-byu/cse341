

const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongodb.connect(process.env.MONGO_URI);
        console.log("Database Connected.")
    } catch {
        console.log("Error while trying to connect to the Database.")
    }
}

module.exports = connectDB;