(function()
{
start();

})
()

function fetchBackend(fetch){
	writeToConsoleScreen(fetch);
}

function start(){
	
	require(['node_modules/restful.js/dist/restful.standalone.js','node_modules/socket.io-p2p/socketiop2p.min.js','node_modules/socket.io/node_modules/socket.io-client/socket.io.js'],function(restful,socketiop2p,socketioclient){
		
		var ws = new WebSocket("ws://localhost:9080/cb-server/socket.io");        
		 
		ws.onopen = function() {
			writeToConsoleScreen('open');
			ws.send('test');
		};
		 
		ws.onmessage = function(message) {
		 //do something when message arrives 
		};
		 
		ws.onclose = function() {
		 //do something when connection close 
		};
		
		
		var socket = socketioclient();
		socket.io.opts.path='/cb-server/socket.io';
			writeToConsoleScreen(socket);
			var opts = {autoUpgrade: false, peerOpts: {numClients: 10}};
		var p2p = new socketiop2p(socket,opts,function(){
			writeToConsoleScreen('p2p');
		});
		p2p.on('peer-msg', function (data) {
			  console.log('From a peer %s', data);
			});
		p2p.on('ready', function(){
			writeToConsoleScreen('ready');
		 p2p.usePeerConnection = true;
		  p2p.emit('peer-obj', { peerId: peerId });
		})
		p2p.on('go-private', function () {
			p2p.upgrade(); // upgrade to peerConnection
			});
		
		
		socket.on('connection', function(socket) {
			  socket.on('peer-msg', function(data) {
			    console.log('Message from peer: %s', data);
			    socket.broadcast.emit('peer-msg', data);
			  })

			  socket.on('go-private', function(data) {
			    socket.broadcast.emit('go-private', data);
			  });
			});
		
		/*
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
		*/
	});
	
	
	
	
}
