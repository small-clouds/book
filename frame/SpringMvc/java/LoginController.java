package com.zrgk.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

/**
 * 控制器
 * @author Administrator
 *
 */
public class LoginController implements Controller{

	@Override
	public ModelAndView handleRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String name =request.getParameter("loginname");
		String pwd =request.getParameter("password");
		System.out.println(name + "\t" +pwd);
		
		ModelAndView mav = new ModelAndView();
		
		request.setAttribute("username", name);
		mav.setViewName("index.jsp");
		return mav;
	}

}

















