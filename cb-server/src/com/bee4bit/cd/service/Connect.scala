package com.bee4bit.cd.service
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.PathParam
import javax.ws.rs.PathParam
import com.bee4bit.cb.datastoremanager.DSManager
import com.bee4bit.cb.node.Node
import com.bee4bit.cb.datastoremanager.DataMetaInformation

@Path("connect")
class Connect {
  
  val dsManager:DSManager=new DSManager()
  
  @Path("login/{id}")
  @GET
  @Produces(value=Array("application/json"))
  def nodeSubscribe(@PathParam("id")identifier:String):DataMetaInformation={
   
    dsManager.addNode(new Node(identifier))
    return dsManager.getMetaInformation()
    
  } 
  
  
    @Path("dsinfo")
  @GET
  @Produces(value=Array("application/json"))
  def nodeSubscribe():DataMetaInformation={
   
    return dsManager.getMetaInformation()
    
  } 
}