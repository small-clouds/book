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
//没有
var demo09 = {
    title: "",
    name: "",
    data: []
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
    supdata:[
         { context: '<span class="remark">建议 多实现   少继承   因为继承只能有一个</span>' },
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
    },{
        title: '向上转型',
        data: [
            { context: 'Pet pet = new Dog(); 父类的变量 子类的 对象 就是多态' },
            { context: '注<span class="remark">不能使用子类特有的方法</span>' },
        ]
    },{
        title: '泛化',
        data: [
            { context: '泛化 :把具体的对象看成类    例如 吧猫看成动物  本质就是 <span class="remark">向上转型</span>' },
        ]
    },{
        title: '多态',
        data: [
            { context: '前期绑定  --静态绑定在编译器 就明确 父类对对象的绑定  就是静态绑定' },
            { context: '后期绑定  --动态绑定 在运行期给父类对象进行绑定的 叫做动态绑定	程序运行期  ' },
        ]
    },{
        title: '接口(interface) 类与接口之间的关系叫做 实现',
        data: [
            { context: '接口就是完全抽象的类,不能写具体方法 abstract可省略' },
            { context: '注：<span class="remark">用implements实现</span>' },
            { context: '接口的属性 必须被 public static finnal 修饰 且 必须被赋值(可省略)' },
        ]
    },{
        title: '抽象类(abstarct)',
        data: [
            { context: '注：<span class="remark">抽象类也是类 关系是继承</span>' },
            { context: '子类需要实现抽象方法 abstarct只能修饰类和方法 不能修饰属性' },
            { context: '是一个不完整的类 因为有抽象的方法 用来当父类' },
            { context: '注：<span class="remark">抽象类 不能实例化对象 但是 可以向上转型到抽象类</span>' },
            { context: '抽象类 既能写 抽象方法也能写具体方法<span class="remark">抽象方法必须abstract修饰</span>' },
        ]
    },{
        title: '抽象类和接口的异同点',
        data: [
            { context: '相同点' },
            { context: '抽象类和接口均包含抽象方法，类必须实现所有的抽象方法，否则是抽象类; 抽象类和接口都不能实例化，他们位于继承树的顶端，用来被其他类继承和实现' },
            {context:'不同点'},
            {context:'两者的区别主要体现在两方面：语法方面和设计理念方面'},
            {context:'语法方面的区别是比较低层次的，非本质的，主要表现在：'},
            {context:'接口中只能定义全局静态常量，不能定义变量。 接口中所有的方法都是全局抽象方法。接口中不能定义构造方法。使用implements来实现接口。'},
            {context:'抽象类中可以定义常量和变量。抽象类中的非抽象方法可以有0个、1个或多个，甚至全部都是抽象方法。'},
            {context:'抽象类中可以有构造方法，但不能用来实例化，而在子类实例化是执行，完成属于抽象类的初始化操作。。'},
            {context:' 一个类只能有一个直接父类（可以是抽象类），但可以同时实现多个接口。一个类使用extends来继承抽象类，'},
            {context:'二者的主要区别还是在设计理念上，'},
            {context:'其决定了某些情况下到底使用抽象类还是接口。 抽象类体现了一种继承关系，目的是复用代码，抽象类中定义了各个子类的相同代码，可以认为父类是一个实现了部分功能的“中间产品”，而子类是“最终产品”。父类和子类之间必须存在“is-a”的关系，即父类和子类在概念本质上应该是相同的。'},
            {context:'接口并不要求实现类和接口在概念本质上一致的，仅仅是实现了接口定义的约定或者能力而已。接口定义了“做什么”，而实现类负责完成“怎么做”，体现了功能（规范）和实现分离的原则。接口和实现之间可以认为是一种“has-a的关系”'},
            {context:'的元素只能是引用类型，基本类型数据需要转换为对应包装类的对象才能放入集合。'},
        ]
    },{
        title: '',
        data: [
            
            { context: '' },
        ]
    },{
        title: '',
        data: [
            
            { context: '' },
        ]
    },]
}
data = [demo01, demo02, demo03, demo04, demo05, demo06, demo07, demo08, demo09, demo10, demo11]