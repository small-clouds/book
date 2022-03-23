package com.cloud.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DownloadServlet extends HttpServlet {

	/**
	 *
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * 
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String method = request.getParameter("method");
		if ("download".equals(method)) {
			download(request, response);
		}
	}
	
	public void download(HttpServletRequest request, HttpServletResponse response){
		String fileName=request.getParameter("fileName"); // 获取文件名
		ServletContext sc = this.getServletContext(); // 获取上下文对象
		String path= sc.getRealPath("load")+"/"+fileName; // 获取文件绝对路径
		response.addHeader("Content-Disposition", "attachment; filename="+fileName); // 响应头第三方
		
		File file = new File(path);
		InputStream is=null;
		OutputStream os =null;
		try {
			 is = new FileInputStream(file);
			 os = new FileOutputStream(file);
			 int len = 0;
			 byte[] b = new byte[1024];
			 while ((len=is.read(b))!= -1) {
				os.write(b);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				os.close();
				is.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
		
	}
	
}
















