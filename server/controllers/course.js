// Load required packages
var express = require('express'),
    Course  = require('../models/Course');

// Create endpoint /api/courses for POSTS
exports.postCourses = function( req, res ) {
    // Create a new instance of the Course model
    var course = new Course();

    // Set the course properties that came from the POST data
    course.progress = req.body.progress;
    course.imageUrl = req.body.imageUrl;
    course.experienceLevel = req.body.experienceLevel;
    course.language = req.body.language;
    course.description = req.body.description;
    course.title = req.body.title;

    // Save the course and check for errors
    course.save(function( err ) {
        if (err)
            res.send(err);

        res.json({ message: 'Course added to the database!', data: course });
    });
};

// Create endpoint /api/courses for GET
exports.getCourses = function( req, res ) {
    // Use the Course model to find all course
    Course.find(function( err, courses ) {
        if (err)
            res.send(err);

        res.json(courses);
        console.log(courses);
    });
};

// Create endpoint /api/courses/:course_id for GET
exports.getCourse = function( req, res ) {
    // Use the Course model to find a specific course
    Course.findById(req.params.course_id, function( err, course ) {
        if (err)
            res.send(err);

        res.json(course);
    });
};

// Create endpoint /api/courses/:course_id for PUT/EDIT/UPDATE
exports.putCourse = function( req, res ) {
    // Use the Course model to find a specific course
    Course.findById(req.params.course_id, function( err, course ) {
        if (err)
            res.send(err);

        // Update the existing course quantity
        course.progress = req.body.progress;
        course.imageUrl = req.body.imageUrl;
        course.experienceLevel = req.body.experienceLevel;
        course.language = req.body.language;
        course.description = req.body.description;
        course.title = req.body.title;

        // Save the course and check for errors
        course.save(function( err ) {
            if (err)
                res.send(err);

            res.json(course);
        });
    });
};

// Create endpoint /api/courses/:course_id for DELETE
exports.deleteCourse = function( req, res ) {
    // Use the Course model to find a specific course and remove it
    Course.findByIdAndRemove(req.params.course_id, function( err ) {
        if (err)
            res.send(err);

        res.json({ message: 'Course removed from the database!' });
        console.log("Course removed from the database!");
    });
};
