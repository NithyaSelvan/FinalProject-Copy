'use strict';

module.exports = function($scope,$http,$location){
$scope.book ="";
//bID just a variable, no reference
$scope.bID ="";

$scope.getCancel = function(){
  $http.delete('/booking/booking/' + $scope.bID)
  .success(function(response){
    console.log(response);
    $scope.book = response;
    alert('Ticket cancelled');
});
};
$scope.home = function () { $location.path('/home');
}
};
