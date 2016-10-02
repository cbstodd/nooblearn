'use strict';

app.controller('AuthController', function( $scope ) {

    $scope.user = {
        username:     '',
        email:        '',
        password:     '',
        confirmation: ''
    };
    $scope.msg = '';

    $scope.signin = function() {
        $scope.msg = "Welcome " + $scope.user.username + "!";
    };
    $scope.signup = function() {
        $scope.msg = "Thanks for signing up " + $scope.user.username + "!";
    };

});