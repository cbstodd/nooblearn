'use strict';

//TODO: NEED TO GET PAGE TO INSTANT POST WITHOUT REFRESH.
app.controller('NewCourseController', function( $scope, $http ) {
    $scope.formData = {};

    $scope.postCourse = function() {

        $http.post('/api/courses', $scope.formData)
             .success(function( data ) {
                 $scope.courses = data;
                 console.log("Course was successfully created!");
                 console.log(data);
                 $scope.formData = "";//Clear form to enter another.
             })
             .error(function( data ) {
                 console.log("Error: " + data);
             });
    };
});