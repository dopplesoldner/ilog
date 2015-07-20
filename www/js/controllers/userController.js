angular.module('userController',[])
.controller('userController', function($scope, $http, Users) {
    Users.all()
    .success(function(data){
        $scope.user = data[0];
    })
    .error(function(data, status, headers, config) {
         console.log(status);
     });
});


