package com.zrgk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zrgk.bean.Users;
import com.zrgk.mapper.UsersMapper;
@Service
public class UsersServiceImpl_c implements UsersService_c {
	@Autowired // 自动装配UsersMapper
	public UsersMapper UsersMapper;

	public Users login(Users u) {
		return UsersMapper.login(u);
	}

}
