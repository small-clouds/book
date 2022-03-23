package com.oams.web.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRichTextString;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;

import com.oams.bean.Log;
import com.oams.service.LogServiceImpl_c;
import com.oams.service.LogService_c;

public class demo01 extends HttpServlet {
	LogService_c ls = new LogServiceImpl_c();
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
				doPost(request, response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String method = request.getParameter("method");
	 if("exportExcel".equals(method)){
			exportExcel(request, response);
		}
	}
	/**
	 * 导出
	 */
	public void exportExcel(HttpServletRequest request,
			HttpServletResponse response) {
		try {
			String ids = request.getParameter("ids");
			List<Log> list = ls.findLogsByIds(ids);  // 获取数据
			// 文件名称
			String filename = "操作日志.xls";
			// 生成路径
			String filepath = "C:/";
			// 表头
			String[] headers = { "用户名称", "角色", "事件", "操作时间" };

			// 创建excel表格
			HSSFWorkbook wb = new HSSFWorkbook();
			// 创建工作簿
			HSSFSheet sheet = wb.createSheet(filename);
			// 设置表格默认列宽度为15个字节
			sheet.setDefaultColumnWidth((short) 15);
			// 生成一个样式
			HSSFCellStyle style = wb.createCellStyle();

			// 设置这些样式
			style.setFillForegroundColor(HSSFColor.SKY_BLUE.index);
			style.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
			style.setBorderBottom(HSSFCellStyle.BORDER_THIN);
			style.setBorderLeft(HSSFCellStyle.BORDER_THIN);
			style.setBorderRight(HSSFCellStyle.BORDER_THIN);
			style.setBorderTop(HSSFCellStyle.BORDER_THIN);
			style.setAlignment(HSSFCellStyle.ALIGN_CENTER);
			// 生成一个字体
			HSSFFont font = wb.createFont();
			font.setColor(HSSFColor.VIOLET.index);
			font.setFontHeightInPoints((short) 12);
			font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
			// 把字体应用到当前的样式
			style.setFont(font);

			// 产生表格标题行
			HSSFRow row = sheet.createRow(0);
			for (short i = 0; i < headers.length; i++) {
				HSSFCell cell = row.createCell(i);
				cell.setCellStyle(style);
				HSSFRichTextString text = new HSSFRichTextString(headers[i]);
				cell.setCellValue(text);
			}
			// 产生数据
			for (int i = 0; i < list.size(); i++) {
				row = sheet.createRow(i + 1);
				row.createCell(0).setCellValue(list.get(i).getUsername());
				row.createCell(1).setCellValue(list.get(i).getRolename());
				row.createCell(2).setCellValue(list.get(i).getEvent());
				row.createCell(3).setCellValue(list.get(i).getUpdatetime());
			}

			// 定义文件流
			FileOutputStream os = new FileOutputStream(filepath + filename);

			wb.write(os);
			os.close();

			// 客户端导出 设置响应头类型
			// 文件名称
			
			response.setContentType(this.getServletContext().getMimeType(filename));
			// 判断浏览器IE,火狐
			String ages = request.getHeader("user-agent");
			System.out.println(request.getRemoteHost() + "---->" + ages);
			if (ages.contains("MSIE")) {
				filename = new String(filename.getBytes(),"iso-8859-1");  //解决中文乱码
			} else {
				filename = new String(filename.getBytes(),"iso-8859-1");
			}

			// 设置响应头下载附件格式
			String filename1 = "操作日志.xls";
			response.setHeader("Content-Disposition", "attachment;filename=" + filename);
			// 完成下载 先读取然后再写
			InputStream in = new FileInputStream(new File(filepath + filename1));
			OutputStream out = response.getOutputStream();

			byte b[] = new byte[1024 * 5];
			while ((in.read(b)) != -1) {
				out.write(b);
			}
			out.flush();
			out.close();
			in.close();
			File file = new File(filepath + filename);
			file.delete();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
