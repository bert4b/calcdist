package com.bee4bit.cb.datastoremanager

import com.bee4bit.cb.node.Node
import scala.collection.mutable.HashMap
import scala.collection.mutable.Map


class DSManager {
  val nodes:Map[String,Node]=new HashMap()
 def addNode(node:Node)={
    nodes.put(node.id,node);
  }
  
  def getMetaInformation():DataMetaInformation={
    new DataMetaInformation(nodes.size)
  }
  
  def getNode(id:String):Option[Node]={
    
     nodes.get(id)
  }
}

