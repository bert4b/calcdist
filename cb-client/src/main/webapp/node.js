(function()
{
start();

})
()

function fetchBackend(fetch){
	writeToConsoleScreen(fetch);
}

function start(){
	require(['node_modules/angular/angular.min.js','node_modules/restangular/dist/restangular.min.js'],function (angular,Restangular){
		angular.module('your-app', ['restangular']);

		var baseAccounts = Restangular.all('accounts');

		// This will query /accounts and return a promise.
		baseAccounts.getList().then(function(accounts) {
		  $scope.allAccounts = accounts;
		});
		
	});
	
	//ff();
	
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