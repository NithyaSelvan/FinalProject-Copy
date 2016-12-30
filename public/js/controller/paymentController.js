'use strict';

module.exports = function($scope,$http,$location,$rootScope){
  // $scope.book = $rootScope.paymentInfo;
  $scope.book = $rootScope.bookingDetails;
console.log($scope.book);
$scope.blockSeat = function(seat) {
    // if(reserved.indexOf(seatPos) > -1) {
    //     return 'reserved';
    // } else if(selected.indexOf(seatPos) > -1) {
    //     return 'selected';
    // }
    $scope.reserved='';
    alert(reserved);

}


$scope.alert = function(){ alert("Ticket booked successfully");
}

$scope.home1 = function () {
  $location.path('/home');

}
};
