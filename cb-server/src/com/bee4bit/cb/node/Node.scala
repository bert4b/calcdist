package com.bee4bit.cb.node

class Node(metaInfo:NodeMetaInformation) {
  def this(idetifier:String)={
    this(new NodeMetaInformation())
  }
  def getMetaInformation:NodeMetaInformation={
    metaInfo
  }
}