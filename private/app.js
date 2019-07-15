const feedApp = angular.module('feedApp', []);

feedApp.controller('FeedCtrl', ['$scope', function($scope){
  var video = document.querySelector('#playback');

  navigator
  .mediaDevices
  .getUserMedia({
      audio: false,
      video: {
      facingMode: 'user',
      width: video.width,
      height: video.height,
      }
  })
  .then(stream => {
      video.srcObject = stream
      video.onloadedmetadata = () => { video.play() }
  })
}])