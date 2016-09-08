// Get the packages we need
var express          = require('express'),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    courseController = require('./server/controllers/CourseController'),
    // userController   = require('./server/controllers/UserController'),
    passport         = require('passport');
    // authController   = require('./server/controllers/auth');


mongoose.connect('mongodb://localhost:27017/noobsee');

var app = express();

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

//Sets file paths to start from public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Use environment defined port or 3000
var port = process.env.PORT || 3000;
// Start the server
app.listen(port);
console.log('Insert course on port http://localhost:' + port);