var iservices = angular.module('ittefaq-services',[]);

iservices.factory('Config', function() {
    var config = {
        server : 'http://localhost:8080',
        linkedinId : '772h7nkedaqp3a',
        linkedinSecret : 'iEf12MqlkmhhZDgo',
        appScope: ['r_basicprofile', 'r_emailaddress'],
        state: 'login'
    };
    return config;
});

iservices.factory('Users', function($q, $state, $http, Config, localStorageService) {
    var user;

    var all = function() {
        return $http.get(Config.server + '/api/users');
    };

    var login = function (post) {
        var deferred = $q.defer();

        $http.post(Config.server + '/api/users/login', post)
        .success(function (user) {
            localStorageService.set('user', user);
            user = user;

            deferred.resolve(user);
        })
        .error(function () {
            deferred.reject('error');
        });

        return deferred.promise;
    };

    var logout = function() {
        localStorageService.remove('user');
        user = null;
        $state.go('login');
    };

    var current = function () {
        if (!user) {
            user = localStorageService.get('user');
        }
        return user;
    };

    var registerDevice = function (putData) {
        var deferred = $q.defer();

        $http.post(Config.server + '/api/users/registerDevice', putData)
        .success(function (data) {

            localStorageService.set('user', user);
            user = user;

            deferred.resolve(user);
        })
        .error(function () {
            deferred.reject('error');
        });

        return deferred.promise;
    };

    return {
        all: all,
        login: login,
        logout: logout,
        current: current,
        registerDevice: registerDevice
    };

});
