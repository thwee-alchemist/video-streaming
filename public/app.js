const App = angular.module('App', ['ngSanitize']);

App.controller('HomeCtrl', ['$scope', function($scope){
  $scope.title = "Hello";
  $scope.subtitle = "Worlds";

}])