package com.zrgk.test;


import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;


import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.aop.AfterReturningAdvice;
import org.springframework.aop.MethodBeforeAdvice;
import com.zrgk.bean.Users;

public class UsersTest1 {
	//---------------------------------以下是AOP-----------------------------------------------------------------------------------------------------------
	//aop 联盟方式   
	@Test
	public void Main05(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		iTarget t = ac.getBean("targetProxy",iTarget.class);
		t.fun();
	}
}

class Aspect implements MethodBeforeAdvice,AfterReturningAdvice,MethodInterceptor{
	public Object invoke(MethodInvocation arg0) throws Throwable {
		System.out.println("执行过程中");
		return arg0.proceed();
		//return null ;不放行
	}

	@Override
	public void afterReturning(Object arg0, Method arg1, Object[] arg2,
			Object arg3) throws Throwable {
		System.out.println("Aspect after ...");
	}

	@Override
	public void before(Method arg0, Object[] arg1, Object arg2)
			throws Throwable {
		System.out.println("Aspect before ....");
	}
	
}
class Target implements iTarget{
	public void fun() {
		System.out.println("fun .....");
	}
	
}
interface iTarget{
	public void fun();
}