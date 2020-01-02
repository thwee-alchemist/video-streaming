const App = angular.module('App', ['ngSanitize']);

App.controller('HomeCtrl', ['$scope', function($scope){
  var socket = io('https://theplants.herokuapp.com/socket.io/');
  var img = document.querySelector('#playback');
  
  socket.on('playback', (data) => {
    console.log('data received');
    img.src = data;
  });
}])