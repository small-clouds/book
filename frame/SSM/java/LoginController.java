package com.zrgk.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import com.zrgk.bean.Users;
import com.zrgk.service.UsersService;

public class LoginController implements Controller {
	ModelAndView mav =new ModelAndView();
	private UsersService us;  //配置写的us 会自动装配进去app.xml
	public UsersService getUs() {
		return us;
	}
	public void setUs(UsersService us) {
		this.us = us;
	}
	/* (non-Javadoc)
	 * @see org.springframework.web.servlet.mvc.Controller#handleRequest(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		
		String name = request.getParameter("id");
		String password = request.getParameter("password");
		Users users = new Users();
		users.setId(Integer.parseInt(name));
		users.setPassword(password);
		
		Users u = us.login(users);
		
		if(u!=null){
			mav.addObject("users",u);
			mav.setViewName("index.jsp");
		}else{
			mav.setViewName("login.jsp");
		}
		
		return mav;
	}

}
