package com.zrgk.mapper;

import com.zrgk.bean.Users;

public interface UsersMapper {
	public Users login(Users u) ; //没有实现类 会去UsersMapper.xml找 id为login的语句
	//sqlSessionFactory已经被mybatis创建好了
}
