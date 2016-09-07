// Load required packages
var Course = require('../models/course');

// Create endpoint /api/courses for POST
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
    course.userId = req.user._id;

    // Save the course and check for errors
    course.save(function( err ) {
        if (err)
            res.send(err);

        res.json({ message: 'Course added to the locker!', data: course });
    });
};

// Create endpoint /api/courses for GET
exports.getCourses = function( req, res ) {
    // Use the Course model to find all course
    Course.find({ userId: req.user._id }, function( err, courses ) {
        if (err)
            res.send(err);

        res.json(courses);
    });
};

// Create endpoint /api/courses/:course_id for GET
exports.getCourse = function( req, res ) {
    // Use the Course model to find a specific course
    Course.find({ userId: req.user._id, _id: req.params.course_id }, function( err, course ) {
        if (err)
            res.send(err);

        res.json(course);
    });
};

// Create endpoint /api/courses/:course_id for PUT
exports.putCourse = function( req, res ) {
    // Use the Course model to find a specific course
    Course.update({
        userId: req.user._id,
        _id:    req.params.course_id
    }, { quantity: req.body.quantity }, function( err, num, raw ) {
        if (err)
            res.send(err);

        res.json({ message: num + ' updated' });
    });
};

// Create endpoint /api/courses/:course_id for DELETE
exports.deleteCourse = function( req, res ) {
    // Use the Course model to find a specific course and remove it
    Course.remove({ userId: req.user._id, _id: req.params.course_id }, function( err ) {
        if (err)
            res.send(err);

        res.json({ message: 'Course removed from the locker!' });
    });
};
