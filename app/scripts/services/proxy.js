'use strict';

/**
 * @ngdoc service
 * @name todoApp.Proxy
 * @description
 * # Proxy
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('Proxy', ['$q', '$http',function ($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var restCall = function(method,data,url,params,headers,external){
    		var defer = $q.defer();
    		var reqHeaders = external ? {} : {
	    	//'X-Parse-Application-Id': 'AxcIKaTzkxUJhKn0BQqabnpxAB2qy4XWvt8upQ5X',
				//'X-Parse-REST-API-Key': '2BDNBcWYRe6u6uA82VU5qfpDpsIJNjPD1agCne0k',
				'AnonymousToken' : 'bf256965-d625-4aa1-99a0-df0cecb2a7c2',
		    'Content-Type':'application/json'}
		    var req = {
				  method: method,
				  url: url,
				  headers: reqHeaders,
				  data:data,
				  params:params
		  	};
		    $http(req).
			  success(function(data, status, headers, config) {
			    defer.resolve(data);
	 			}).
	 	 		error(function(data, status, headers, config) {
		  		defer.reject(data);
		 		});
		 return defer.promise;
		};

		var getCall = function(url,params,headers){
			params = params ? params:{};
			return restCall('GET',{},url,params,headers);
		};

		var postCall = function(data,url,headers){
			return restCall('POST',data,url,{},headers);
		};

		var putCall = function(data,url){
			return restCall('PUT',data,url);
		};

		var getExternalCall = function(url,params,headers){
			params = params ? params:{};
			return restCall('GET',{},url,params,headers,true);
		};

		var deleteCall = function(url, data){
			return restCall('DELETE',data,url);
		};

		//Purpose
		return{
			postCall:postCall,
			putCall:putCall,
			getCall:getCall,
			getExternalCall:getExternalCall,
			deleteCall:deleteCall
		}
  }]);
