'use strict';

var app = angular.module('noobLearn', ['ngRoute'])
                 .config(function( $routeProvider, $locationProvider ) {
                     $routeProvider
                       .when('/', {
                           //TODO: Need to uncomment for production mode
                           //  templateUrl: 'views/home.ejs',
                           // controller:  'HomeController'
                           templateUrl: 'views/partials/index.ejs',
                           controller:  'MainController'
                       })
                       .when('/courses', {
                           templateUrl: 'views/partials/index.ejs',
                           controller:  'MainController'
                       })
                       // .when('/courses/:course_id', {
                       //     templateUrl: 'views/courseDetails.ejs',
                       //     controller:  'CourseDetailsController'
                       // })
                       // .when('/likes', {
                       //     templateUrl: 'views/likes.ejs',
                       //     controller:  'LikesController'
                       // })
                       .otherwise({
                           templateUrl: '/'
                       });
                     $locationProvider.html5Mode(true);
                 });







