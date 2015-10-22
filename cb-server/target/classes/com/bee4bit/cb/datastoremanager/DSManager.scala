package com.bee4bit.cb.datastoremanager

import com.bee4bit.cb.node.Node
import scala.collection.mutable.HashSet
import scala.collection.mutable.Set


class DSManager {
  val nodes:Set[Node]=new HashSet()
 def addNode(node:Node)={
    nodes.add(node)
  }
}

