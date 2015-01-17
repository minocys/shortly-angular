angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  angular.extend($scope, Links);
  $scope.addLink()
  .then(function(){
    $location.path('/');
  }).catch(function(err) {
    console.log(err);
  })
 
});
