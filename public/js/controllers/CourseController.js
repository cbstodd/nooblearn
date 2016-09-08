'use strict';

var app = angular.module('noobLearn', []);

app.controller('CourseController', function( $scope, $http ) {
    var refresh = function() {
        $http({
            method: 'GET',
            url:    '/api/courses'
        }).then(function( response ) {
            $scope.courses = response.data;
        });
    };
    refresh();

    $scope.postCourse = function() {
        $http.post('/api/courses', $scope.formData)
             .success(function( data ) {
                 $scope.courses = data;
                 console.log("Course was successfully created!");
                 console.log(data);
                 refresh();
                 $scope.formData = {};//Clear form to enter another.
             })
             .error(function( data ) {
                 console.log("Error: " + data);
             });
    };
    
    $scope.deleteCourse = function ( id ) {
        $http.delete('/api/courses/' + id);
        refresh();
        console.log("Deleted: " + id + " from the database.");
    }


});
