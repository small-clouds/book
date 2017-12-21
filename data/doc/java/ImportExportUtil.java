package com.zrgk.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;


public class ImportExportUtil {

	/**
	 * 导入Excel文件
	 * @param request		请求对象
	 * @param clazz			导入类型
	 * @return 				导入对象的集合
	 * @throws Exception
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static List importFile(HttpServletRequest request,Class clazz) throws Exception {
		String xlsPath = uploadFile(request);
		
		List result = new ArrayList();
		
		// 根据指定的文件输入流导入Excel从而产生Workbook对象
		FileInputStream fileIn = new FileInputStream(xlsPath);
		Workbook wb = new HSSFWorkbook(fileIn);
		
		// 获取Excel文档中的第一个表单
		Sheet sht = wb.getSheetAt(0);
		
		// 对Sheet中的每一行进行迭代
		for (Row r : sht) {
			// 如果当前行的行号（从0开始）未达到2（第三行）则从新循环
			if (r.getRowNum() < 1) {
				continue;
			}
			Object object = clazz.newInstance();
			//获取属性集合
			Field[] f = clazz.getDeclaredFields();
			
			//获取方法集合
			Method[] m = clazz.getDeclaredMethods();
			
			//定义存放set方法的集合幷把setXXX方法存入集合中
			List<Method> lm = new ArrayList<Method>();
			for (int i = 0; i < m.length; i++) {
				if (m[i].getName().contains("set")) {
					lm.add(m[i]);
				}
			}
			for (int i = 0; i < f.length; i++) {
				for (int j = 0; j < lm.size(); j++) {
					Field field = f[i];
					Method method = lm.get(j);
					
					// 属性名首字母大写
					String methodName = field.getName().substring(0, 1).toUpperCase()
										+ field.getName().substring(1);
					// 判断属性的对应set方法
					if (method.getName().contains(methodName)) {
						
						// 通过set方法为属性赋值
						method.invoke(object,r.getCell(i) == null ? "" : r.getCell(i).getStringCellValue());
					}
				}
			}
			result.add(object);
		}
		fileIn.close();
		return result;
	}

	/**
	 * 导出Excel文件
	 * 注意： 表头信息与类中属性排列顺序要一致
	 * 
	 * @param request 		请求对象
	 * @param response		响应对象
	 * @param fileName		文件名
	 * @param headers		表头信息
	 * @param list			导出数据的集合
	 * @param clazz			导出数据的类型
	 */
	@SuppressWarnings({ "deprecation", "rawtypes" })
	public static void exportFile(HttpServletRequest request,HttpServletResponse response,
		String fileName, String[] headers,List list, Class clazz) {
		try {
			
			// 生成文件名
			String filename = fileName;
			
			// 生成路径
			String filepath = "C:/";

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
				
				//获取属性集合
				Field[] f = clazz.getDeclaredFields();
				
				//获取方法集合
				Method[] m = clazz.getDeclaredMethods();
				
				//定义存放get方法的集合幷把getXXX方法存入集合中
				List<Method> lm = new ArrayList<Method>();
				for (int j = 0; j < m.length; j++) {
					if (m[j].getName().contains("get")) {
						lm.add(m[j]);
					}
				}
				
				for (int j = 0; j < f.length; j++) {
					for (int k = 0; k < lm.size(); k++) {
						Field field = f[j];
						Method method = lm.get(k);
						
						// 属性名首字母大写
						String methodName = field.getName().substring(0, 1).toUpperCase()
											+ field.getName().substring(1);
						
						// 判断属性的对应get方法
						if (method.getName().contains(methodName)) {
							
							// 获取get方法的返回值
							String str;
							try {
								str = (String) method.invoke(list.get(i));
								// 填充数据
								row.createCell(j).setCellValue(str);
							} catch (InvocationTargetException e) {
								continue;
							}
						}
					}
				}
			}

			// 定义文件流
			FileOutputStream os = new FileOutputStream(filepath + filename);
			wb.write(os);
			os.close();

			// 客户端导出 设置响应头类型
			response.setContentType(request.getSession().getServletContext()
					.getMimeType(filename));
			
			// 判断浏览器IE,火狐
			String ages = request.getHeader("user-agent");
			if (ages.contains("MSIE")) {
				filename = new String(filename.getBytes(), "iso-8859-1");
			} else {
				filename = new String(filename.getBytes(), "iso-8859-1");
			}

			// 设置响应头下载附件格式
			response.setHeader("Content-Disposition", "attachment;filename="
					+ filename);
			
			// 完成下载 先读取然后再写
			InputStream in = new FileInputStream(new File(filepath + fileName));
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
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 文件上传
	 * @param request		请求对象
	 * @return 				文件上传后在服务器上的地址
	 */
	public static String uploadFile(HttpServletRequest request){
		// 获取输入流
		InputStream is = null;
		// 定义输出流
		OutputStream os = null;
		// 文件上传后的路径
		String xlsPath = null;
		try {
			// 将页面数据包 取出来
			MultipartHttpServletRequest req = (MultipartHttpServletRequest) request;

			// 获取我的文件
			MultipartFile mf = req.getFile("fileInput");
			is = mf.getInputStream();
			
			// 获取服务器上传到的文件的地址
			String folderPath = request.getSession().getServletContext()
					.getRealPath("/upload");
			xlsPath = folderPath + "/" + new Date().getTime() 
					+ mf.getOriginalFilename().substring(mf.getOriginalFilename().lastIndexOf("."));
			// 定义输出流
			os = new FileOutputStream(xlsPath);
			// 写入
			int len = 0;
			byte[] b = new byte[1024];
			while ((len = is.read(b)) > 0) {
				os.write(b, 0, len);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			// 关闭资源
			try {
				if (is != null) {
					is.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			try {
				if (os != null) {
					os.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return xlsPath;
	}
}
