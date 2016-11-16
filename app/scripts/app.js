'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'backand',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TodoCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //The run is a kick start of the application
  .run(['$rootScope','$location', 'Backand', function($rootScope, $location, Backand){
    //Backand configuration
    Backand.setAppName('todojbayona');
    //Backand.setSignUpToken('be4f9f72-ae3c-4e04-b64d-a7dc414059a6');
    //Backand.setAnonymousToken('bf256965-d625-4aa1-99a0-df0cecb2a7c2SSS');
    //App Name
    Backand.signin('jordavids_22@hotmail.com', 'football100').then(function(data){
      //console.log(data);
    },function(data, status, header, config){
      //console.log('Error = ' + data);
    });
  }]);
