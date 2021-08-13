# 打开文件test.txt  
# a+ 在末尾追加内容
import keyword;
import module1;

# ---------------------------------------------------------- 20210813 start 

# *****************文件读写 *************************
file = open("module1.py","r",encoding='utf-8');
print(file.readlines());
# file.write(""); # 写文件 需要通过文件打开方式  a 是追加 w 重写 r只读

file.close();


# *****************模块 *************************
# module1.fn();

# 模块安装 
    # pip install  模块名

# ---------------------------------------------------------- 20210811 start 

# *****************类和对象 *************************
# class Student:
#     # 属性
#     name = "张三";
#     age = 18;
#     # 实例方法
#     def fn1(self):
#         print("实例方法 fn1");
#     #静态方法
#     @staticmethod
#     def statidfn():
#         print("静态方法 statiscFn");
#     # 类方法
#     @classmethod
#     def classfn(cls):
#         print("我是类方法");

#     def _init_(self,name,age):
#         self.name = name;
#         self.age = age;


# stu = Student();
# print(stu.name);
# stu.fn1();
    
# *****************函数 *************************

# 函数默认值参数 b
# def fun2(a,b=10):
#     return a,b;

# 函数可以返回多个参数，参数类型为 元组
# def fun1():
#     a = [1,2,3,4,5];
#     b = [7,8,9,0,1];
#     return a,b;

# def fn(a,b):
#     return a+b;

# print(fn(2,5));
# print(fn(b=20,a=10));  # √ 

# print(fun1()); 


# ---------------------------------------------------------- 20210809 start 

# *****************字符串常用操作*************************
# s = "hello,world";
# print(s.split(","));

# # 格式化字符串
# # %
# print('我是%s,今年%d岁。' % ("张三",20));
# # {}
# print("我是{0},今年{1}岁。 --- {0}".format("张三",20))
# # {name}
# name = "张三"
# print(f"我是{name}, --- {name}")


# *****************集合*************************
# s = set(range(10));
# s1={2,3,5,6,7,7,89}; # 直接去重
# print(s,">>>",s1); 

# print(set("python"));


# *****************集合 关系*************************
# s2 = {10,20,30,40};
# s3 = {20,30,40,50};
# print(s2 & s3); # 求交集
# print(s2 | s3); # 求并集
# print(s2 - s3)# 求差集  s1不同于啥的部分
# print(s2 ^ s3)# 求对称差集  s1不同于啥的部分

# *****************集合 操作*************************
# set1 = set("python");

# # 判断
# print("n" in set1);
# print("m" not in set1);

# # 新增
# set1.add("m");
# set1.update({"q","w"}); #集合
# set1.update(["1","2"]); #列表
# set1.update(("3","5")); # 元组
# print(set1);

# # 删除
# set1.remove("2");
# set1.discard("2"); # 不会抛异常
# set1.pop(); # 删除任意一元素   -- 随机 不需要参数
# set1.clear(); # 清空
# print(set1);




# *****************元组 tuple*************************
# t = ("java","python",90) ; 
# t1= ("java",); # 单元组也需要加   , 不加就是字符串
# t3 = "java","python",90 ; # 括号可省略
# print(t);
# print(t[0]);
# t2 = tuple(("java","namess"))

# *****************元组遍历*************************
# print(t[0]);

# for item in t :
#     print(item);


# *****************字典*************************
# dct = {"name": "张三","age":18}; # 字典定义 其实就是对象

# **************字典生成式**********************
# lst1 = ["name","age","sex"];
# lst2 = ["张三",18,"male"];

# d = { item:price for item,price in zip(lst1,lst2) };
# print(d);

# **************字典遍历**********************
# for item in dct:
#     print(item,">>>>" ,dct[item]);


# ****************常用操作一*************************************
# print(dct["name"]);
# print(dct.get("age"));

# print(dct.get("age",99));   # 打印age不存在提供默认值
# print(dct.get("sex","male")); 

# *******************字典键的判断*************************

# print("age" in dct);
# print("age" not in dct );

# del dct["name"]; # 删除键
# dct.clear(); # 清空

# dct["sex"] = "male"; # 新增 
# print(dct);

# *******************获取字典键*****************************
# print(dct.keys(),type(dct.keys()));  
# print(list(dct.keys()));# 所有键转成list

# print(dct.keys(),type(dct.values()));  
# print(list(dct.values()));# 所有键转成list

# # 元组
# print(dct.items());
# print(list(dct.items())); # 列表元组类型
# ---------------------------------------------------------- 20210809 end 


# ---------------------------------------------------------- 20210805 start 


# ******************序列生成式****************************************
# lst = [i for i in range(1,10)];
# print(lst);

# ******************列表排序****************************************
# lst = [2,5,7,1,56,32,1324]
# print(lst);

# lst.sort(); # 原列表操作
# print(lst);

# lst.sort(reverse=True);
# print(lst);

# new_List = sorted(lst); # 产生新对象
# print(new_List);
# new_List = sorted(lst,reverse=True);
# print(new_List);
# ******************列表基本操作****************************************
# lst = ["hello","world",True,98,"a","b"]
# print(lst);
# # print(lst.index("hello")); # 获取索引
# # print(lst[0])

# # 切片 list[start, stop, step]
# print(lst[1:4:2]) # 切片
# print(lst[5:0:-1]) # 倒着切 

# # 是否存在
# print("hello" in lst);
# print("c" in lst);
# print("hello" not in lst);
# print("c" not in lst);

# # 遍历
# for item in lst:
#     print(item);

# 添加的几种方式
# lst.append("c");
# lst.extend(["e","f"])
# lst.insert(1,100); # 插入
# print(lst);
# lst[1:]=["g","h"]  # 1以后的替换
# print(lst);


# 删除操作
# lst.remove("a"); # 移除第一个a
# lst.pop(1); # 按照索引移除
# lst[1:3] = [];
# lst.clear(); # 清空
# print(lst);     
# del lst;  # 删除列表


# 修改列表
# lst[2] = 100;  # 单个值修改
# lst[1:3] = [300,500,800,1000]; # 批量修改
# print(lst);


# ******************九九乘法表****************************************
# a=1;
# while a<10:
#     for i in range(1,a+1):
#        print(i,"*",a,"=",i*a,end="\t");
#     print(); 
#     a+=1;

# ******************循环结构****************************************

# for in 循环
# for item in "我是循环的字符串" :
#     print(item);
#     if item == "的":
#         break;

# while 循环
# a = 0;
# while a<10:
#     a+=1;
#     print(a);
# print(a);





# ---------------------------------------------------------- 20210805 end 

# ---------------------------------------------------------- 20210804 start 

# ***************程序结构***********************
# 顺序结构，选择结构，循环结构


# **************range() 函数*****************************************

# range(10)  返回的是 迭代器对象
# print(list(range(10))); # 结束为10 步长 1
# print(list(range(1,10))); # 开始1 结束10 步长1
# print(list(range(1,10,2))); # 开始1 结束10 步长2

# ****************pass 语句*******************************
# 什么都不做 占位符 
# an = input("输入y/n");
# if an == "y":
#     pass; # 代码待定
# else:
#     pass;

# *************条件语句****************************************
# money = 1000;
# m = int(input("输入取款金额"));
# if m <= money :
#     print("小于等于1000");
# elif m> money and m <10000:
#     print("大于1000，小于10000");
# else:
#     print("大于100000");

# 条件表达式
# m = int(input("输入取款金额"));
# print("小于等于1000" if m<=1000 else "大于1000")

# **************运算符优先级******************
# 算数运算（幂运算》乘除》加减） 》 位运算（左右移动》&》|） 》 比较运算  》 布尔运算 》 赋值运算 

# **************位运算符 **************

# 位与&，位与|，右移>>, 左移<<
# print(4&8) # 0
# print(4|8) # 12
# print(4<<4);


# **************比较运算符 **************

# 布尔运算符  and， or， not， in ，not in
# f1 = False;
# print(not f1);

# s1 = "hello world";
# print("w" in s1);
# print("w" not in s1);

# **************比较运算符 **************

# 比较运算符的结果是  布尔类型
# >, <, !=, >=, <=, ==, is, is not 
# ==  比较的是两个值  
# is 比较的是两个标识 id
# arr1=[1,2,3,4];
# arr2=[1,2,3,4];
# print(id(arr1),id(arr2));
# print(arr1== arr2); # True
# print(arr1 is arr2); #False


# **************运算符执行顺序 **************

# a = 12;
# print(a,id(a)); # 获取a的内存地址
# a,b,c = 20,30,40;
# print("交换前a,b,c>>>>",a,b,c);  # 解包赋值
# print("交换很牛逼啊");
# a,b=b,a
# print("交换后a,b,c>>>>",a,b,c);


# ***********运算符 *********************

# print("取整运算>>>>>>11//2 = ",11//2); # 5  取整运算
# print("取余运算>>>>>>11%2 = ",11%2); # 1  取余运算
# print("取余运算>>>>>>11**2 = ",11**2); # 121  幂运算

# print("取余运算>>>>>>9//-2 = ",9//-2); # -5  取余运算 向下取整
# print("取余运算>>>>>>-9//2 = ",-9//2); # -5  取余运算 向下取整

# print("除法公式 >>>>>","余数=被除数-除数*商");
# print("9%-4=",9%-4);
# print("-9%4=",-9%4);

# 输入函数
#con = input("你想要什么礼物呢？");
#print("礼物是",con);





# *********************数据类型转换函数

# str()  int() float()


# ----------------------------------------------------- 20210804 end  


# keyword.kwlist

# ***************文件存储 末尾追加
# fp = open("D:/test.txt","a+")  
# print("hello world", file = fp)
# fp.close()

# ********************布尔类型
# 三个引号 多行注释
"""f2 = True; # 声明变量
f1 = False; # 声明变量 布尔类型
print(f2);
print(f2,type(f2))
print(f2+1);
"""
