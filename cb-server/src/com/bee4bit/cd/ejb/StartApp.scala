package com.bee4bit.cd.ejb

import javax.ws.rs.GET
import javax.ws.rs.Path

@Path("test")
class StartApp {
  
  @GET
	def test(){
		System.out.println("test2");
	}
  
}