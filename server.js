// Get the packages we need
var express          = require('express'),
    bodyParser       = require('body-parser'),
    mongoose         = require('mongoose'),
    courseController = require('./server/controllers/CourseController'),
    userController   = require('./server/controllers/UserController'),
    passport         = require('passport'),
    authController   = require('./server/controllers/auth'),
    app              = express();

mongoose.connect('mongodb://localhost:27017/noobsee');

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

//Sets file paths to start from public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('./index');
});

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /courses
router.route('/courses')
      .post(authController.isAuthenticated, courseController.postCourses)
      .get(authController.isAuthenticated, courseController.getCourses);

// Create endpoint handlers for /courses/:course_id
router.route('/courses/:course_id')
      .get(authController.isAuthenticated, courseController.getCourse)
      .put(authController.isAuthenticated, courseController.putCourse)
      .delete(authController.isAuthenticated, courseController.deleteCourse);

// Create endpoint handlers for /users
router.route('/users')
      .post(userController.postUsers)
      .get(authController.isAuthenticated, userController.getUsers);


// Register all our routes with /api
app.use('/api', router);

// Use environment defined port or 3000
var port = process.env.PORT || 3000;
// Start the server
app.listen(port);
console.log('Insert course on port http://localhost:' + port);