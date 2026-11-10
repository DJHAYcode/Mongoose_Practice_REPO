const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
 studentNumber : {
    type: String,
    required: true,
    unique: true
 },
 firstName: {
    type:String,
    required: true
 },
 age: {
    type: Number,
    min: 15
 },
 course: {
    type: String,
    required:  true
 },
 email: {
    type: String,
    lowercase: true,
 }
}, { 
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);