'use strict';


var angular = require('angular');
require('angular-route');
window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('angularjs-dropdown-multiselect');
require('../css/app.scss');
require('../css/app1.scss');


var app = angular.module('movieApp', [ 'ngRoute' ]);


require('./controller');
require('./service');

app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
     controller: 'HomeController',
    access: {restricted: false}
  })
  .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'LogoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterController',
      access: {restricted: false}
    })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })

  .when('/rating', {
        templateUrl: 'views/rating.html',
        controller: 'RatingController',
      })
      .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainController',
        })
  .when('/cancel', {
      templateUrl: 'views/cancellation.html',
      controller: 'CancelController',
    })
    .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentController',
          access: {restricted: false}
      })
  .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminController',
    //
    access: {restricted: true}
  })

  .otherwise({
    redirectTo: '/',
  });
});

app.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});
