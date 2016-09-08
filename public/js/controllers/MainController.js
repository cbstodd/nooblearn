var app = angular.module('noobLearn', []);

app.controller('MainController', function( $scope, $http ) {
    // $http.get('/api/courses').success(function( response ) {
    //     $scope.courses = response.data;
    //     console.log("I recieved the data response");
    // });
    $http({
        method: 'GET',
        url:    '/api/courses'
    }).then(function( response ){
        $scope.courses = response.data;
        console.log('in course controller');
    });

});