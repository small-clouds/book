package com.zrgk.test;

import org.aspectj.lang.JoinPoint;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sun.faces.facelets.util.Classpath;

public class AopJ {
	@Test
	public void Main01() {
			ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
			MyTarget mt=	ac.getBean("Mytarget",MyTarget.class);
			mt.fun();
	}
}

class MyTarget {
	public void fun() {
		System.out.println("fun ...");
	}
}

//
class MyAspect {
	//前
	public void before(JoinPoint jp) {

		System.out.println("aspect ... before1... ");

		System.out.println(jp.getSignature().getName());

		System.out.println("aspect ... before... ");
	}

	public void after() {
		System.out.println("aspect ... after ... ");
	}

	// 环绕切割
	public void around() {
		try {

		} catch (Throwable e) {
			e.printStackTrace();
		}
	}
}