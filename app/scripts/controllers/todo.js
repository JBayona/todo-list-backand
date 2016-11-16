'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoCtrl', ['$scope', 'Todo', '$filter', function ($scope,Todo, $filter) {

  	$scope.todoList = [];
  	$scope.todoCompleted = [];
  	$scope.todoIncompleted = [];
  	var orderBy = $filter('orderBy');

	 $scope.todoAdd = function(){
	 		$scope.todoList.push({task: $scope.todoTask, done : false});
	 		$scope.todoTask = '';
	 };

	 $scope.addTask = function(){
	 	Todo.postTodoTask($scope.todoTask, false).then(function(data){
	 		$scope.todoTask = '';
	 		getTasks();
	 	});
	 };

	 $scope.markAsComplete = function(taskId, isComplete){
	 	Todo.updateTask(taskId,isComplete).then(function(data){
	 		getTasks(); //Updating the table information
	 	});
	 };

	 $scope.removeTask = function(taskId){
	 	Todo.deleteTask(taskId).then(function(data){
	 		getTasks(); //Updating the table information
	 	});
	 };

	 var getTasks = function(){
	 	Todo.getTodoTask().then(function(response){
	 		$scope.todoList = response.data;
	 		//We can use only one variable for the two tables, but we will split in two variables(complete, incomplete) tasks
	 		/*$scope.todoList.forEach(item => {
	 			if(item.complete) $scope.todoCompleted.push(item);
	 			else $scope.todoIncompleted.push(item);
	 		})
	 		console.log($scope.todoCompleted);
	 		console.log($scope.todoIncompleted);*/
	 	});
	 };

  $scope.order = function(predicate, reverse) {
    $scope.todoList = orderBy($scope.todoList, predicate, reverse);
  };

	 //Init routines
	 getTasks();
    
  }]);
