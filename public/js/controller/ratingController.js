'use strict';

module.exports = function($scope,$http,$rootScope,$location){
  //  $rootScope.bookingDetails=$scope.book;
$scope.ss="";

$(document).ready(function(){
    $("#b1").click(function(){
        $("#myModal").modal();
        var bmovie = $("#bm").value;
        $("#title").value = bmovie;
    });

});


//  $scope.go = function () { $location.path('/payment');
// }

$scope.titleInfo = function myFunction(title) {
  //alert(title);
  $scope.ss=title;
  $scope.book.movieName=$scope.ss;
//  alert($scope.book.movieName);
  document.getElementById('mvtitle').value=title;
}



function controller($scope)
{
    $scope.parseFloat = function(value)
    {
        return parseFloat(value);
    }
}




(function(){

    var user3 = function($http){

      var getUsers3 = function(username3){
            return $http.get('/rating/rating')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers3
      };

    };

    var module = angular.module('movieApp');
    module.factory('user3', user3);

}());


  var refresh5 = function () {
    $http.get('/movieinfo/movieinfo').success(function (response) {
  console.log('READ IS SUCCESSFUL');
  $scope.lastlist = response;
  $scope.last = "";
    });
  };

refresh5();


var refreshomdb = function () {
    $http.get('/movie/movie').success(function (response) {
        console.log('READ IS SUCCESSFUL');
        $scope.movieObj = response;
        $scope.movies = "";
    });
};


refreshomdb();


var refreshbook = function () {
      $http.get('/booking/booking').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.booklist = response;
          $scope.book = "";
      });
  };

  refreshbook();

  var refreshrate = function () {
        $http.get('/rating/rating').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.ratelist = response;
            $scope.rate = "";
        });
    };

    refreshrate();


$scope.rateMovie =function () {
$http.post('/rating/rating',$scope.rate).success(function (response) {
console.log(response);
console.log("CREATE IS SUCCESSFUL");
refreshrate();
$rootScope.ratingMovie = $scope.book.movieName;
$rootScope.ratingDetails = $scope.rate;
$location.path('/rating');
alert('Thanks For Your Rating');

});
};

$scope.ratingInfo = function (id) {
  $http.get('/rating/rating' + id).success(function (response) {
      console.log('READ IS SUCCESSFUL');
      $scope.ratelist = response;
      $scope.rate = "";
//      alert($scope.book.seatselected);
  });
};




//get method



$scope.bookedInfo = function (id) {
  $http.get('/booking/booking' + id).success(function (response) {
      console.log('READ IS SUCCESSFUL');
      $scope.booklist = response;
      $scope.book = "";
//      alert($scope.book.seatselected);
  });
};


//booking Controller
var refresh1 = function () {
        $http.get('/city/city').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.firstlist = response;
            $scope.first = "";
        });
    };

refresh1();


// seat selection code


$scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
$scope.cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
$scope.seatselected= "";
// Set reserved and selected
$scope.reserved = ["A1"];
//$scope.reserved = $scope.seatblock;

var selected = [];

// seat onClick
$scope.seatClicked = function(seatPos) {
  //alert($scope.book.seatselected);
    console.log("Selected Seat: " + seatPos);
    
    var index = selected.indexOf(seatPos);
    if(index != -1) {
        // seat already selected, remove
        selected.splice(index, 1)
    } else {
        // new seat, push
        selected.push(seatPos);
    }
    if(selected.length > 0) {
//         alert("Selected Seats: \n" + selected);
$scope.seatselected=selected;
  $scope.book.seatselected= $scope.seatselected;
       //alert("Selected Seats: \n" + $scope.book.seatselected);


        //alert("Selected Seats: \n" + $scope.seatno);
    } else {
        alert("No seats selected!");
    }

}

$scope.checkseat = function(seatno) {
  //alert(seatno.length);
  //alert(seatno);
  // var s1=seatno;
   for (var i = 0; i < seatno.length; i++) {
    //alert(s);
    //var s="F1,F2";
    var s1=[];
    s1[i]=seatno.split(",")[i];
    $scope.reserved.push(s1[i]);
      // alert($scope.reserved);
      }
}
// get seat status
$scope.getStatus = function(seatPos) {
  // for (var i = 0; i < $scope.book.seatselected.length; i++) {
  //       // arraySeats.push(seatno[i].value)
  //      // alert($scope.seatblock[i].value);
  //        $scope.reserved.push($scope.book.seatselected[i].value);
  //     }
 // alert(seatPos);
    if($scope.reserved.indexOf(seatPos) > -1) {
        return 'reserved';
    } else if(selected.indexOf(seatPos) > -1) {
        return 'selected';
    }
}
          var arraySeats = [];

$scope.blockSeat = function(seatno) {
  alert(seatno);
      // for (var i = 0; i < seatno.length; i++) {
      //   arraySeats.push(seatno[i].value)
      // }
    $scope.reserved.push(seatno);
    alert($scope.reserved);

}
// clear selected
$scope.clearSelected = function() {
    selected = [];
}


};
