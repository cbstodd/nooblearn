var app = angular.module('nooblearn', []);

app.controller('MainController', function( $scope, $http ) {
      $scope.message = "Hello from the Main Ctrl";
  });