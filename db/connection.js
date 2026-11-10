const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/sampleDB');
        console.log('Connected to MongoDB');
    }catch (err) {
        console.log('Error connecting to MongoDB', err);
    } 
};

module.exports = connectdb;