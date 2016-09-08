'use strict';

var app = angular.module('noobLearn', []);

app.controller('CourseController', function( $scope, $http ) {
    $http({
        method: 'GET',
        url:    '/api/courses'
    }).then(function( response ) {
        $scope.courses = response.data;
        console.log('In the Angular CourseController GET promise.');
    });
});
