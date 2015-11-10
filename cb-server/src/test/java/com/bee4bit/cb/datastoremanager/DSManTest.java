package com.bee4bit.cb.datastoremanager;

import static org.junit.Assert.*;

import org.junit.Test;

import com.bee4bit.cb.node.Node;
import com.bee4bit.cb.node.NodeMetaInformation;

public class DSManTest {

	
	@Test
	public void test(){
		DSManager ds = new DSManager();
		Node node = new Node(new NodeMetaInformation());
		
		ds.addNode(node);
		assertEquals("",2,ds.clusterSize());
	}
}
