angular.module('loginController',[])
.controller('loginController', function ($scope, $state, $cordovaOauth, 
                                   Users, Config, $ionicPlatform,
                                   $ionicLoading, $cordovaPush) {
    //if user found, go to home page
  if (Users.current()) {
    $state.go('home');
  }

//else login

  $scope.login= function () {
    $ionicPlatform.ready(function () {
      //$cordovaOauth.twitter(Config.linkedinSecret, Config.linkedinId)
        $cordovaOauth.linkedin(Config.linkedinId, Config.linkedinSecret, Config.appScope, Config.state)
        .then(function (result) {
          $ionicLoading.show({
            template: 'Loading...'
          });
          Users.login(result).then(function (user) {
            console.log('checking for token');
            if (user.deviceToken) {
              $ionicLoading.hide();
              $state.go('home');
              return;
            }

            $ionicPlatform.ready(function () {
            console.log('pushing notifications');
              $cordovaPush.register({
                badge: true,
                sound: true,
                alert: true
              }).then(function (result) {
                Users.registerDevice({
                  user: user, 
                  token: result
                }).then(function () {
                  $ionicLoading.hide();
                  $state.go('home');
                }, function (err) {
                  console.log(err);
                });
              }, function (err) {
                console.log('reg device error', err);
              });
            });
          });
        }, function (error) {
          console.log('error', error);
        });
    });
  };

    $scope.loginlol= function() {
        clientId = '772h7nkedaqp3a'
        clientSecret = 'iEf12MqlkmhhZDgo'
        appScope = ['r_basicprofile', 'r_emailaddress']
        state = 'login'
        $cordovaOauth.linkedin(Config.linkedinId, Config.linkedinSecret, Config.appScope, Config.state)
        //$cordovaOauth.linkedin(clientId, clientSecret, appScope, state)
        .then(function(result) {
            console.log(JSON.stringify(result));
            window.localStorage.setItem("access_token", result.access_token);
        }, function(error) {
            console.log(error);
        });
    }
});
