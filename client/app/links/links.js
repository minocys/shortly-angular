angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  angular.extend($scope, Links);
  $scope.getLinks()
  .then(function(data){
    $scope.data.links = data;
  }).catch(function(err) {
    console.error(err);
  });
})
