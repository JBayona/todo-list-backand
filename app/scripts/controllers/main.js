'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    	 $scope.todoList = [];

    	 $scope.todoAdd = function(){
    	 		$scope.todoList.push({task: $scope.todoTask, done : false});
    	 		$scope.todoTask = '';
    	 };

  }]);
