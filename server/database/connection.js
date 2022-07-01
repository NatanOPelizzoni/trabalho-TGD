const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {autoCreate: true});

        console.log(`MongoDB conectado: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;