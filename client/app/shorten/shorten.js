angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};
  angular.extend($scope, Links);
  $scope.add = function(){
    $scope.loading = true;
    $scope.addLink($scope.link)
    .then(function(){
      $scope.loading = false;
      $location.path('/');
    }).catch(function(err) {
      console.log(err);
    });
  }
});
