package com.cloud.test01;
// 关于Users的测试文件
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import com.cloud.bean.Users;
import com.cloud.util.MybatisUtil;

public class TestUsers {
	SqlSession ss =MybatisUtil.getSession();
	//查询
	public void query() {
		try {
			// 加载mybatis的核心配置文件
			Reader reader = Resources.getResourceAsReader("configuration.xml");
			// 创建sqlSessionFactory对象
			SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(reader);
			// 打开SQLSession
			SqlSession session = factory.openSession();
			Users u = session.selectOne("findUserById", "1");
			System.out.println(u.getLoginname());
			session.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	// 封装的方法
	public void Main00(){
		SqlSession ss =MybatisUtil.getSession();
			Users u = ss.selectOne("findUserById", "2");
			System.out.println(u.getLoginname());
			ss.close();
	}
	//查询所有用户
	public void Main01(){
		SqlSession ss =MybatisUtil.getSession();
		List<Users> list = ss.selectList("findUserAll");
		for (Users u : list) {
			System.out.println(u.getId()+"\t"+u.getLoginname());
		}
		ss.close();
	}
	//添加用户
	@Test
	public void Main02(){
		SqlSession ss =MybatisUtil.getSession();
		Users u = new Users();
		u.setLoginname("zhaoliu");
		u.setPassword("123456");
		u.setUser_name("赵六");
		u.setDeluser_state("0");
		u.setRoleid("5");
		u.setUser_age("20");
		u.setUser_idcard("12345678");
		u.setUser_image("1111");
		u.setUser_phone("1234567");
		u.setUser_sex("1");
		u.setUser_state("0");
		ss.insert("addUser", u);
		ss.commit();
		ss.close();
	}
	//更新用户信息  动态修改用户
	public void Main03(){
		SqlSession ss =MybatisUtil.getSession();
		Users u = new Users();
		u.setId("15");
		u.setLoginname("zhaoliu");
		u.setPassword("123456");
		u.setUser_name("赵六");
		u.setDeluser_state("1");
		u.setRoleid("7");
		u.setUser_age("12");
		u.setUser_idcard("123456789012345678");
//		u.setUser_image("");
		u.setUser_phone("123456789");
		u.setUser_sex("1");
		u.setUser_state("1");
		ss.update("updateUser", u);
		ss.commit();
		ss.close();
	}
	//带条件查询 包括模糊查询 和分类查询 可以选取任意条件进行查询
	public void Main04(){
		SqlSession ss =MybatisUtil.getSession();
		Users u = new Users();
		//u.setLoginname("a");
		u.setUser_sex("0");
		List<Users> list = ss.selectList("findUserAll1", u);
		System.out.println("id\tloginname\tpassword\troleid\tage\tname\tsex\tstate");
		for (Users u1 : list) {
			System.out.println(u1.getId()+"\t"+u1.getLoginname()+"\t"+u1.getPassword()+"\t"+u1.getRoleid()+"\t"+u1.getUser_age()+"\t"+u1.getUser_name()+"\t"+u1.getUser_sex()+"\t"+u1.getUser_state());
		}
	}
	// 带分页 条件 的 模糊查询  并不是分页  分页还需要查询总条数
	@Test
	public void Main05(){
		SqlSession ss =MybatisUtil.getSession();
		Map<String, Object> m = new HashMap<String, Object>();
		Users u = new Users();
		u.setLoginname("a");
		m.put("u", u);
		m.put("begin", 0);
		m.put("count", 5);
		List<Users> list = ss.selectList("findUserAll2", m);
		System.out.println("id\tloginname\tpassword\troleid\tage\tname\tsex\tstate");
		for (Users u1 : list) {
			System.out.println(u1.getId()+"\t"+u1.getLoginname()+"\t"+u1.getPassword()+"\t"+u1.getRoleid()+"\t"+u1.getUser_age()+"\t"+u1.getUser_name()+"\t"+u1.getUser_sex()+"\t"+u1.getUser_state());
		}
	}
	//List 批量真删除
	@Test
	public void Main06(){
		SqlSession ss =MybatisUtil.getSession();
		List<String> list = new ArrayList<String>();
		list.add("15");
		list.add("19");
		list.add("20");
		ss.delete("deleteList", list);
		ss.commit();
		ss.close();
	}
	//数组真删除
	@Test
	public void Main07(){
		SqlSession ss =MybatisUtil.getSession();
		int[] arr ={15,19,20};
		ss.delete("deleteArray", arr);
		ss.commit();
		ss.close();
	}
	// map类型的新增
	@Test
	public void Main08(){SqlSession ss =MybatisUtil.getSession();
		Map<String,Object> m = new HashMap<String,Object>();
		m.put("loginname", "tianqi");
		m.put("password", "123456");
		m.put("user_name", "田七");
		m.put("user_idcard", "123456789");
		m.put("user_age", "18");
		m.put("user_phone", "987654321");
		m.put("user_sex", "1");
		m.put("roleid", "3");
		//m.put("user_image", ""); // 可以为空
		m.put("user_state", "0");
		m.put("deluser_state", "1");
		ss.insert("addUserMap", m);
		ss.commit();
		ss.close();
	}
	// 获取模糊查询的总条数
	@Test
	public void Main09(){
		SqlSession ss =MybatisUtil.getSession();
		Users u = new Users();
		//u.setLoginname("a");
		int count =ss.selectOne("getTotalCount",u);
		ss.close();
		System.out.println(count);
	}
	//二次查询   一对一
	@Test
	public void Main10(){
		Users u = new Users();
		u.setId("1");
		Users u1 =ss.selectOne("selectUsersRoleByUsers",u);
		ss.close();
		System.out.println(u1.getRole().getRole_name());
	}
	// 两表联查 一对一
	@Test
	public void Main11(){
		Users u = new Users();
		u.setId("1");
		Users u1 =ss.selectOne("selectUsersRoleWithUser",u);
		ss.close();
		System.out.println(u1.getId()+"\t"+u1.getLoginname() +"\t"+u1.getRoleid()+"\t"+ u1.getRole().getRole_name()+"\t"+u1.getRole().getRole_remark());
	}
	//一对多 角色对应多个菜单
	@Test
	public void Main12(){
		
	}
	public void Main13(){}
	public void Main14(){}
	public void Main15(){}
}
