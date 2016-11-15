'use strict';

/**
 * @ngdoc service
 * @name todoApp.todo
 * @description
 * # todo
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('Todo', ['Proxy', 'Backand', function (Proxy, Backand) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log(Backand.getApiUrl());

    this.postTodoTask = function(taskDescription){
    	var param = {
    		description : taskDescription
    	}
    	return Proxy.postCall(param, Backand.getApiUrl() + '/1/objects/todo_list');
    };

  }]);
