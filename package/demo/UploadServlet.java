package com.cloud.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class UploadServlet extends HttpServlet {

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
		// 解决中文乱码
		request.setCharacterEncoding("utf-8");
		// 准备处理 数据流 工具对象
		// 1、硬盘文件项目工厂
		DiskFileItemFactory dfif = new DiskFileItemFactory();
		// 设置工厂的缓冲区的大小，当上传的文件大小超过缓冲区的大小时，就会生成一个临时文件存放到指定的临时目录当中。
		// dfif.setSizeThreshold(1024 * 100);//
		// 设置缓冲区的大小为100KB，如果不指定，那么缓冲区的大小默认是10KB
		// 2、文件上传对象 将工厂对象装入上传文件
		ServletFileUpload sfu = new ServletFileUpload(dfif);
		// 设置上传单个文件的大小的最大值，目前是设置为1024*1024字节，也就是1MB
		// sfu.setFileSizeMax(1024 * 1024);
		try {
			// 3、文件上传对象 解析 request
			List list = sfu.parseRequest(request);
			for (int i = 0; i < list.size(); i++) {
				// 5、通过下标取页面表单中的 每一个元素对象
				FileItem fi = (FileItem) list.get(i);
				// 6、是不是一个文本域对象 不是一个文件对象
				if (fi.isFormField()) {
					//文本域
					if ("username".equals(fi.getFieldName())) {  //文本域的name属性
						System.out.println(fi.getString("utf-8")); // 文本域的value  ，需要名字进行转码
						System.out.println(new String(fi.getString().getBytes("iso-8859-1"),"UTF-8")); //两种方式都行
					}else if("pwd".equals(fi.getFieldName())){
						System.out.println("密码是"+fi.getString());
					}
				}else{
					// 文件域
					// 获取上传文件名称
					String path = fi.getName();
					String fileName = path.substring(path.lastIndexOf("\\") + 1);//低版本浏览器绝对路径的处理
					System.out.println(fileName); // 获取文件名
					// 上传文件 所存储的路径 要拿那个文件夹的绝对路径
					String allPath = this.getServletContext().getRealPath("\\load");
					UUID uuid = UUID.randomUUID();
					String str = uuid.toString().replace("-", "");
					// 根据路径和文件名 创建一个文件对象 "\\" \转义字符 文件所在文件夹的绝对路径+所拿文件名
					File file = new File(allPath + "\\" + str + fileName);
					// 把上传的数据 写到这个 指定文件的对象上
					fi.write(file);
				}
			}
		} catch (FileUploadException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
