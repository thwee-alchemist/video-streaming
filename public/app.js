const App = angular.module('App', ['ngSanitize']);


class BinaryTree {
  constructor(l){
    this.r = Math.random();
    
    l -= 1;
    if(l){
      this.left = new BinaryTree(l);
      this.right = new BinaryTree(l)
    }
  }
  
  traverse(fn){
    if(this.left) fn(this, this.left);
    if(this.right) fn(this, this.right); 
  }
}

App.controller('HomeCtrl', ['$scope', '$sce', function($scope, $sce){
  $scope.title = "Hello";
  $scope.subtitle = "Worlds";

  var textarea = document.querySelector('.input.one');

  var onCtrlEnter = function(cm){
    console.log('test')
    $scope.output = eval($scope.editor.getValue());
    $scope.$apply();
  };

  $scope.editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: 'javascript',
    indentUnit: 2,
    lineWrapping: true,
    extraKeys: {
      'Ctrl-Enter': onCtrlEnter 
    }
  });

  $scope.download = function(){
    var link = document.querySelector('a#download');
    var blob = new Blob([$scope.editor.getValue()], {type: 'text/javascript'});
    link.download = prompt('File name?', 'unnamed.js');
    link.href = window.URL.createObjectURL(blob);
  }

  $scope.editor.focus();
  $scope.editor.setCursor({line: 1});

  $scope.input = '';
  $scope.output = '';

  // $scope.channel = new MessageChannel();
}])