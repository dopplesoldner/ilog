// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var il = angular.module('starter', ['ionic', 'ngCordova']);

il.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

il.controller('loginCtrl', function($scope, $cordovaOauth) {

    $scope.googleLogin = function() {
        client_id = '581508692768-2578gubf298g8o1ddpr6fpoeli95pag2.apps.googleusercontent.com'
        $cordovaOauth.google(client_id, ['https://www.googleapis.com/auth/urlshortener', 'https://www.googleapis.com/auth/userinfo.email']).then(function(result) {
            console.log(JSON.stringify(result));
            $scope.data = JSON.stringify(result);
        }, function(error) {
            console.log(error);
        });
    }

});
