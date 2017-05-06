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

    this.postTodoTask = function(taskDescription,complete){
    	var param = {
    		description : taskDescription,
            complete: complete
    	}
    	return Proxy.postCall(param, Backand.getApiUrl() + '/1/objects/todo_list');
    };

    this.getTodoTask = function(){
        return Proxy.getCall(Backand.getApiUrl() + '/1/objects/todo_list');
    };

    this.updateTask = function(id, complete){
        var param = {
            complete: complete
        }
        return Proxy.putCall(param, Backand.getApiUrl() + '/1/objects/todo_list/' + id);
    };

    this.updateDescription = function(id, descriptionUpdated){
      var param = {
        description: descriptionUpdated
      };
      return Proxy.putCall(param, Backand.getApiUrl() + '/1/objects/todo_list/' + id);
    }

    this.deleteTask = function(id){
        return Proxy.deleteCall(Backand.getApiUrl() + '/1/objects/todo_list/' + id);
    };

  }]);
