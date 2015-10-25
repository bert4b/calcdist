(function()
{
start();

})
()

function fetchBackend(fetch){
	writeToConsoleScreen(fetch);
}

function start(){
//	require(['node_modules/angular/angular.min.js','node_modules/restangular/dist/restangular.min.js'],function (angular,Restangular){
//		angular.module('your-app', ['restangular']);
//
//		var baseAccounts = Restangular.all('accounts');
//
//		// This will query /accounts and return a promise.
//		baseAccounts.getList().then(function(accounts) {
//		  $scope.allAccounts = accounts;
//		});
//		
//	});
	
	//ff();
	
	require(['node_modules/restful.js/dist/restful.standalone.js'],function(restful){
		var resource = restful('http://localhost:9080/cb-server/rest/connect', fetchBackend(fetch));
		resource.custom('login').get().then(function(response){
			riteToConsoleScreen(response);
		});
		resource.one('login',1).get().then(function(response) {
			writeToConsoleScreen(response);
			
			
			writeToConsoleScreen(response.body());

		  const article = response.body().data();
			writeToConsoleScreen(article.info);
		   
		});
		
	});
	
	
	
	
}

function ff(){
//var Promise = require('es6-promise').Promise;
	
	const api = restful('http://localhost:9080/rest/connect', fetchBackend(fetch));
	const articlesCollection = api.all('login');
	articlesCollection.get().then((response) => {
	    const articleEntity = response.body();

	    const article = articleEntity.data();
	    console.log(article.title); // hello, world!
	});
}