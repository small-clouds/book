package com.zrgk.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.zrgk.bean.Users;
import com.zrgk.service.UsersService_c;

@Controller
@SessionAttributes("user")
public class LoginController_c {
	@Autowired 
	//自动装配
	public UsersService_c us;
	public UsersService_c getUs() {
		return us;
	}
	public void setUs(UsersService_c us) {
		this.us = us;
	}


	@RequestMapping("login.do")
	public String login(@ModelAttribute Users users,ModelMap mm) {
		Users u =us.login(users);
		mm.put("user", u);
		if(u!=null){
			return "index.jsp";
		}else{
			return "login.jsp";
		}
	}
}
