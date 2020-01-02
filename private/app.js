const feedApp = angular.module('feedApp', []);



feedApp.controller('FeedCtrl', ['$scope', function($scope){

  var video = document.querySelector('#playback');

  var canvas = document.createElement('canvas');
  canvas.width = video.width;
  canvas.height = video.height;
  var context = canvas.getContext('2d')

  var socket = io('https://theplants.herokuapp.com/socket.io/');
  

  function grab() {
    context.drawImage(video, 0, 0, video.width, video.height);
    var dataURL = canvas.toDataURL();
    socket.emit('playback', dataURL);
  }

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
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    mediaRecorder.ondataavailable = function(e){
      socket.emit('playback', e.data)
    };

    setInterval(grab, 100)

    video.srcObject = stream;
    video.onloadedmetadata = () => { video.play() };

    ss(socket).emit('playback', stream);
  });
}]);