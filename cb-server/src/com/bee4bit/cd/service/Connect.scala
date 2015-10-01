package com.bee4bit.cd.service
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
@Path("connect")
class Connect {
  
  @Path("login")
  @GET
  @Produces(value=Array("application/json"))
  def nodeSubscribe(identifier:String){
    
  } 
}