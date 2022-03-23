//基础知识回顾- 开发环境
var demo01 = {
    title: "基础知识回顾- 开发环境",
    name: "基础知识回顾- 开发环境",
    data: [{
        title: "JDK ---java  develop kit开发包",
        data: [
            { context: "包含jre java  环境 " },
            { context: "jre里面包含 jvm 虚拟机" },
            { context: "" },
            { context: " " }
        ]
    }, {
        title: "java优点",
        data: [
            { context: "简单开源" },
            { context: "面向对象" },
            { context: "分布式" },
            { context: " 高性能 /多线程 /健壮安全" },
            { context: " （与系统无关）跨平台性 可移植 解释性" }
        ]
    }, {
        title: "javase",
        data: [
            { context: "java基础  敏捷性特别高" }
        ]
    }, {
        title: "安装",
        data: [
            { context: "安装JDk" },
            { context: "安装完成后会询问是否安装jre 取消即可 <span class='remark'>jdk是包含jre</span>" },
            { context: "傻瓜式安装，一路确定 一路下一步" },
            { context: " 注： <span class='remark'>路径不能有中文，不能有特殊字符</span>" },
            { context: " 验证：在jdk的bin目录下 输入命令javac 出现提示说明安装成功" }
        ]
    }, {
        title: "java环境的配置",
        data: [
            { context: "<span class='remark'>作用：</span>在任何目录下都能使用javac命令，所以需要配置环境变量" },
            { context: "环境变量位置：计算机属性->高级系统设置->高级(选项卡)->环境变量" },
            { context: "变量JAVA_HOME  值(jdk的安装路径): C:\\Program Files\\Java\\jdk1.7.0_09;" },
            { context: "变量PATH  值：%JAVA_HOME%\\bin; 动态获取bin" },
            { context: "变量CLASSPATH 值： ;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;  " }
        ]
    }]
}
//流程控制语句
var demo02 = {
    title: "流程控制语句",
    name: "流程控制语句",
    data: [{
        title: "流程控制语句",
        data: [
            { context: "if() / / if()..else if(){}.... / / if()..else{}" },
            { context: "没啥讲的 就是if条件语句  " },
            { context: "嘿嘿！！！！" }
        ]
    }, {
        title: "三元运算符--三目运算符",
        data: [
            { context: "条件 ？ exp1 ：exp2;" },
            { context: 'System.out.println("该学生的等级为"+ (num5 >= 90 ? "A" : num5 >= 60 ? "B" : "C")); ' }
        ]
    }, {
        title: "switch",
        data: [
            { context: 'key的类型需要说一下 double 和float long不行' },
            { context: 'switch（expr1）中，expr1是一个整数表达式。因此传递给 switch 和 case 语句的参数应该是 int、 short、 char 或者 byte。long,string(1.5以前 以后支持了) 都不能作用于swtich。' },
            { context: '常用 int char String final型的变量(必须是编译时的常量)<span class="remark">case后面必须接常量！！！  </span>' },
            { context: '1.5以前 不能String 还是少用为好 //break case 下坠' },
            { context: 'switch(key){case key: break;}' },
            { context: '' },
        ]
    }, {
        title: "while和 do{}while()",
        data: [
            { context: '内存溢出 == 内存泄漏' },
            { context: '死循环 忘关流了' },
            { context: '循环要写程序出口' },
            { context: '不能写死循环' },
            { context: '循环嵌套 ' },
            { context: '乘方的形式递增' }
        ]
    }, {
        title: "for循环 不能写死循环 看上面",
        data: [
            { context: 'for (int i = 0; i <10; i++) {System.out.println(i); }' },
            { context: '' }
        ]
    }, {
        title: "",
        data: [
            { context: '' },
            { context: '' }
        ]
    }]
}
//基本数据类型
var demo03 = {
    title: "基本数据类型",
    name: "基本数据类型",
    supdata: [
        { context: '注：<span class="remark"> 对于Object超类 只能与引用类型相容 不能和基本数据类型相融</span>' },
    ],
    data: [{
        title: "数值型 默认值 0",
        data: [
            { context: 'long--> Long长整型' },
            { context: 'int--> Integer 整型' },
            { context: 'short -->Short 短整型' },
            { context: 'byte-->Byte 字节型' },
        ]
    }, {
        title: "浮点型 默认值0.0",
        data: [
            { context: '单精度float -->Float' },
            { context: '双精度 double-->Double' },
        ]
    }, {
        title: "字符型 默认值 ''",
        data: [
            { context: 'char-->Charset' },
            { context: '注: <span  class="remark">只能用单引号</span>' },
            { context: '注: <span  class="remark">与阿斯科码有关 可以转成int</span>' },
        ]
    }, {
        title: "布尔型",
        data: [
            { context: 'boolean-->Boolean' },
            { context: '两个值 true /false' }
        ]
    },{
        title: "枚举 Enum",
        data: [
            { context: ' public enum ArchivingStatus{ALREADY,  //已归档 UNFILED //未归档} //枚举出所有可能的值 基本数据类型' },
            { context: '1. 枚举值是常量，不是变量。不能在程序中用赋值语句再对它赋值。' },
            { context: ' 还应该说明的是枚举元素不是字符常量也不是字符串常量，使用时不要加单、双引号' },
           
        ]
    }]
}
//运算符
var demo04 = {
    title: "运算符/逻辑运算符/位运算符/标识符/分隔符",
    name: "运算符/逻辑运算符/位运算符/标识符/分隔符",
    data: [
        {
            title: '算术运算符',
            data: [
                { context: '+   _   *   /   %;   ++  --   +=   -+   *=    /+   %=' },
                { context: '注：<span class="remark">算术运算符有优先级问题</span>' },
            ]
        }, {
            title: '逻辑运算符',
            data: [
                { context: '&&与  ||或 !非' },
                { context: '注:<span class="remark">逻辑与 或 前面符合条件将不执行与，或后面的判断</span>' },
                { context: '注:<span class="remark">逻辑与 可以进行逻辑判断  不满足条件时后面的不进行</span>' },
            ]
        }, {
            title: '位运算符',
            data: [
                { context: '// 位运算 6种' },
                { context: '//二进制 逢二进一 （0,1）' },
                { context: '//源码 反码 补码' },
                { context: '//1. 二进制的最高位是 符号位 0表正数 1 表 负数' },
                { context: '//2.正数的 原码 反码 补码 都一样' },
                { context: '//原码 用二进制表示的数 这个数就是源码' },
                { context: '//负数的反码 符号位不变 其余全部取反' },
                { context: '// 负数的补码 为 他的反码 +1' },
                { context: '// 0的反码补码都是0' },
                { context: '// ××××计算机运算时 都是以补码的方式来运算的×××××' },
                { context: '// 按位与& 两位全1 结果为1' },
            ]
        }, {
            title: '标识符 -- 程序员自己能起名字的就是标识符',
            data: [
                { context: '包括：工程名 包名 类名 属性名 方法名' },
                { context: '字母 数字 下划线 $ ' },
                { context: '大小写敏感 长度无限制 ' },
                { context: '数字不能开头' },
                { context: '不能使用Java的关键字 和保留字' },
                { context: '关键字 java语言已经赋予特殊含义的 main class public 所有java 的关i键字 全是小写' },
                { context: '保留字 goto' },
                { context: '注：<span class="remark">见名知意 /驼峰式命名法</span>' },
            ]
        }, {
            title: '分隔符',
            data: [
                { context: '结尾只认-----  ";"' },
            ]
        }
    ]
}
//变量
var demo05 = {
    title: "变量 成员变量 局部变量 常量",
    name: "变量 成员变量 局部变量 常量",
    data: [{
        title: '成员变量',
        data: [
            { context: '在类体中 方法体外所定义的变量 ；成员变量可以在该类的任何方法所引用' },
            { context: '<span class="remark">main 使用成员变量  必须用static 修饰 静态变量</span>' },
            { context: '可以被赋值 不赋值有默认值' },
            { context: '默认值：不被赋值时 0 0.0 ； 字符默认值" " ； 字符串 null ""；' },
        ]
    }, {
        title: '局部变量',
        data: [
            { context: '<span class="remark">局部变量必须被赋值</span>' },
            { context: '在方法体内定义的变量 只能在方法体内使用 方法执行完 销毁' },
            { context: '局部变量的优先级大于成员变量 (就近原则)；' },
        ]
    }, {
        title: '常量 final',
        data: [
            { context: '用final 修饰的变量 为常量 <span class="remark">能修饰属性  方法和类</span>' },
            { context: '<span class="remark">修饰常量时 必须被赋值 且不能被修改</span>' },
            { context: '修饰常量 不能被修改； 修饰方法时 方法不能被重写； 修饰类 不能被继承；' },
        ]
    }]
}
//代码块 静态static 初始化代码块
var demo06 = {
    title: "代码块 静态static 初始化代码块",
    name: "",
    data: [{
        title: '执行顺序',
        data: [
            { context: '静态代码块 static ——》 初始化代码块 {} ——》构造方法' },
        ]
    }, {
        title: ' 静态修饰符static ',
        data: [
            { context: '静态代码块  被static 修饰的 就是静态代码块' },
            { context: '注：<span class="remark">被static修饰的会加入到内存中随时准备被调用</span>' },
            { context: '注：<span class="remark">只能修饰方法和属性  不能修饰类</span>' },
            { context: '对于链接时间较长的  使用比较频繁的才会用static 修饰      例如   数据库连接池  因为加载到内存当中了' },
        ]
    }, {
        title: '初始化代码块',
        data: [
            { context: '初始化变量方式：声明时/构造函数 /代码块' },
        ]
    }]
}
//数组
var demo07 = {
    title: "数组",
    name: "数组-学习集合类之前唯一的能够放置大规模数据的地方",
    data: [{
        title: '数组类型',
        data: [
            { context: '是用来存储相同数据类型的数据 ； 因此数组的类型就是存储的数据的数据类型' },
        ]
    }, {
        title: '数组定义形式',
        data: [
            { context: '第一种: 类型[] 标识符 = new 类型[长度] eg: int[] arr = new int[5];' },
            { context: '第二种: String[] arr ={"a","b","c","d"};' },
            { context: '第三种: double[] arr =new double[]{1.1,1.2,1.3,1.4}' },
        ]
    }, {
        title: '数组的功能 存取',
        data: [
            { context: '存：长度从1开始 下标是数组的编号 下标从0开始 arr[0] =10;' },
            { context: '取：根据下标取值 arr[0] arr[1]] 正序 0 -5' },
        ]
    }, {
        title: '增强for循环',
        data: [
            { context: 'foreach 和for的区别' },
            { context: '注：<span class="remark">for-each 必须知道数组的类型。(万物皆对象)for则不需要</span>' },
            { context: ' for（String s:arr）{System,out.println(s); }' },
        ]
    }, {
        title: '二维数组',
        data: [
            { context: '就是数组里面还是数组' },
            { context: 'int[][]  arr={{1,2,3,4},{5,6,7,8}}' },
            { context: '取值无非就是两层循环' },
        ]
    }]
}
//面向对象
var demo08 = {
    title: "面向对象基础",
    name: "对象",
    data: [{
        title: '对象',
        data: [
            { context: '万物皆对象，使用类的形式 对生活中的对象进 行抽象的描述' },
        ]
    }, {
        title: '创建对象',
        data: [
            { context: '类型 标识符 =new 构造方法();' },
            { context: 'student s1 =new student();' },
            { context: '在栈区生成对象 ----- 堆区开辟空间' },
            { context: '类 是 对象的抽象----对象 是 类的具体' },
        ]
    }, {
        title: '验证对象是否创建成功',
        data: [
            { context: ' s1.toString()---> 打印对象地址 有则创建成功' },
        ]
    }, {
        title: '参数和调用',
        data: [
            { context: '对象打点调用属性和方法' },
            { context: '参数分为 形参///实参' },
        ]
    }, {
        title: '传递延伸',
        data: [
            { context: '参数传递有两种 引用传递 和值传递' },
            { context: '注：<span class="remark">基本数据类型都是值传递 对形参修改不会影响到实参  </span>' },
            { context: '基本数据类型在声明时 就分配了空间' },
            { context: '引用类型在声明时只分配了引用空间，不分配数据空间' },
            { context: '引用类型传引用 形参实参只想同一个内存地址  对参数的修改会影响到实际的对象' },
            { context: 'String，Integer，Double等immutable 包装类型的特殊处理可以理解为传值<' },
        ]
    }, {
        title: '对象数组',
        data: [
            { context: '数组是存储同一种类型的一种数据' },
            { context: '就是自定义类型的数组 User[]  u = new User[10];' },
        ]
    }, {
        title: '方法/函数',
        data: [
            { context: 'public void 方法名(参数){}' },
            { context: 'main主方法 必须用static修饰' },
            { context: '分类：有参/无参，有返回值/无返回值 四类' },
            {
                title: "关于返回值",
                data: [
                    { context: '有返回值的方法 必须有return 有且只能有一个' },
                    { context: '返回值的类型 必须与定义的类型一致' },
                    { context: '返回值的个数 有且只能有一个' },
                ]
            }, {
                title: "构造函数/构造方法",
                data: [
                    { context: ' 每个类 都有一个默认的无参构造方法 <span class="remark">没有返回值类型 所以也没有返回值</span>' },
                    { context: '作用： 用于创建对象' },
                    { context: '分类:有参构造 / 无参构造' },
                    { context: '在类中如果不显示的写出任何构造器 那么类默认提供一个无参构造方法' },
                    { context: '当类中编写了有参构造方法是 不默认提供无参构造方法 所有 最好提供一个无参构造方法' },
                ]
            }, {
                title: "重载",
                data: [
                    { context: '方法名相同 参数列表（个数和类型）不同的  方法之间互称 重载 <span class="remark">与返回值和修饰符没有关系</span>' },
                ]
            }, {
                title: "重写",
                data: [
                    { context: '子类与父类方法  相同 那么子类的方法的优先级高首先引用  本类的方法 不再引用父类的方法了   这就是方法的重写  ' },
                    { context: 'super 子类中直接父类的引用' },
                ]
            }
        ]
    }]
}
//多线程
var demo09 = {
    title: "多线程",
    name: "多线程",
    data: [{
        title: '进程/线程',
        data: [
            { context: '进程：系统运行程序的基本单位 有独立的内存空间和系统资源' },
            { context: '线程：进程中执行运算的最小单位 处理机分配给线程 即真正在处理机上运行的是线程' },
            { context: '创建线程对象 线程 分为主线程 和子线程 并行关系 最先启动的 为主线程 主线程 关闭 子线程 也可能成为主线程 并无明确的界限' },
        ]
    }, {
        title: '创建线程的方式',
        data: [
            { context: '继承Thread 类 重写run方法' },
            { context: '实现Runnable 接口 实现run方法' },
            { context: '创建线程对象  打点调用start();' },
        ]
    }, {
        title: '线程的状态与运行',
        data: [
            { context: '线程的四种状态 新生状态 -> start -> 可运行状态 -> ( 阻塞状态 ) run -> 死亡状态' },
            { context: '阻塞原因 1.io流阻塞 2.人为睡眠 3.线程锁' },
        ]
    }, {
        title: '线程调度',
        data: [
            { context: 'join： 等待该线程终止的时间 ms a线程 调用b线程的join方法 a暂停 等待b执行啊无奈' },
            { context: 'Yeild: 暂停 级别挺低的 暂停当前线程 执行其他线程' },
            { context: 'Sleep: 挂起 有参数毫秒值 暂停 专业名词 挂起' },
        ]
    }, {
        title: '加锁(Synchronized)',
        data: [
            { context: '<span class="remark">可以放在 同步代码块上 放在这最好 串行化 范围越小越好</span>' },
            { context: 'Synchronized(同步对象){  代码块 }' },
        ]
    }, {
        title: '线程安全的类',
        data: [
            { context: 'vector 效率较低 现在不建议用' },
            { context: 'statck 栈 先进后出' },
            { context: 'hashtabe' },
            { context: 'enumeration 枚举' },
        ]
    }, {
        title: 'hashtable和hashmap的区别',
        data: [
            { context: '1 线程安全的 提供了同步机制' },
            { context: '2 不是线程安全的 既不提供' },
        ]
    }]
}
//修饰符
var demo10 = {
    title: "修饰符",
    name: "修饰符",
    data: [{
        title: 'static静态修饰符',
        data: [
            { context: '特点：可以修饰属性和方法 不能修饰类 也不能修饰局部变量' },
        ]
    }, {
        title: 'this 关键字',
        data: [
            { context: '静态static方法中不能出现this和super关键字' },
            { context: '因为this和super只有在创建对象后才会在堆内存中分配空间，' },
            { context: '而可以在没有创建对象之前就是要static变量和static方法' },
            { context: '本类对象的一种省略简写  非静态的' },
        ]
    }, {
        title: '访问修饰符 private，protected，public',
        data: [
            { context: '是否有这个类的 访问权限 属性 方法 和类上面' },
            { context: ' -------   同一类   同包   子类    任何地方' },
            { context: 'private   可以  不可以 不可以   不可以    私有的' },
            { context: '默认修饰符 可以  可以   不可以   不可以    默认的' },
            { context: 'protected 可以  可以   可以     不可以    被保护的' },
            { context: 'public    可以  可以    可以    可以     公共的' },
        ]
    }, {
        title: 'abstarct抽象类',
        data: [
            { context: '抽象类的修饰符  只能修饰类和方法 不能修饰属性' },
        ]
    }, {
        title: 'interface接口',
        data: [
            { context: '接口的修饰符  接口只能实现  impelement' },
            { context: '接口和接口的关系是继承' },
        ]
    }]
}
//类之间的关系
var demo11 = {
    title: "类之间的关系",
    name: "类之间的关系",
    supdata: [
        { context: '<span class="remark">建议 多实现   少继承   因为继承只能有一个</span>' },
        { context: '注：<span class="remark"> 对于Object超类 只能与引用类型相容 不能和基本数据类型相融</span>' },
        { context: '菱形运算符:   List&lt;Integer&gt; = new ArrayList&lt;&gt;();' },
        { context: '泛型限制：一基本类型不能用在泛型参数；必须使用其包装类' },
    ],
    data: [{
        title: '继承(extends) 类和类之间的关系',
        data: [
            { context: '子类可以引用父类的属性和方法 维护方便' },
            { context: '继承是java事项代码重用的重要手段之一 java只支持单根继承 有且只能有有一个父类' },
            { context: '注：<span class="remark">重写是多态的基础 / 有且只能有有一个父类</span>' },
            { context: ' a instance b ; a是不是b的子类' },
            { context: '' },
        ]
    }, {
        title: '向上转型',
        data: [
            { context: 'Pet pet = new Dog(); 父类的变量 子类的 对象 就是多态' },
            { context: '注<span class="remark">不能使用子类特有的方法</span>' },
        ]
    }, {
        title: '泛化',
        data: [
            { context: '泛化 :把具体的对象看成类    例如 吧猫看成动物  本质就是 <span class="remark">向上转型</span>' },
        ]
    }, {
        title: '多态',
        data: [
            { context: '前期绑定  --静态绑定在编译器 就明确 父类对对象的绑定  就是静态绑定' },
            { context: '后期绑定  --动态绑定 在运行期给父类对象进行绑定的 叫做动态绑定	程序运行期  ' },
        ]
    }, {
        title: '接口(interface) 类与接口之间的关系叫做 实现',
        data: [
            { context: '接口就是完全抽象的类,不能写具体方法 abstract可省略' },
            { context: '注：<span class="remark">用implements实现</span>' },
            { context: '接口的属性 必须被 public static finnal 修饰 且 必须被赋值(可省略)' },
        ]
    }, {
        title: '抽象类(abstarct)',
        data: [
            { context: '注：<span class="remark">抽象类也是类 关系是继承</span>' },
            { context: '子类需要实现抽象方法 abstarct只能修饰类和方法 不能修饰属性' },
            { context: '是一个不完整的类 因为有抽象的方法 用来当父类' },
            { context: '注：<span class="remark">抽象类 不能实例化对象 但是 可以向上转型到抽象类</span>' },
            { context: '抽象类 既能写 抽象方法也能写具体方法<span class="remark">抽象方法必须abstract修饰</span>' },
        ]
    }, {
        title: '抽象类和接口的异同点',
        data: [
            { context: '相同点' },
            { context: '抽象类和接口均包含抽象方法，类必须实现所有的抽象方法，否则是抽象类; 抽象类和接口都不能实例化，他们位于继承树的顶端，用来被其他类继承和实现' },
            { context: '不同点' },
            { context: '两者的区别主要体现在两方面：语法方面和设计理念方面' },
            { context: '语法方面的区别是比较低层次的，非本质的，主要表现在：' },
            { context: '接口中只能定义全局静态常量，不能定义变量。 接口中所有的方法都是全局抽象方法。接口中不能定义构造方法。使用implements来实现接口。' },
            { context: '抽象类中可以定义常量和变量。抽象类中的非抽象方法可以有0个、1个或多个，甚至全部都是抽象方法。' },
            { context: '抽象类中可以有构造方法，但不能用来实例化，而在子类实例化是执行，完成属于抽象类的初始化操作。。' },
            { context: ' 一个类只能有一个直接父类（可以是抽象类），但可以同时实现多个接口。一个类使用extends来继承抽象类，' },
            { context: '二者的主要区别还是在设计理念上，' },
            { context: '其决定了某些情况下到底使用抽象类还是接口。 抽象类体现了一种继承关系，目的是复用代码，抽象类中定义了各个子类的相同代码，可以认为父类是一个实现了部分功能的“中间产品”，而子类是“最终产品”。父类和子类之间必须存在“is-a”的关系，即父类和子类在概念本质上应该是相同的。' },
            { context: '接口并不要求实现类和接口在概念本质上一致的，仅仅是实现了接口定义的约定或者能力而已。接口定义了“做什么”，而实现类负责完成“怎么做”，体现了功能（规范）和实现分离的原则。接口和实现之间可以认为是一种“has-a的关系”' },
            { context: '的元素只能是引用类型，基本类型数据需要转换为对应包装类的对象才能放入集合。' },
        ]
    }, {
        title: '包装类的作用',
        data: [
            { context: '包装类最主要的功能就是类型转换;可以调用上面的方法' },
            { context: '注：<span class="remark">基本数据类型的包装类有一堆一堆的方法</span>' },
        ]
    }, {
        title: '基本数据类型---引用类型',
        data: [
            { context: 'byte --> Byte' },
            { context: 'short--> Short' },
            { context: 'int--> Integer' },
            { context: 'long--> Long' },
            { context: 'float--> Float' },
            { context: 'double--> Double' },
            { context: 'char -->Character' },
            { context: 'boolean -->Boolean' },
        ]
    }, {
        title: '自动装箱与自动拆箱',
        data: [
            { context: '<span class="remark">jdk 1.5以后提供的</span>' },
            { context: '自动装箱-->不用强制类型转化了 ； int ii = inte; ' },
            { context: '自动拆箱 : Integer inte2 = ii;' },
        ]
    }]
}
//容器和集合
var demo12 = {
    title: "容器和集合",
    name: "容器和集合",
    data: [{
        title: '集合总纲',
        data: [
            { context: '<img src="data/images/demo17_01.png" alt="">' },
        ]
    }, {
        title: '集合和数组',
        data: [
            { context: '定义： 集合 也成为容器 能存能取 它可以将系列元素组合' },
            { context: '区别：数组中的元素可以是任何数据类型，包括基本类型和引用类型。集合中的元素只能是引用类型，基本类型数据需要转换为对应包装类的对象才能放入集合。' },
        ]
    }, {
        title: 'List集合',
        data: [
            { context: '集合 都是线性表 一个居于 数组存储 一个基于链式存储' },
            { context: ' 有序 不唯一（可重复）' },
            { context: '使用集合的优点:长度可变,并且保存的数据类型不限定' },
            { context: 'ArrayList: 底层就是数组 按照下标存储; 查询效率高 增删改慢 构造方法中 创建的是没有长度的  传参会默认10长度 然后以1.5倍增长  当让也可以创建20的长度  调用有参构造方法' },
            { context: 'LinkedList: 底层是链式; 查询效率低 增删改快' },
        ]
    }, {
        title: 'Set',
        data: [
            { context: '存储一组 无序 唯一(不重复)' },
            { context: 'HashSet' },
            { context: 'TreeSet 存放数据 只能存放一种具有比较大小能力的类型 如果不具有比较大小能力的数据 需要实现比较器接口(Comparable Comparator) compareTo方法 返回int值' },
        ]
    }, {
        title: '迭代器 Iterator',
        data: [
            { context: 'Update 更新 迭代<span class="remark">功能 ： 遍历容器</span>' },
            { context: 'hasNext()' },
            { context: '使用 List  list1  =  new  ArrayList();' },
            { context: 'list1.add("aaa");' },
            { context: 'Iterator it = list1.iterator();  // 吧list交给了   interator' },
            { context: 'while(it.hasNext()){  // 判断右边是否有值   有true ' },
            { context: 'it.Next(); // 取值 移动游标' },
            { context: '}' },
        ]
    }, {
        title: 'Iterator 与 foreach 的区别',
        data: [
            { context: 'Foreach 必须明确容器中的类型 Iterator 不必知道容器类型' },
            { context: 'Iterator 可以对容器元素进行操作 Foreach 不能操作元素' },
            { context: ' 对于少量数据 使用for-each 效率高' },
            { context: '容器数据较多 使用Iterator 效率高' },
        ]
    }, {
        title: 'Map容器<span class="remark">Map 不是collection 的子接口 </span>',
        data: [
            { context: '存储一组成对的键－值对象，提供key（键）到value（值）的映射，通过key来索引' },
            { context: 'key不允许重复 value允许重复 添加的对象将转换为Object类型' },
            { context: 'Map取值的四种方式' },
            { context: '<img src="data/images/demo17.png" alt="">' },
        ]
    }, {
        title: 'Vector和ArrayList //HashMap和Hashtable',
        data: [
            { context: 'Vector和ArrayList实现原理相同，功能相同，都是长度可变的数组结构，很多情况下可以互用。' },
            { context: '两者的主要区别如下： Vector是早期集合类，ArrayList是替代Vector的；Vector线程安全；ArrayList重速度轻安全，线程非安全，性能较高。' },
            { context: 'HashMap和Hashtable实现原理相同，功能相同，底层都是哈希表结构，查询速度快，在很多情况下可以互用。' },
            { context: '两者的主要区别如下：Hashtable是早期JDK提供，HashMap是新版JDK提供；Hashtable线程安全，性能较低，HashMap线程非安全，性能较高' },
        ]
    }, {
        title: 'list集合的方法',
        data: [
            { context: 'ArrayList  l= new ArrayList();' },
            { context: 'List aaaa = new ArrayList();' },
            { context: 'l.add("aaa"); //添加' },
            { context: 'System.out.println(l.size()); // 长度' },
            { context: ' System.out.println(l.get(0)); //下标取值' },
            { context: 'l.set(1,"尹栋力"); // 替换' },
            { context: 'l.add(1,"尹栋力"); // 插入' },
            { context: 'l.remove(1); //下标删除  下标优先级高' },
            { context: 'l.remove("尹栋力"); //  移除 对象  ' },
            { context: 'l.clear();// 清空' },
            { context: 'l.isEmpty(); // 判断是否为空' },
            { context: 'l.contains("aaa"); // 是否包含' },
            { context: 'l.indexOf("aaa"); // 检索  取小标 否则 -1' },
            { context: 'Object []  arr = l.toArray();// 转成数组' },
            { context: '' },
            { context: '' },
            { context: '' },
        ]
    }, {
        title: 'linkedlist集合的方法',
        data: [
            { context: 'LinkedList l = new LinkedList();' },
            { context: 'l.getFirst();' },
            { context: 'l.getLast();' },
            { context: 'l.addFirst("aaa");' },
            { context: 'l.addLast("enen");' },
        ]
    }, {
        title: 'set 接口',
        data: [
            { context: 'Set set = new HashSet();' },
            { context: 'set.add("aaa");' },
            { context: 'set.add(null);  // 可以放空值' },
            { context: '只能用  foreach的类型去取 无需唯一不重复  无序的  不可重复 上面两个aaa 只能打印出一个' },
            { context: 'for (Object  o: set) {  System.out.println("这是什么"+o); }' },
            { context: 'set.clear();' },
            { context: 'set.isEmpty();' },
            { context: 'set.contains("aaa");' },
            { context: 'set.remove("aaa");' },
            { context: 'set.size(); // 长度  一样的 只有一个位置' },

            { context: 'TreeSet Tset  = new TreeSet();' },
            { context: 'Tset.add("aaa"); //类型 需要和第一个一样//必须有 比较大小的能力  否则 没法村' },
            { context: 'Tset.add("aaa");// 不重复 唯一' },
            { context: 'for(Object o :Tset){System.out.println("Tset"+o);}' }
        ]
    }, {
        title: 'Map 集合',
        data: [
            { context: 'Map  m = new HashMap();' },
            { context: 'm.put("u3","张三");什么类型都可以放  包括自定义类型   值可以相同 键唯一' },
            { context: 'System.out.println(m.get("u3"));' },
            { context: 'm.containsKey("u2");' },
            { context: 'm.containsValue("u1");' },
            { context: 'Set s =m.entrySet(); //吧map 集合 转换为set容器   键值对 =  取值看set' },
            { context: 'Set s = m.keySet(); //取键' },
            { context: 'map的取值方式' },
            { context: '第一种  通过set   转成set方式' },
            { context: 'for(Object key : m.keySet()){   System.out.println(m.get(key));}' },
            { context: '第二种： 转成set 使用迭代器' },
            { context: 'Iterator it1 = (Iterator) m.entrySet().iterator();' },
            { context: 'while(it1.hasNext()){ it.Next(); }' },
            { context: '第三种 泛型 然后用entryset 定义类型 不让你填别的  用来规定类型的' },
            { context: 'Map< String,String >  m1 = new HashMap< String,String >();  // 此处必须用' },
            { context: ' m1.put("u3","张三");' },
            { context: 'for(Entry< String,String >  entry : m1.entrySet() ){ entry.getKey()+":::"+entry.getValue() }' },
            { context: '第四种 只能遍历value' },
            { context: 'for(Object s : m1.values()){ System.out.println(s); }' },
        ]
    }]
}
//JAVAEE、myEclipse和Tomcat
var demo13 = {
    title: "JAVAEE、myEclipse和Tomcat",
    name: "JAVAEE、myEclipse和Tomcat",
    data: [{
        title: 'JAVAEE',
        data: [
            { context: '十三种技术规范' },
            { context: '<span class="remark">JDBC, JNDI, JSP, Java servlets, XML</span>,EJBs, RMI, JMS, Java IDL, JTS, JTA, JavaMail 和 JAF。' },
        ]
    }, {
        title: 'java服务器分类 javaee服务器/web服务器',
        data: [
            {
                title: "javaee服务器",
                data: [
                    { context: '13种技术规范全部实现的服务器叫做javaee服务器' },
                    { context: 'WebLogic BEA 被Oracle收购 付费的' },
                    { context: 'Websphere IBM （银行） 付费的' },
                    { context: 'JBoss 免费的' },
                    { context: 'GlassFish SUN' },
                    { context: 'Oracle Application Server' },
                    { context: 'Geronimo 免费的（实际上就是Websphere）' },
                ]
            },
            {
                title: "web服务器",
                data: [
                    { context: '实现十三种技术规范的部分要求的服务器叫做web服务器' },
                    { context: '浏览器 谷歌(最绚丽的) firefox(火狐 最专业的) opera(最小巧的) ie(最恶心的) 6，8 兼容性 更新快' },
                    { context: '<span class="remark">cs结构</span> 客户端与服务器' },
                    { context: '用的少 因为需要下载和更新 更新慢 客户不喜欢更新 游戏 音乐盒 会涉及到cs结构' },
                    { context: '常见的五种web服务器：' },
                    { context: 'Tomcat：目前最为流行的Tomcat服务器是Apache-Jarkarta开源项目中的一个子项目，是一个小型、轻量级的支持JSP和Servlet 技术的Web服务器，也是初学者学习开发JSP应用的首选。' },
                    { context: 'Resin：Resin是Caucho公司的产品，是一个非常流行的支持Servlet和JSP的服务器，速度非常快。Resin本身包含了一个支持HTML的Web服务器，这使它不仅可以显示动态内容，而且显示静态内容的能力也毫不逊色，因此许多网站都是使用Resin服务器构建。' },
                    { context: 'JBoss：　JBoss是一个种遵从JavaEE规范的、开放源代码的、纯Java的EJB服务器，对于J2EE有很好的支持。JBoss采用JML API实现软件模块的集成与管理，其核心服务又是提供EJB服务器，不包含Servlet和JSP的Web容器，不过它可以和Tomcat完美结合' },
                    { context: 'WebSphere：　WebSphere是IBM公司的产品，可进一步细分为 WebSphere Performance Pack、Cache Manager 和WebSphere Application Server等系列，其中WebSphere Application Server 是基于Java 的应用环境，可以运行于 Sun Solaris、Windows NT 等多种操作系统平台，用于建立、部署和管理Internet和Intranet Web应用程序。' },
                    { context: 'WebLogic：　WebLogic 是BEA公司的产品，可进一步细分为 WebLogic Server、WebLogic Enterprise 和 WebLogic Portal 等系列，其中 WebLogic Server 的功能特别强大。WebLogic 支持企业级的、多层次的和完全分布式的Web应用，并且服务器的配置简单、界面友好。对于那些正在寻求能够提供Java平台所拥有的一切应用服务器的用户来说，WebLogic是一个十分理想的选择。' },
                ]
            },
        ]
    }, {
        title: 'Tomcat',
        data: [
            { context: '验证tomcat是否完整 http://locathost:8080' },
            { context: '开发过程中：一个项目 一个工作区 一个tomcat' },
            { context: '每次修改后台代码都需要重启Tomcat？为什么' },
            {
                title: "启动tomcat的方式",
                data: [
                    { context: '双击startup.bat linux双击startup.sh//关闭双击shutdown.bat linux双击shutdown.sh' },
                    { context: '在myeclipse里面点击启动' },
                    { context: '在bin目录下 命令行 catalina start//关闭 catalina stop' },
                ]
            },
            {
                title: "Tomcat目录结构",
                data: [
                    { context: 'bin->tomcat命令' },
                    { context: 'conf->配置文件' },
                    { context: 'lib->存放jar包' },
                    { context: 'logs->tomcat日志' },
                    { context: 'temp->tomcat临时文件' },
                    { context: 'webapps->tomcat部署项目的路径' },
                    { context: 'work->tomcat存放二进制文件(.class)' },
                    { context: 'bin->tomcat命令' },
                ]
            },
            {
                title: "conf文件重要内容",
                data: [
                    { context: 'context.xml <span class="remark">Tomcat项目中指定根目录web工程的根目录' },
                    { context: 'WatchedResource WEB-INF/web.xml /WatchedResource' },
                    { context: 'server.xml' },
                    { context: ' 端口/协议/超时/重定向端口/编码格式' },
                    { context: 'Connector port="8080" ' },
                    { context: 'protocol="HTTP/1.1"' },
                    { context: 'connectionTimeout="20000" ' },
                    { context: 'redirectPort="8443"' },
                    { context: ' URIEncoding="utf-8"/' },
                    { context: 'Host<span class="remark">配置虚拟主机</span> ' },
                    { context: 'web.xml 最重要的就是对后缀解析' },

                ]
            },
        ]
    }, {
        title: 'myEclipse',
        data: [
            { context: '配置jdk Tomcat 还有jsp 在window->preference->直接搜索' },
        ]
    }, {
        title: '新建简单的web流程',
        data: [
            { context: '在myeclipse-> new->web project' },
            { context: 'webRoot/WEB-INF/web.xml <span class="remark">Servlet的核心配置文件</span>' },
            { context: 'Url-pattern 访问路径' },
            { context: 'Servlet-name 是标记 只要与 上面的 servlet 中的 servlet-name 一致即可只是用来找到处理类的 servlet-class 必须是全名称' },
            { context: '在src下面新建servlet 会在核心配置文件生成配置 ' },
            { context: '新建一个servlet mapping url 后缀加.do 目的是为了区分 POJO(project old java Object) mapping url是访问该servlet 的地址' },
        ]
    }, {
        title: '部署项目的n种方式',
        data: [
            { context: '<span class="remark">复制的项目一定要更改文件的路径 否则报错</span>' },
            { context: '向服务器webapps中放入web工程' },
            { context: '部署时，将源代码编译成字节码文件放到 web-inf/classes下面' },
            { context: '以上有两种方式<span class="remark">通过工具/手动向webapps放入项目</span>' },
            { context: '将war包放入到webapps下/启动tomcat 启动的过程就是解压war包的过程' },
            { context: 'jar并不算是一种部署项目的方式 但是能够实现' },
        ]
    }, {
        title: '修改项目的访问路径',
        data: [
            { context: '复制过来的项目一定要修改访问路径' },
            { context: '项目右键 properties 搜索web 第一个web更改路径' },
        ]
    }, {
        title: 'jar包和war包',
        data: [
            { context: 'jar包：选择src目录 -> exprot ->java -> jar file' },
            { context: 'war包：选择所有文件 ->exprot ->javaee ->war file' },
        ]
    }, {
        title: '协议',
        data: [
            {
                title: 'Http协议',
                data: [
                    { context: 'Hyper Text Transfer Protocal 超文本传输协议' },
                    { context: '请求有 请求头和请求体' },
                    { context: '响应有 响应头和响应体' },
                    { context: '响应状态码' },
                    { context: '200 成功' },
                    { context: '302 重定向' },
                    { context: '304 查找本地缓存' },
                    { context: '404 请求资源不存在' },
                    { context: '500 服务器端出错' },
                ]
            },
        ]
    }, {
        title: '',
        data: [
            { context: '' },
            { context: '' },
        ]
    }]
}
//关于java的内存泄漏
var demo14 = {
    title: "关于java的内存泄漏",
    name: "关于java的内存泄漏",
    data: [{
        title: '什么是内存泄漏',
        data: [
            { context: '对象已经没有被应用程序使用，但是垃圾回收器没办法移除它们，因为还在被引用着。' },
            { context: '未被引用对象会被垃圾回收器回收，而被引用的对象却不会。未被引用的对象当然是不再被使用的对象，因为没有对象再引用它。然而无用对象却不全是未被引用对象。其中还有被引用的。就是这种情况导致了内存泄漏。' },
        ]
    }, {
        title: '为什么会发生内存泄漏',
        data: [
            { context: 'A对象引用B对象，A对象的生命周期比B对象的生命周期长的多。当B对象没有被应用程序使用之后，A对象仍然在引用着B对象。这样，垃圾回收器就没办法将B对象从内存中移除，从而导致内存问题，因为如果A引用更多这样的对象，那将有更多的未被引用对象存在，并消耗内存空间。' },
            { context: 'B对象也可能会持有许多其他的对象，那这些对象同样也不会被垃圾回收器回收。所有这些没在使用的对象将持续的消耗之前分配的内存空间。' },
        ]
    }, {
        title: '如何防止内存泄漏的发生',
        data: [
            { context: '特别注意一些像HashMap、ArrayList的集合对象，它们经常会引发内存泄漏。当它们被声明为<span class="remark">static</span>时，它们的生命周期就会和应用程序一样长。' },
            { context: '特别注意事件监听和回调函数。当一个监听器在使用的时候被注册，但不再使用之后却未被反注册。' },
            { context: '“如果一个类自己管理内存，那开发人员就得小心内存泄漏问题了。” 通常一些成员变量引用其他对象，初始化的时候需要置空。' },
        ]
    },]
}
//Servlet 生命周期和访问流程
var demo15 = {
    title: "Servlet 生命周期和访问流程",
    name: "Servlet 生命周期和访问流程",
    data: [{
        title: 'Servelet',
        data: [
            { context: 'Servlet = servlet+applet 服务器端的小程序' },
            { context: 'Servlet2.0支持配置方式 web.xml' },
            { context: 'Servlet3.0以上版本支持注解方式 @Test @webServlet("/TestServlet.do") ' },
            { context: '每一个servlet都会继承HttpServlet' },
            { context: '并且会在web.xml下面形成对应的配置文件' },
        ]
    }, {
        title: 'servlet继承实现关系',
        data: [
            { context: '每次创建servlet都会直接继承HttpServlet(抽象类) ->继承 GenericServlet(抽象类) ->实现 Servlet(抽象类)' },
            { context: '子类的方法优先级比父级高' },
            {
                title: 'Servlet抽象类',
                data: [
                    { context: 'abstract init() 初始化' },
                    { context: 'abstract getServletConfig() 获取对象' },
                    { context: 'abstract service() 服务 核心方法' },
                    { context: 'abstract getServletInfo() 获取信息的方法' },
                    { context: 'abstract destroy() 销毁方法' },
                ]
            },
            {
                title: 'GenericServlet 抽象类',
                data: [
                    { context: 'destroy(){} 毛线没写' },
                    { context: 'String getInitParameter(){} 获取初始化参数' },
                    { context: 'Enumeration < String> getInitParameterNames(){} 获取初始化参数名称的方法' },
                    { context: 'getServletConfig(){} 获取初始化对象的' },
                    { context: 'ServletContext getServletContext(){} 获取上下文对象的方法' },
                    { context: 'String getServletInfo(){return "";}' },
                    { context: 'init() / init(ServletConfig config) 互为重载 初始化方法' },
                ]
            },
        ]
    }, {
        title: 'servlet的一些方法',
        data: [
            { context: 'request.getParameter("username") 获取前台的username' },
            { context: 'request.setAttribute("username", name); 向request添加键值对 供前台访问' },
            { context: 'request.getRequestDispatcher("error.jsp").forward(request, response); 请求转发到error页面' },
            { context: '<%=request.getAttribute("username") %> jsp页面获取后台发送的username' },
            { context: 'response.sendRedirect("index.jsp"); 重定向到index.jsp' },
        ]
    }, {
        title: '访问流程',
        data: [
            { context: '请求路径--> 匹配web.xml中的 url-pattern中的路径' },
            { context: '就可以去servlet-name' },
            { context: '找 servlet中的 servlet-name' },
            { context: '拿到servlet-class中的 全名 全名' },
            { context: '之后用映射的方式创建 HttpServlet h = class.forName()' },
            { context: '打点调用方法 eg： h.doGet()' },
        ]
    }, {
        title: 'Servlet的生命周期',
        data: [
            { context: '任何一个自定义的servlet都有直接父类 HttpServlet' },
            { context: '当第一次访问的时候 服务器创建servlet有且只有一个 所以是单例模式' },
            { context: '再次访问不会被创建 开启新的线程 每次访问都会调用service方法' },
            { context: 'init() 初始化 第一次访问的时候被初始化 只有一次' },
            { context: 'service() 来自父类的 每次访问都会被调用' },
            { context: 'destroy() 只有服务器正常关闭前 会执行一次' },
        ]
    }, {
        title: '有关对象',
        data: [
            {
                title: 'ServletConfig（了解就好 获取配置信息的）',
                data: [
                    { context: 'ServletConfig sc= this.getServletConfig(); // 初始化对象' },
                    { context: 'sc.getInitParameter("aaa"); //初始化参数' },
                    { context: 'sc.getServletName() // 获取局部初始化参数名称' },
                    { context: 'Enumeration e = sc.getInitParameterNames(); //获取局部初始化参数名称' },
                    { context: 'while(e.hasMoreElements()){' },
                    { context: 'e.nextElement()' },
                    { context: '}' },
                ]
            }, {
                title: 'ServletContext(重要) 获取上下文对象 作用域对象',
                data: [
                    { context: 'ServletContext st = this.getServletContext(); //初始化context对象' },
                    { context: 'String path = st.getRealPath("upload"); //相对路径转绝对路径 （重要）' },
                    { context: 'st.setAttribute("name","张三"); //全局容器 随着服务器一直存在 （重要）' },
                    { context: 'st.getInitParameter("cloud");//获取全局初始化参数' },
                    { context: 'Enumeration e = st.getInitParameterNames(); //获取所有初始化参数名称' },
                    { context: 'while(e.hasMoreElements()){' },
                    { context: 'e.nextElement()' },
                    { context: '}' },
                    { context: '最没用的' },
                    { context: 'st.getMajorVersion() // 获取附加信息' },
                    { context: 'st.getMinorVersion() // 获取附加信息' },
                ]
            },
        ]
    }, {
        title: '作用域对象 HttpServletRequest对象；HttpServletResponse对象',
        data: [
            {
                title: 'request 对象方法',
                data: [
                    { context: 'Servlet中请求中的所有内容，都会被封装成一个 HttpServletRequest request对象并作为 doGet 或 doPost的参数 (谁做的封装？--- 服务器)' },
                    { context: '<span class="remark">以下内容必会</span>' },
                    { context: 'String str = request.getQueryString(); // get请求携带数据问号参数 问号后面的字符串' },
                    { context: 'String name = request.getParameter("name");// get参数/post参数' },
                    { context: 'String[] aStr = request.getParameterValues("hobby"); // checkbox的values' },
                    { context: 'request.setAttribute("username", name);' },
                    { context: 'request.getRequestDispatcher("error.jsp").forward(request, response); 请求转发到error页面' },
                    { context: '--------------------分割线-------------------------------' },
                    { context: 'String userAhent = request.getHeader("user-Agent"); // 客户端品牌信息' },
                    { context: 'String Referer =request.getHeader("Referer") ;// 得到的是请求来源 可以用来做防盗链' },
                    { context: 'String method = request.getMethod(); //post/get' },
                    { context: 'String contextpath = request.getContextPath();// 部署时的项目名称' },
                    { context: 'String ServerName = request.getServerName(); // 服务器名称' },
                    { context: 'String protocal = request.getProtocol(); // 获得协议 HTTP/1.1' },
                    { context: 'int Serverport = request.getServerPort();//端口号' },
                    { context: 'String uri = request.getRequestURI();// 统一资源定位符 /1208/RequestTest.do' },
                    { context: 'StringBuffer url = request.getRequestURL();// 资源标识符 http://localhost:8080/1208/RequestTest.do' },
                    { context: '//获取所有请求头的key' },
                    { context: 'Enumeration e = request.getHeaderNames();//获取所有key' },
                    { context: 'String ip =request.getRemoteAddr();//客户端ip地址 ' },
                    { context: 'while(e.hasMoreElements()){' },
                    { context: 'String name = (String)e.nextElement();' },
                    { context: 'System.out.print(name);' },
                    { context: '}' },
                ]
            }, {
                title: 'response 对象方法',
                data: [
                    { context: 'Servlet中请求中的所有内容，都会被封装成一个 HttpServletResponse' },
                    { context: 'response.sendRedirect("index.jsp"); //重定向' },
                ]
            },
        ]
    }]
}
//递归和数据结构
var demo16 = {
    title: "递归和数据结构",
    name: "递归和数据结构",
    data: [{
        title: '递归调用',
        data: [
            { context: '定义： 自己调自己 直接或者间接的电泳自身' },
            { context: '从功能上来说；所有的递归都能用循环来实现，有时候递归方便一点' },
            { context: '从效率上来说，循环一般都是大于递归的' },
            { context: '具体案例算法里面应该有详解' },
            { context: '' },
        ]
    },{
        title: '数据结构',
        data: [
            { context: '<span class="remark">我们了解的只是皮毛，也许皮毛都高估了自己</span>' },
            { context: '存储在：栈 堆 内存中' },
            { context: '内存分为 常量区。。。。' },
            { context: '栈区(stack)  后进先出 创建一个对象的时候  会在堆区开辟一部分空间(暂时理解为堆内存) 当成为垃圾的时候  系统会回收这段空间' },
            { context: '堆区(): 堆是Java虚拟机所管理的内存中最大的一块。堆是所有线程共享的一块区域，在虚拟机启动时创建。堆的唯一目的是存放对象实例，' },
            { context: '栈（stack）：主要保存基本类型（或者叫内置类型）（char、byte、short、int、long、float、double、boolean）和对象的引用，数据可以共享，速度仅次于寄存器（register），快于堆。 ' },
            { context: '堆（heap）：用于存储对象' },
            { context: '  Java堆是垃圾收集器管理的主要区域，所以也称为“GC堆”。 所以Java堆还可细分为:新生代和老生代。' },
            { context: '不过无论如何划分，都与存放内容无关，无论哪个区域，都是用来存放对象实例。' },
            { context: '方法区（也叫：数据区，共享区，共享数据区） —— 存放全局变量，静态变量和字符串常量，和方法' },
        ]
    }]
}
data = [demo01, demo02,
    demo03, demo04, demo05,
    demo06, demo07, demo08, demo09, demo10, demo11, demo12, demo13, demo14, demo15, demo16]
