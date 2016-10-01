'use strict';

var app = angular.module('noobLearn', ['ngRoute']);

app.config(function( $routeProvider, $locationProvider ) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/partials/courses.ejs',
          controller:  'CourseController'
      })
      .when('/home', {
          templateUrl: 'views/partials/home.ejs',
          controller:  'HomeController'
      })
      .when('/courses', {
          templateUrl: 'views/partials/courses.ejs',
          controller:  'CourseController'
      })
      .when('/edit-course', {
          templateUrl: 'views/partials/edit-courses.ejs',
          controller:  'EditCourseController'
      })
      .when('/courses/:course_id', {
          templateUrl: 'views/courseDetails.ejs',
          controller:  'CourseDetailsController'
      })
      .when('/likes', {
          templateUrl: 'views/likes.ejs',
          controller:  'LikesController'
      })
      .otherwise({
          templateUrl: '/'
      });
    $locationProvider.html5Mode(true);
});







