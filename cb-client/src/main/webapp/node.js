(function()
{
start();

})
()

function fetchBackend(fetch){
	writeToConsoleScreen(fetch);
}

function start(){
	
	require(['node_modules/restful.js/dist/restful.standalone.js'],function(restful){
		var resource = restful('http://localhost:9080/cb-server/rest/connect', fetchBackend(fetch));
		resource.custom('dsinfo').get().then(function(response){
			writeToConsoleScreen(response);
			  const article = response.body().data();
				writeToConsoleScreen(article);
		});
		resource.one('login',1).get().then(function(response) {
			writeToConsoleScreen(response);
			
			
			writeToConsoleScreen(response.body());

		  const article = response.body().data();
			writeToConsoleScreen(article);
		   
		});
		
	});
	
	
	
	
}

function ff(){
	
	const api = restful('http://localhost:9080/rest/connect', fetchBackend(fetch));
	const articlesCollection = api.all('login');
	articlesCollection.get().then((response) => {
	    const articleEntity = response.body();

	    const article = articleEntity.data();
	    console.log(article.title); // hello, world!
	});
}