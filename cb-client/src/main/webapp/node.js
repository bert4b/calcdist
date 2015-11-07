(function()
{
start();

})
()

function fetchBackend(fetch){
	writeToConsoleScreen(fetch);
}

function signal(){
	var txt=document.getElementById("message").value;
	 p.send('whatever' + Math.random())
	writeToConsoleScreen(txt);
}

function start(){
	
	require(['node_modules/restful.js/dist/restful.standalone.js','node_modules/socket.io-p2p/socketiop2p.min.js','node_modules/socket.io/node_modules/socket.io-client/socket.io.js','node_modules/simple-peer/simplepeer.min.js'],function(restful,socketiop2p,socketioclient,simplepeer,p){
		
		writeToConsoleScreen(location.hash === '#1');
		var p = new simplepeer({
			  initiator: false,
			  channelConfig: {},
			  channelName: 'bert',
			  config: { iceServers: [ { url: 'stun:23.21.150.121' } ] },
			  constraints: {},
			  reconnectTimer: 0,
			  sdpTransform: function (sdp) { return sdp },
			  stream: false,
			  trickle: true
			});
		writeToConsoleScreen(p);
		p.on('error', function (err) { console.log('error', err) })

		p.on('signal', function (data) {
		  console.log('SIGNAL', JSON.stringify(data))
		  
		  writeToConsoleScreen(JSON.stringify(data));
		})

		setTimeout(function(){
			var ff=/*JSON[*/{"type":"offer","sdp":"v=0 o=mozilla...THIS_IS_SDPARTA-41.0.2 4294967295 0 IN IP4 0.0.0.0s=-t=0 0 a=sendrecva=fingerprint:sha-256 DD:73:B4:2D:71:93:60:05:86:22:E0:E6:95:5D:8D:13:AF:A7:86:BA:B0:0F:8A:E0:B8:F1:1C:94:9E:51:8F:44a=group:BUNDLE sdparta_0a=ice-options:tricklea=msid-semantic:WMS *m=application 59896 DTLS/SCTP 5000c=IN IP4 82.168.147.66a=candidate:0 1 UDP 2128609535 192.168.1.63 59896 typ hosta=candidate:2 1 UDP 2128543999 169.254.188.180 59897 typ hosta=candidate:1 1 UDP 1692409855 82.168.147.66 59896 typ srflx raddr 192.168.1.63 rport 59896a=sendrecva=end-of-candidatesa=ice-pwd:c185f207a35e0bbbd21ee6253de04713a=ice-ufrag:a6c05102a=mid:sdparta_0a=sctpmap:5000 webrtc-datachannel 256a=setup:actpassa=ssrc:988091684 cname:{910a25c1-2326-443f-8a40-b5fdcb05e212}"}/*]JSON*/;
			var ff2=/*JSON[*/'{"type":"offer","sdp":"v=0 o=mozilla...THIS_IS_SDPARTA-41.0.2 4294967295 0 IN IP4 0.0.0.0 s=-t=0 0 a=sendrecva=fingerprint:sha-256 DD:73:B4:2D:71:93:60:05:86:22:E0:E6:95:5D:8D:13:AF:A7:86:BA:B0:0F:8A:E0:B8:F1:1C:94:9E:51:8F:44a=group:BUNDLE sdparta_0a=ice-options:tricklea=msid-semantic:WMS *m=application 59896 DTLS/SCTP 5000c=IN IP4 82.168.147.66a=candidate:0 1 UDP 2128609535 192.168.1.63 59896 typ hosta=candidate:2 1 UDP 2128543999 169.254.188.180 59897 typ hosta=candidate:1 1 UDP 1692409855 82.168.147.66 59896 typ srflx raddr 192.168.1.63 rport 59896a=sendrecva=end-of-candidatesa=ice-pwd:c185f207a35e0bbbd21ee6253de04713a=ice-ufrag:a6c05102a=mid:sdparta_0a=sctpmap:5000 webrtc-datachannel 256a=setup:actpassa=ssrc:988091684 cname:{910a25c1-2326-443f-8a40-b5fdcb05e212}"}'/*]JSON*/;
			var ff3=/*JSON[*/'{"type":"offer","sdp":"v=0\r\no=mozilla...THIS_IS_SDPARTA-41.0.2 4294967295 0 IN IP4 0.0.0.0\r\ns=-\r\nt=0 0\r\na=sendrecv\r\na=fingerprint:sha-256 DD:73:B4:2D:71:93:60:05:86:22:E0:E6:95:5D:8D:13:AF:A7:86:BA:B0:0F:8A:E0:B8:F1:1C:94:9E:51:8F:44\r\na=group:BUNDLE sdparta_0\r\na=ice-options:trickle\r\na=msid-semantic:WMS *\r\nm=application 59896 DTLS/SCTP 5000\r\nc=IN IP4 82.168.147.66\r\na=candidate:0 1 UDP 2128609535 192.168.1.63 59896 typ host\r\na=candidate:2 1 UDP 2128543999 169.254.188.180 59897 typ host\r\na=candidate:1 1 UDP 1692409855 82.168.147.66 59896 typ srflx raddr 192.168.1.63 rport 59896\r\na=sendrecv\r\na=end-of-candidates\r\na=ice-pwd:c185f207a35e0bbbd21ee6253de04713\r\na=ice-ufrag:a6c05102\r\na=mid:sdparta_0\r\na=sctpmap:5000 webrtc-datachannel 256\r\na=setup:actpass\r\na=ssrc:988091684 cname:{910a25c1-2326-443f-8a40-b5fdcb05e212}"}'/*]JSON*/;
			var ff4=/*JSON[*/'{"type":"offer","sdp":"v=0"}'/*]JSON*/;
			var ff5=/*JSON[*/'{"type":"offer","sdp":"v=0\\r\\no=mozilla...THIS_IS_SDPARTA-41.0.2 4294967295 0 IN IP4 0.0.0.0\\r\\ns=-\\r\\nt=0 0\\r\\na=sendrecv\\r\\na=fingerprint:sha-256 DD:73:B4:2D:71:93:60:05:86:22:E0:E6:95:5D:8D:13:AF:A7:86:BA:B0:0F:8A:E0:B8:F1:1C:94:9E:51:8F:44\\r\\na=group:BUNDLE sdparta_0\\r\\na=ice-options:trickle\\r\\na=msid-semantic:WMS *\\r\\nm=application 59896 DTLS/SCTP 5000\\r\\nc=IN IP4 82.168.147.66\\r\\na=candidate:0 1 UDP 2128609535 192.168.1.63 59896 typ host\\r\\na=candidate:2 1 UDP 2128543999 169.254.188.180 59897 typ host\\r\\na=candidate:1 1 UDP 1692409855 82.168.147.66 59896 typ srflx raddr 192.168.1.63 rport 59896\\r\\na=sendrecv\\r\\na=end-of-candidates\\r\\na=ice-pwd:c185f207a35e0bbbd21ee6253de04713\\r\\na=ice-ufrag:a6c05102\\r\\na=mid:sdparta_0\\r\\na=sctpmap:5000 webrtc-datachannel 256\\r\\na=setup:actpass\\r\\na=ssrc:988091684 cname:{910a25c1-2326-443f-8a40-b5fdcb05e212}\\r\\n"}'/*]JSON*/;
			//var jsonMatch = ff.match( /\/\*JSON\[\*\/([\s\S]*?)\/\*\]JSON\*\// );
			//var data = JSON.parse( jsonMatch ? jsonMatch[1] : ff );
			var jp=JSON.parse(ff5);	 
			p.signal(jp);
				
			
		},2000);

		p.on('connect', function () {
			writeToConsoleScreen('CONNECT')
		  p.send('whatever' + Math.random())
		})

		p.on('data', function (data) {
			writeToConsoleScreen('data: ' + data)
		})
		
		
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
		
		/*
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
