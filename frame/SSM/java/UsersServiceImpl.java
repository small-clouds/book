package com.zrgk.service;

import com.zrgk.bean.Users;
import com.zrgk.mapper.UsersMapper;

public class UsersServiceImpl implements UsersService {
	private UsersMapper UsersMapper; // 这里只能是接口的名称
	public UsersMapper getUsersMapper() {
		return UsersMapper;
	}
	public void setUsersMapper(UsersMapper usersMapper) {
		UsersMapper = usersMapper;
	}


	public Users login(Users u) {
		return UsersMapper.login(u);
	}
}
