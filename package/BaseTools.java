package com.java.util;
//Math.random()*(end - begin + 1) + begin   获取指定的的随机数
public class BaseTools {
	//date.getTime(); 时间转时间戳
	//Date d = new Date(l);//时间戳转时间
	//"2017-10-18 20:18:15"; "yyyy-MM-dd HH:mm:ss";  字符串转时间戳
	public String bt_sdl(String ds,String fmt){
		SimpleDateFormat sdf = new SimpleDateFormat(fmt);
		Long l =null;
		try {
			l=sdf.parse(ds).getTime();
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return l.toString();
	}
	//"1513000596405"; "yyyy-MM-dd HH:mm:ss";  时间戳 转字符串
	public String bt_lts(String ds,String fmt) {
		SimpleDateFormat sdf = new SimpleDateFormat(fmt);
		Long l = Long.valueOf(ds);
		Date d = new Date(l);
		return sdf.format(d);
	}
	//"2017-10-18 20:18:15";  "yyyy-MM-dd HH:mm:ss"; 字符串转时间
	public Date bt_std(String ds,String fmt){
		SimpleDateFormat sdf = new SimpleDateFormat(fmt);
		Date d=null;
		try {
			 d=sdf.parse(ds);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return d;
	}
	//dDate "yyyy-MM-dd HH:mm:ss";时间转字符串
	public String bt_dts(Date d,String fmt){
		SimpleDateFormat sdf = new SimpleDateFormat(fmt);
		return sdf.format(d);
	}
}
