package com.zrgk.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

@Controller
//@RequestMapping("login9.do") //按照method去找 
public class LoginController_c {

	// 定位在这里  这个路径不能重复
	@RequestMapping("login.do")  
	//方法名  返回值  参数 都任意
	public ModelAndView login(){
		System.out.println("login.....");
		return null;
	}

 	// 获取前台数据 第一种  这里可以request 和response
	@RequestMapping("login1.do") 
	public void login01(HttpServletRequest request){
		String name = request.getParameter("loginname");
		String pwd = request.getParameter("password");
		System.out.println(name + "\t"+pwd);
		
		request.setAttribute("user", name); //能够携带数据会页面
	}

	// 获取参数不会用的 知道就好最怕面试题
	@RequestMapping("login2.do")  
	public void login02(@RequestParam("loginname") String name,@RequestParam("password") String pwd){
		System.out.println(name + "\t"+pwd);
	}

	 // *******  自动装到User对象里面去  ××××××××××* * * * * * * * * * * * * * * * * * * 
	@RequestMapping("login3.do") 
	public void login03(@ModelAttribute User user){
		System.out.println("login ...");
		System.out.println(user.getLoginname()+"\t"+user.getPassword());
	}


	//返回页面  
	@RequestMapping("login4.do") // 返回值类型为 String
	public String login04(){
		//return "index.jsp"; // 请求转发
		return "redirect:index.jsp"; // 重定向 两次请求
	}


 	//   传递User 不行只能传递公共类
	@RequestMapping("login5.do") 
	public ModelAndView login05(@ModelAttribute Users user){
		ModelAndView mav = new ModelAndView();
		//携带数据
		System.out.println(user.getLoginname()+user.getPassword());
		mav.addObject("user",user);//request.setAttribute("user",user);
		mav.setViewName("index.jsp");
		return mav;
	}
	// 存session 不能和实体类重名
	@RequestMapping("login6.do") 
	public String login06(@ModelAttribute Users user,HttpSession session){
		ModelMap mm = new ModelMap();
		mm.put("user", user);
		session.setAttribute("user", user); // 
		return "index.jsp";
	}


	//异常处理 基本不用 每个controller都需要写一个这样的方法
	public String login07_(){
		int i = 10/0;
		return "index.jsp";
	}
	@ExceptionHandler({ Exception.class}) //异常处理 基本不用 每个controller都需要写一个这样的方法
	//声明式异常不需要进行配置
	public String login07(Exception e){
		//就能够处理上面的除0异常
		return "error.jsp";
	}
	
	//单文件上传  需要倒包   common fileupload  和common io   
	//第二部 配置文件 
	@RequestMapping("upload.do")
	public String upload(HttpServletRequest request) throws IOException{
		//将页面数据包 取出来
				MultipartHttpServletRequest req = (MultipartHttpServletRequest) request;
				
				//获取我的文件
				MultipartFile mf = req.getFile("myfile");
				//打印文件相关信息
				System.out.println(mf.getName());
				System.out.println(mf.getOriginalFilename());
				System.out.println(mf.getSize());

				//获取输入流
				InputStream is = mf.getInputStream();
				//获取服务器上传到的文件的地址
				String folderPath = request.getSession().getServletContext().getRealPath("/upload");
				//定义输出流
				OutputStream os = new FileOutputStream(folderPath + "/" +new Date().getTime()+ mf.getOriginalFilename());
				//写入
				int len = 0;
				byte[] b = new byte[1024];
				while ((len = is.read(b)) > 0) {
					os.write(b, 0, len);
				}
				//关闭资源
				is.close();
				os.close();

				return "index.jsp";
	}
	//多文件上传
	@RequestMapping("uploads.do")
	public String uploads(HttpServletRequest request) throws IOException{
		MultipartHttpServletRequest req = (MultipartHttpServletRequest) request;
		List<MultipartFile> list = req.getFiles("myfile");  //files s s
		String folderPath = request.getSession().getServletContext().getRealPath("/upload");
		for (MultipartFile mf : list) {
			if (!mf.isEmpty()) {
				OutputStream os = new FileOutputStream(folderPath + "/" +new Date().getTime()+ mf.getOriginalFilename());
				InputStream is = mf.getInputStream();
				byte[] b = new byte[1024];
				int len = 0;
				while ((len = is.read(b)) > 0) {
					os.write(b, 0, len);
				}
				is.close();
				os.close();
				System.out.println(mf.getName());
				System.out.println(mf.getOriginalFilename());
			}
		}
		return "index.jsp";
	}
	// JSON数据类型返回  需要倒包  2个  jackson   注意返回值类型
	@RequestMapping("subTest.do")
	public @ResponseBody List<Users> returnJson(HttpServletRequest request){
		Users u1 = new Users();
		u1.setLoginname("zhangsan");
		u1.setPassword("z1");
		Users u2 = new Users();
		u2.setLoginname("lisi");
		u2.setPassword("l1");
		Users u3 = new Users();
		u3.setLoginname("wangwu");
		u3.setPassword("w1");
		
		List<Users> list = new ArrayList<Users>();
		list.add(u1);
		list.add(u2);
		list.add(u3);
		return list;
	}
	//返回对象集合
	public ModelAndView login08(){
		ModelAndView mav = new ModelAndView();

		Users u1 = new Users();
		u1.setLoginname("zhangsan");
		u1.setPassword("z1");
		Users u2 = new Users();
		u2.setLoginname("lisi");
		u2.setPassword("l1");
		Users u3 = new Users();
		u3.setLoginname("wangwu");
		u3.setPassword("w1");
		
		List<Users> list = new ArrayList<Users>();
		list.add(u1);
		list.add(u2);
		list.add(u3);
		// 携带数据
		mav.addObject("list", list);// request.setAttribute("user",user);

		// 设置返回视图
		mav.setViewName("index2.jsp");// 请求转发的形式
		return mav;
	}
	//按照参数找方法  需要在类上面定义路径
	@RequestMapping(params="method=add")
	public void add(){
		System.out.println("login9...add...");
	}
}

class User{
	private String loginname;
	private String password;
	public String getLoginname() {
		return loginname;
	}
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User() {
		super();
	}
}
