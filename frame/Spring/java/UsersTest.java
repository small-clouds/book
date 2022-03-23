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

public class UsersTest {
	//初步测试
	@Test
	public  void main01() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		Users u= ac.getBean("users",Users.class);
		System.out.println(u);
	}
	// 对集合的操作
	@Test
	public void Main02(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		Users u= ac.getBean("users",Users.class);
		List list =u.getList();
		Set set = u.getSet();
		Map<Object,Object> m = u.getMap();
		for (Object l : list) {
			System.out.println(l);
		}
		for (Object s : set) {
			System.out.println(s);
		}
		for (Entry o : m.entrySet()) {
			System.out.println(o.getKey()+"\t"+o.getValue());
		}
	}
	//jdbc测试
	@Test
	public void Main03(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		JdbcTest jt = ac.getBean("db",JdbcTest.class);
		System.out.println(jt.getDriverClass()+"\t"+jt.getUrl()+"\t"+jt.getUsername()+"\t"+jt.getPassword());
	}
	// 自动装配问题 好高大上啊 主要 在service创建了dao层对象的setter getter方法
	@Test
	public void Main04(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		uService ut1 =  ac.getBean("us",uService.class);;
		ut1.login();
	}
	//---------------------------------以上是ioc-----------------------------------------------------------------------------------------------------------
}
class JdbcTest{
	private String driverClass;
	private String url;
	private String username;
	private String password;
	public String getDriverClass() {
		return driverClass;
	}
	public void setDriverClass(String driverClass) {
		this.driverClass = driverClass;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}

class uService{
	uDao ud;  //创建对象 提供setget方法 剩下的交给 spring
	public uDao getUd() {
		return ud;
	}
	public void setUd(uDao ud) {
		this.ud = ud;
	}

	public void login(){
		ud.login();
	}
}
class uDao{
	public void login(){
		System.out.println("login ...");
	}
}