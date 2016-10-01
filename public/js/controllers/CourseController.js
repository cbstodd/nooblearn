'use strict';

app.controller('CourseController', function( $scope, $http ) {

    var refresh = function() { //Refreshes page
        //Get Courses
        $http({
            method: 'GET',
            url:    '/api/courses'
        }).then(function( response ) {
            $scope.courses = response.data;
        });
    };
    refresh();

});
