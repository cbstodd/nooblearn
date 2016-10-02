var express          = require('express'),
    courseController = require('../controllers/course'),
    userController   = require('../controllers/user'),
    passport         = require('passport'),
    authController   = require('../controllers/auth');


module.exports = function( app ) {

    app.get('/', function( req, res ) {
        res.render('./index');
    });

    // Create our Express router
    var router = express.Router();

    // Create endpoint handlers for /courses
    router.route('/courses')
          .post(authController.isAuthenticated, courseController.postCourses)
          .get(courseController.getCourses);

    // Create endpoint handlers for /courses/:course_id
    router.route('/courses/:course_id')
          .get(courseController.getCourse)
          .put(authController.isAuthenticated, courseController.putCourse)
          .delete(authController.isAuthenticated, courseController.deleteCourse);

    // Create endpoint handlers for /users
    router.route('/users')
          .post(userController.postUsers)
          .get(authController.isAuthenticated, userController.getUsers);

    // Register all our routes with /api
    app.use('/api', router);

};

