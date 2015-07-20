// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var il = angular.module('ittefaq', ['ionic', 'ngCordova', 'userController', 'loginController', 'ittefaq-services', 'LocalStorageModule']);

il.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

il.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('login', {
        url: '/',
        controller: 'loginController',
        templateUrl: 'templates/login.html'
    })
    .state('home', {
        url: '/home',
        controller: 'userController',
        templateUrl: 'templates/home.html'
    });
});

//il.controller('loginCtrl', function($scope, $cordovaOauth, $http) {

    //$scope.googleLogin = function() {
        //clientId = '540881881646-2r4cnjid14gn69ant2assi14l2afj9ij.apps.googleusercontent.com'
        //$cordovaOauth.google(clientId, ['https://www.googleapis.com/auth/urlshortener', 'https://www.googleapis.com/auth/userinfo.email']).then(function(result) {
            //console.log(JSON.stringify(result));
            //$scope.googleData = JSON.stringify(result);
        //}, function(error) {
            //console.log(error);
        //});
    //}

    //$scope.linkedinLogin = function() {
        //clientId = '772h7nkedaqp3a'
        //clientSecret = 'iEf12MqlkmhhZDgo'
        //appScope = ['r_basicprofile', 'r_emailaddress']
        //state = 'login'
        //$cordovaOauth.linkedin(clientId, clientSecret, appScope, state).then(function(result) {
            //console.log(JSON.stringify(result));
            //window.localStorage.setItem("access_token", result.access_token);
            //$scope.linkedinAccessCode= JSON.stringify(result);
            //if(result.access_token) {
                //$scope.linkedinData();
            //}
        //}, function(error) {
            //console.log(error);
        //});
    //}

    //$scope.linkedinData = function() {
        //console.log('trying to add data')
        ////apiUrl = 'https://api.linkedin.com/v1/people/~?format=json'
        //apiUrl = 'https://api.linkedin.com/v1/people/~:(id,formatted-name,positions,headline,summary,location,industry,educations,languages,picture-urls::(original))?format=json'
        //$http.defaults.headers.common.Authorization = "Bearer " + window.localStorage.getItem("access_token");
        //$http.get(apiUrl)
        //.success(function(data) {
            //console.log(JSON.stringify(data));
            //$scope.linkedinData= JSON.stringify(data);
        //})
        //.error(function(error) {
            //console.log(error);
        //});
    //}


//});
