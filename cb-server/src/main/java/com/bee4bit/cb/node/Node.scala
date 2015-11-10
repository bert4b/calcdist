package com.bee4bit.cb.node

class Node(metaInfo:NodeMetaInformation) {
  var id:String=""
  var nodeSignalInfo=new NodeSignalInformation()
  def this(identifier:String,nodeInfo:NodeMetaInformation)={
    this(nodeInfo)
    this.id=identifier;
  }
  def getMetaInformation:NodeMetaInformation={
    metaInfo
  }
   def setNodeSignalInformation(signalInfo:NodeSignalInformation)={
    this.nodeSignalInfo=signalInfo
  }
  def getNodeSignalInformation:NodeSignalInformation={
    nodeSignalInfo
  }
}