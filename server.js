// Get the packages we need
var express          = require('express'),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    courseController = require('./server/controllers/CourseController'),
    app              = express();

mongoose.connect('mongodb://localhost:27017/noobsee');

app.use(bodyParser.urlencoded({ extended: true }));

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

// Use environment defined port or 3000
var port = process.env.PORT || 3000;
// Start the server
app.listen(port);
console.log('Insert course on port http://localhost:' + port);