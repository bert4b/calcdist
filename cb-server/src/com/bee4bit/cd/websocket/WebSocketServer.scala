package com.bee4bit.cd.websocket
import javax.websocket.server.ServerEndpoint
import javax.websocket.OnClose
import javax.websocket.OnError
import javax.websocket.OnMessage
import javax.websocket.OnOpen
import javax.websocket.Session

@ServerEndpoint("/actions")
class WebSocketServer {
  
    @OnOpen
        def open(session:Session) {
    }

    @OnClose
        def close(session:Session) {
    }

    @OnError
        def onError( error:Throwable) {
    }

    @OnMessage
        def handleMessage( message:String,  session:Session) {
    }
}