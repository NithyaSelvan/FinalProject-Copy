'use strict';

module.exports = function($scope, $http) {
$scope.home = 'home';

};

// 'use strict';

// module.exports = function($scope, MovieList, $http, $rootScope) {
//  MovieList.addMovie("kabali");
//  $rootScope.name = 'ignatius';
//   $scope.home = 'home';
//   // var self = this;
//
// 		// 		self.firstName = '';
// 		// 		self.lastName = '';
//
// 		// 		self.getFullName = function(){
// 		// 			return self.firstName + ' ' + self.lastName;
// 		// 		};
//
// 		// 		return self;
//
//
// 	var refresh = function () {
//         $http.get('http://www.omdbapi.com/?t=titanic&plot=short&r=json').success(function (response) {
//             console.log(response);
//             var movieObj={};
//             for(var key in response){
//             	if(key=='Title' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors'){
//             		movieObj[key] = response[key];
//
//             	}
//             }
//            console.log(movieObj);
//         });
//     };
//
//     var loadInformations = function(){
//     	 $http.get('/city/getCity').success(function (response) {
//             console.log('load city entered');
//             console.log(response);
//             var dropdown = document.getElementById("city");
// 			if (dropdown) {
// 				for (var key in response) {
// 				  if (response.hasOwnProperty(key)) {
// 				    addOption(dropdown, response[key].name);
// 				  }
// 				}
// 			}
//
// 			function addOption(selectbox, value) {
// 			    var optn = document.createElement("OPTION");
// 			    optn.text = value;
// 			    optn.value = value;
// 			    selectbox.options.add(optn);
// 			}
//         });
//
//     }
//
//     refresh();
//     loadInformations();
// };
