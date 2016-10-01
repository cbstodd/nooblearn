var express          = require('express'),
    courseController = require('../controllers/courseController');
    // userController   = require('./server/controllers/UserController'),
    // passport         = require('passport');
    // authController   = require('./server/controllers/auth');


module.exports = function( app ) {

    app.get('/', function( req, res ) {
        res.render('./index');
    });

    // Create our Express router
    var router = express.Router();

    // Create endpoint handlers for /courses
    router.route('/courses')
          .post(courseController.postCourses)
          .get(courseController.getCourses);

    // Create endpoint handlers for /courses/:course_id
    router.route('/courses/:course_id')
          .get(courseController.getCourse)
          .put(courseController.putCourse)
          .delete(courseController.deleteCourse);

    // Register all our routes with /api
    app.use('/api', router);

};

