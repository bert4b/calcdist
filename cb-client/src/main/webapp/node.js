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
		var resource = restful('http://localhost:9080/rest/info', fetchBackend(fetch));

		resource.all('info').getAll().then(function(categories) {
		    var articlePromises = categories.map(function(category) {
		        if (category.status() !== 200) {
		            throw new Error('Invalid response');
		        }
		        category.data(); // will be the data returned by our API
		        // category is an entity
		        // that means you can chain it with other calls
		        return category.one('articles', 2).get();
		    });
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