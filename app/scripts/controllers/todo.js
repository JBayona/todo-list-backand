'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoCtrl', ['$scope', 'Todo', function ($scope,Todo) {

  	$scope.todoList = [];

	 $scope.todoAdd = function(){
	 		$scope.todoList.push({task: $scope.todoTask, done : false});
	 		$scope.todoTask = '';
	 };

	 $scope.addTask = function(){
	 	Todo.postTodoTask($scope.todoTask).then(function(data){
	 		console.log('Inserted');
	 		console.log(data);
	 	});
	 }
    
  }]);
