// Load required packages
var mongoose = require('mongoose');

// Define our course schema
var CourseSchema = new mongoose.Schema({
    progress:        Number,
    imageUrl:        String,
    experienceLevel: Number,
    language:        String,
    description:     String,
    positionId:      Number,
    title:           String
    // userId:          String
});

// Export the Mongoose model
module.exports = mongoose.model('Course', CourseSchema);
