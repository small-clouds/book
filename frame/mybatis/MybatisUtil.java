package com.cloud.util;

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;



public class MybatisUtil {
	
	
	private static SqlSessionFactory factory;
	private static SqlSession session;
	
	static{
		Reader reader;
		try {
			reader = Resources.getResourceAsReader("configuration.xml");
			factory = new SqlSessionFactoryBuilder().build(reader);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static SqlSessionFactory getFactory(){
		return factory;
	}
	
	public static SqlSession getSession(){
		if(session==null){
			session = factory.openSession();
		}
		return session;
	}
	
}

