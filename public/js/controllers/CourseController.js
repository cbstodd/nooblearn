'use strict';

var app = angular.module('noobLearn', []);

// angular.module('noobLearn.services').factory('Entry', function( $resource ) {
//     return $resource('/api/courses/:course_id');
// });

app.controller('CourseController', function( $scope, $http ) {
    var refresh = function() { //Refreshes page
        $http({
            method: 'GET',
            url:    '/api/courses'
        }).then(function( response ) {
            $scope.courses = response.data;
        });
    };
    refresh();

    $scope.saveCourse = function() {
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


    $scope.editCourse = function( id ) {
        $http.get('/api/courses/' + id)
             .success(function( response ) {
                 $scope.formData = response;
                 console.log($scope.formData = response);
             });
    };

    $scope.updateCourse = function() {
        $http.put('/api/courses/' + $scope.formData._id, $scope.formData)
             .success(function() {
                 console.log("Course " + $scope.formData.title + " was successfully updated!");
                 $scope.formData = {};//Clear form to enter another.
                 refresh();
             })
    };


    $scope.deleteCourse = function( id ) {
        $http.delete('/api/courses/' + id);
        refresh();
        console.log("Deleted: " + id + " from the database.");
    };


});
