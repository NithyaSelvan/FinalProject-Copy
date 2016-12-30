'use strict';

module.exports = function($scope,$http) {
  //$scope.admin = 'admin';
  // $scope.admin = $rootScope.adminDetails;


  $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});

//showtime

(function(){

    var user = function($http){

      var getUsers = function(username){
            return $http.get('/showtime/showtime')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers
      };

    };

    var module = angular.module('movieApp');
    module.factory('user', user);

}());



(function(){

    var user1 = function($http){

      var getUsers1 = function(username1){
            return $http.get('/city/city')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers1
      };

    };

    var module = angular.module('movieApp');
    module.factory('user1', user1);

}());

(function(){

    var user2 = function($http){

      var getUsers2 = function(username2){
            return $http.get('/theatre/theatre')
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers2
      };

    };

    var module = angular.module('movieApp');
    module.factory('user2', user2);

}());


(function(){

    var user3 = function($http){

      var getUsers3 = function(username3){
            return $http.get('/movieinfo/movieinfo')
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






//City Controller

var refresh1 = function () {
        $http.get('/city/city').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.firstlist = response;
            $scope.first = "";
        });
    };

refresh1();

      $scope.addCity = function () {
          console.log($scope.first);
          $http.post('/city/city', $scope.first).success(function (response) {
              console.log(response);
              console.log("CREATE IS SUCCESSFUL");
              refresh1();
              // $rootScope.adminDetails = $scope.admin;
          });
      };

      $scope.removeCity = function (id) {
          console.log(id);
          $http.delete('/city/city/' + id._id).success(function (response) {
              console.log(response);
              console.log('DELETED SUCCESSFULLY');
              refresh1();
          });
      };

      $scope.editCity= function (id) {
           $http.get('/city/city/' + id._id).success(function (response) {
              $scope.first = response[0];
          });
      };

      $scope.updateCity = function () {
          console.log("REACHED UPDATE");
          console.log($scope.first._id);
          $http.put('/city/city/' + $scope.first._id, $scope.first).success(function (response) {
              console.log(response);
              refresh1();
          })
      }

//Theatre Controller


      var refresh2 = function () {
            $http.get('/theatre/theatre').success(function (response) {
                console.log('READ IS SUCCESSFUL');
                $scope.detaillist = response;
                $scope.detail = "";
            });
        };

        refresh2();

        $scope.addTheatre = function () {
            console.log($scope.detail);
            $http.post('/theatre/theatre', $scope.detail).success(function (response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refresh2();
                // $rootScope.adminDetails = $scope.admin;
            });
        };

        $scope.removeTheatre = function (id) {
            console.log(id);
            $http.delete('/theatre/theatre/' + id._id).success(function (response) {
                console.log(response);
                console.log('DELETED SUCCESSFULLY');
                refresh2();
            });
        };

        $scope.editTheatre= function (id) {
             $http.get('/theatre/theatre/' + id._id).success(function (response) {
                $scope.detail = response[0];
            });
        };

        $scope.updateTheatre = function () {
            console.log("REACHED UPDATE");
            console.log($scope.detail._id);
            $http.put('/theatre/theatre/' + $scope.detail._id, $scope.detail).success(function (response) {
                console.log(response);
                refresh2();
            })
        }





        var refresh3 = function () {
                $http.get('/showtime/showtime').success(function (response) {
                    console.log('READ IS SUCCESSFUL');
                    $scope.adminlist = response;
                    $scope.admin = "";
                });
            };

        refresh3();

              $scope.addShowTime = function () {
                  console.log($scope.admin);
                  $http.post('/showtime/showtime', $scope.admin).success(function (response) {
                      console.log(response);
                      console.log("CREATE IS SUCCESSFUL");
                      refresh3();
                  });
              };

              $scope.removeShowTime = function (id) {
                  console.log(id);
                  $http.delete('/showtime/showtime/' + id._id).success(function (response) {
                      console.log(response);
                      console.log('DELETED SUCCESSFULLY');
                      refresh3();
                  });
              };

              $scope.editShowTime= function (id) {
                   $http.get('/showtime/showtime/' + id._id).success(function (response) {
                      $scope.admin = response[0];
                  });
              };

              $scope.updateShowTime = function () {
                  console.log("REACHED UPDATE");
                  console.log($scope.admin._id);
                  $http.put('/showtime/showtime/' + $scope.admin._id, $scope.admin).success(function (response) {
                      console.log(response);
                      refresh3();
                  })
              }
//OFFER CONTROLLER

              var refresh4 = function () {
                      $http.get('/offer/offer').success(function (response) {
                          console.log('READ IS SUCCESSFUL');
                          $scope.discountlist = response;
                          $scope.discount = "";
                      });
                  };

              refresh4();

                    $scope.addOffer = function () {
                        console.log($scope.discount);
                        $http.post('/offer/offer', $scope.discount).success(function (response) {
                            console.log(response);
                            console.log("CREATE IS SUCCESSFUL");
                            refresh4();
                        });
                    };

                    $scope.removeOffer = function (id) {
                        console.log(id);
                        $http.delete('/offer/offer/' + id._id).success(function (response) {
                            console.log(response);
                            console.log('DELETED SUCCESSFULLY');
                            refresh4();
                        });
                    };

                    $scope.editOffer= function (id) {
                         $http.get('/offer/offer/' + id._id).success(function (response) {
                            $scope.discount = response[0];
                        });
                    };

                    $scope.updateOffer = function () {
                        console.log("REACHED UPDATE");
                        console.log($scope.discount._id);
                        $http.put('/offer/offer/' + $scope.discount._id, $scope.discount).success(function (response) {
                            console.log(response);
                            refresh4();
                        })
                    }



//movie Controller

var movieObj={};
$scope.getData = function(){
  console.log('Hi Welcome')
  $http.get('http://www.omdbapi.com/?t=' +$scope.movieObj.Title+ '&y='+ $scope.movieObj.Year+ '&plot=short&r=json').success(function (response) {
      console.log(response);
           for(var key in response){
      if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')
      {
      movieObj[key] = response[key];
      }
    console.log(movieObj);
      }
           refreshomdb();
  });
}
var refreshomdb = function () {
    $http.get('/movie/movie').success(function (response) {
        console.log('READ IS SUCCESSFUL');
        $scope.movieObj = response;
        $scope.movies = "";
    });
};
refreshomdb();
            $scope.addMovie = function () {
                              console.log(movieObj);
                              $http.post('/movie/movie',movieObj).success(function (response) {
                                  console.log(response);
                                  console.log("CREATE IS SUCCESSFUL");
                                  refreshomdb();
                              });
                          };
 $scope.removeMovie = function (id){
  console.log(id);
  $http.delete('/movie/movie/' + id._id).success(function (response) {
  console.log(response);
  console.log('DELETED SUCCESSFULLY');
  refreshomdb();
  });
};

var refresh5 = function () {
  $http.get('/movieinfo/movieinfo').success(function (response) {
console.log('READ IS SUCCESSFUL');
$scope.lastlist = response;
$scope.last = "";
  });
};
refresh5();

    $scope.addMovieInfo = function () {
console.log($scope.last);
$http.post('/movieinfo/movieinfo',$scope.last).success(function (response) {
  console.log(response);
  console.log("CREATE IS SUCCESSFUL");
  refresh5();
  });
};

      $scope.removeMovieInfo = function (id){
        console.log(id);
  $http.delete('/movieinfo/movieinfo/' + id._id).success(function (response) {
  console.log(response);
console.log('DELETED SUCCESSFULLY');
          refresh5();
  });
};

$scope.editMovieInfo= function (id) {
   $http.get('/movieinfo/movieinfo/' + id._id).success(function (response) {
    $scope.last = response[0];
            });
        };
  $scope.updateMovieInfo = function () {
        console.log("REACHED UPDATE");
          console.log($scope.last._id);
$http.put('/movieinfo/movieinfo/' + $scope.last._id, $scope.last).success(function (response) {
    console.log(response);
    refresh5();
      })
  }

};
