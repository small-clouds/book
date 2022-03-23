//九阴真经面试题
var demo01 = {
    title: "九阴真经面试题",
    name: "demo01",
    data: [{
        title: "final, finally, finalize的区别",
        data: [
            { context: "<span class='remark'>final</span>：：：修饰符（关键字）如果一个类被声明为final，意味着它不能再派生出新的子类，不能作为父类被继承。因此一个类不能既被声明为 abstract的，又被声明为final的。将变量或方法声明为final，可以保证它们在使用中不被改变。被声明为final的变量必须在声明时给定初值，而在以后的引用中只能读取，不可修改。被声明为final的方法也同样只能使用，不能重载 " },
            { context: "<span class='remark'>finally</span>：：：再异常处理时提供 finally 块来执行任何清除操作。如果抛出一个异常，那么相匹配的 catch 子句就会执行，然后控制就会进入 finally 块（如果有的话）。 " },
            { context: "<span class='remark'>finalize</span>：：：方法名。Java 技术允许使用 finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。这个方法是由垃圾收集器在确定这个对象没有被引用时对这个对象调用的。它是在 Object 类中定义的，因此所有的类都继承了它。子类覆盖 finalize() 方法以整理系统资源或者执行其他清理工作。finalize() 方法是在垃圾收集器删除对象之前对这个对象调用的。" }
        ]
    }, {
        title: "Anonymous Inner Class (匿名内部类) 是否可以extends(继承)其它类，是否可以implements(实现)interface(接口)",
        data: [
            { context: "匿名的内部类是没有名字的内部类。不能extends(继承) 其它类，但一个内部类可以作为一个接口，由另一个内部类实现。" }
        ]
    }, {
        title: "&和&&的区别：",
        data: [
            { context: "&是位运算符。&&是布尔逻辑运算符。" }
        ]
    }, {
        title: " HashMap和Hashtable的区别：",
        data: [
            { context: "都属于Map接口的类，实现了将惟一键映射到特定的值上。" },
            { context: "<span class='remark'>HashMap</span> 类没有分类或者排序。它允许一个 null 键和多个 null 值。 " },
            { context: "<span class='remark'> Hashtable</span> 类似于 HashMap，但是不允许 null 键和 null 值。它也比 HashMap 慢，因为它是同步的。" }
        ]
    }, {
        title: "Collection 和 Collections的区别：",
        data: [
            { context: "<span class='remark'> Collections</span>是个java.util下的类，它包含有各种有关集合操作的静态方法。 " },
            { context: "<span class='remark'> Collection</span>是个java.util下的接口，它是各种集合结构的父接口。" }
        ]
    }, {
        title: "GC是什么? 为什么要有GC? (基础)：",
        data: [
            { context: "GC是垃圾收集器。Java 程序员不用担心内存管理，因为垃圾收集器会自动进行管理。要请求垃圾收集，可以调用下面的方法之一：" },
            { context: "System.gc();  Runtime.getRuntime().gc()。" }
        ]
    }, {
        title: 'String s = new String("xyz");创建了几个String Object：',
        data: [
            { context: "两个对象，一个是“xyx”,一个是指向“xyx”的引用对象s。" }
        ]
    }, {
        title: "Math.round(11.5)等於多少? Math.round(-11.5)等於多少：",
        data: [
            { context: "Math.round(11.5)返回（long）12，Math.round(-11.5)返回（long）-11。" }
        ]
    }, {
        title: "short s1 = 1; s1 = s1 + 1;有什么错? short s1 = 1; s1 += 1;有什么错：",
        data: [
            { context: "short s1 = 1; s1 = s1 + 1;有错，s1是short型，s1+1是int型,不能显式转化为short型。可修改为s1 =(short)(s1 + 1) 。short s1 = 1; " },
            { context: "s1 += 1正确。" }
        ]
    }, {
        title: "sleep() 和 wait() 有什么区别：",
        data: [
            { context: "搞线程的最爱" },
            { context: "<span class='remark'>sleep() </span>方法是使线程停止一段时间的方法。" },
            { context: "在sleep 时间间隔期满后，线程不一定立即恢复执行。这是因为在那个时刻，其它线程可能正在运行而且没有被调度为放弃执行，除非(a)“醒来”的线程具有更高的优先级 " },
            { context: "(b)正在运行的线程因为其它原因而阻塞。" },
            { context: "<span class='remark'> wait() </span>是线程交互时，如果线程对一个同步对象x 发出一个wait()调用，该线程会暂停执行，被调对象进入等待状态，直到被唤醒或等待时间到。" }
        ]
    }, {
        title: "数组有没有length()这个方法? String有没有length()这个方法：",
        data: [
            { context: "数组没有length()这个方法，有length的属性。" },
            { context: "String有有length()这个方法。" }
        ]
    }, {
        title: "Overload和Override的区别。Overloaded的方法是否可以改变返回值的类型 重载和重写",
        data: [
            { context: "方法的重写Overriding和重载Overloading是Java多态性的不同表现。" },
            { context: "重写Overriding是父类与子类之间多态性的一种表现，重载Overloading是一个类中多态性的一种表现。" },
            { context: "如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。子类的对象使用这个方法时，将调用子类中的定义，对它而言，父类中的定义如同被“屏蔽”了。" },
            { context: "如果在一个类中定义了多个同名的方法，它们或有不同的参数个数或有不同的参数类型，则称为方法的重载(Overloading)。Overloaded的方法是可以改变返回值的类型。" }
        ]
    }, {
        title: "Set里的元素是不能重复的，那么用什么方法来区分重复与否呢? 是用==还是equals()? 它们有何区别：",
        data: [
            { context: "Set里的元素是不能重复的，那么用iterator()方法来区分重复与否。equals()是判读两个Set是否相等。 " },
            { context: "equals()和==方法决定引用值是否指向同一对象equals()在类中被覆盖，为的是当两个分离的对象的内容和类型相配的话，返回真值。" }
        ]
    }, {
        title: "给我一个你最常见到的runtime exception：",
        data: [
            { context: "ArithmeticException, ArrayStoreException, BufferOverflowException, BufferUnderflowException, CannotRedoException, CannotUndoException, ClassCastException, CMMException, ConcurrentModificationException, DOMException, EmptyStackException, IllegalArgumentException, IllegalMonitorStateException, IllegalPathStateException, IllegalStateException, ImagingOpException, IndexOutOfBoundsException, MissingResourceException, NegativeArraySizeException, NoSuchElementException, NullPointerException, ProfileDataException, ProviderException, RasterFormatException, SecurityException, SystemException, UndeclaredThrowableException, UnmodifiableSetException, UnsupportedOperationException。" }
        ]
    }, {
        title: "error和exception有什么区别：",
        data: [
            { context: "<span class='remark'> error </span>表示恢复不是不可能但很困难的情况下的一种严重问题。比如说内存溢出。不可能指望程序能处理这样的情况。 " },
            { context: "<span class='remark'> exception </span>表示一种设计或实现问题。也就是说，它表示如果程序运行正常，从不会发生的情况。" }
        ]
    }, {
        title: "List, Set, Map是否继承自Collection接口：",
        data: [
            { context: "List，Set是。" },
            { context: "Map不是。" }
        ]
    }, {
        title: "abstract class和interface有什么区别： ",
        data: [
            { context: "&nbsp;&nbsp;  声明方法的存在而不去实现它的类被叫做抽象类（abstract class），它用于要创建一个体现某些基本行为的类，并为该类声明方法，但不能在该类中实现该类的情况。不能创建abstract 类的实例。然而可以创建一个变量，其类型是一个抽象类，并让它指向具体子类的一个实例。不能有抽象构造函数或抽象静态方法。Abstract 类的子类为它们父类中的所有抽象方法提供实现，否则它们也是抽象类为。取而代之，在子类中实现该方法。知道其行为的其它类可以在类中实现这些方法。" },
            { context: "&nbsp;&nbsp;   接口（interface）是抽象类的变体。在接口中，所有方法都是抽象的。多继承性可通过实现这样的接口而获得。接口中的所有方法都是抽象的，没有一个有程序体。接口只可以定义static final成员变量。接口的实现与子类相似，除了该实现类不能从接口定义中继承行为。当类实现特殊接口时，它定义（即将程序体给予）所有这种接口的方法。然后，它可以在实现了该接口的类的任何对象上调用接口的方法。由于有抽象类，它允许使用接口名作为引用变量的类型。通常的动态联编将生效。引用可以转换到接口类型或从接口类型转换，instanceof 运算符可以用来决定某对象的类是否实现了接口。" }
        ]
    }, {
        title: "接口 抽象类 接口之间的关系",
        data: [
            { context: "接口可以继承接口。抽象类可以实现(implements)接口，抽象类是否可继承实体类，但前提是实体类必须有明确的构造函数。" }
        ]
    }, {
        title: "启动一个线程是用run()还是start()：",
        data: [
            { context: "启动一个线程是调用start()方法，使线程所代表的虚拟处理机处于可运行状态，这意味着它可以由JVM调度并执行。" },
            { context: "这并不意味着线程就会立即运行。run()方法可以产生必须退出的标志来停止一个线程" }
        ]
    }, {
        title: "构造器Constructor是否可被override：",
        data: [
            { context: "构造器Constructor不能被继承，因此不能重写Override，但可以被重载Overloading。" }
        ]
    }, {
        title: "try {}里有一个return语句，那么紧跟在这个try后的finally {}里的code会不会被执行，什么时候被执行，在return前还是后：",
        data: [
            { context: "　会执行，在return前执行。" }
        ]
    }, {
        title: "两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对：",
        data: [
            { context: "不对，有相同的hash code。" }
        ]
    }, {
        title: "当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性，并可返回变化后的结果，那么这里到底是值传递还是引用传递： ",
        data: [
            { context: "　是值传递。Java 编程语言只由值传递参数。当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。对象的内容可以在被调用的方法中改变，但对象的引用是永远不会改变的。" }
        ]
    }, {
        title: "swtich是否能作用在byte上，是否能作用在long上，是否能作用在String上：",
        data: [
            { context: "switch（expr1）中，expr1是一个整数表达式。因此传递给 switch 和 case 语句的参数应该是 int、 short、 char 或者 byte。long 都不能作用于swtich。" },
            { context: "<span class='remark'>在java1.7以上 支持string 但是效率不高 编译器回吧string转换成hashcode</span>" }
        ]
    }, {
        title: "Hashtable和HashMap的区别：",
        data: [
            { context: "Hashtable继承自Dictionary类，而HashMap是Java1.2引进的Map interface的一个实现 " },
            { context: "HashMap允许将null作为一个entry的key或者value，而Hashtable不允许 " },
            { context: "还有就是，HashMap把Hashtable的contains方法去掉了，改成containsvalue和containsKey。因为contains方法容易让人引起误解。" },
            { context: "　最大的不同是，Hashtable的方法是Synchronize的，而HashMap不是，在 多个线程访问Hashtable时，不需要自己为它的方法实现同步，而HashMap 就必须为之提供外同步。" },
            { context: "Hashtable和HashMap采用的hash/rehash算法都大概一样，所以性能不会有很大的差异" }
        ]
    }, {
        title: "ArrayList和Vector的区别,HashMap和Hashtable的区别：",
        data: [
            { context: "答：就ArrayList与Vector主要从二方面来说." },
            { context: "一.同步性:Vector是线程安全的，也就是说是同步的，而ArrayList是线程序不安全的，不是同步的" },
            { context: "二.数据增长:当需要增长时,Vector默认增长为原来一培，而ArrayList却是原来的一半  " },
            { context: "就HashMap与HashTable主要从三方面来说。" },
            { context: "一.历史原因:Hashtable是基于陈旧的Dictionary类的，HashMap是Java 1.2引进的Map接口的一个实现 " },
            { context: "二.同步性:Hashtable是线程安全的，也就是说是同步的，而HashMap是线程序不安全的，不是同步的" },
            { context: "三.值：只有HashMap可以让你将空值作为一个表的条目的key或value。" }
        ]
    }, {
        title: "char型变量中能不能存贮一个中文汉字?为什么：",
        data: [
            { context: "答：是能够定义成为一个中文的，因为java中以unicode编码，一个char占2个字节，所以放一个中文是没问题的。" }
        ]
    }, {
        title: "jsp有哪些内置对象?作用分别是什么： ",
        data: [
            { context: "答:JSP共有以下9种基本内置组件（可与ASP的6种内部组件相对应）：" },
            { context: "　request 用户端请求，此请求会包含来自GET/POST请求的参数 " },
            { context: "response 网页传回用户端的回应 " },
            { context: "pageContext 网页的属性是在这里管理 " },
            { context: "session 与请求有关的会话期 " },
            { context: "application servlet 正在执行的内容 " },
            { context: "out 用来传送回应的输出 " },
            { context: "config servlet的构架部件 " },
            { context: "page JSP网页本身 " },
            { context: "exception 针对错误网页，未捕捉的例外。" }
        ]
    }, {
        title: "jsp有哪些动作?作用分别是什么：",
        data: [
            { context: "  答:JSP共有以下6种基本动作 " },
            { context: "jsp:include：在页面被请求的时候引入一个文件。 " },
            { context: "jsp:useBean：寻找或者实例化一个JavaBean。 " },
            { context: "jsp:setProperty：设置JavaBean的属性。 " },
            { context: "jsp:getProperty：输出某个JavaBean的属性。 " },
            { context: "jsp:forward：把请求转到一个新的页面。 " },
            { context: "jsp:plugin：根据浏览器类型为Java插件生成OBJECT或EMBED标记。" }
        ]
    }, {
        title: "JSP中动态INCLUDE与静态INCLUDE的区别： ",
        data: [
            { context: "答：动态INCLUDE用jsp:include动作实现 " },
            { context: "&lt;jsp:include page='included.jsp' flush='true' /&gt;它总是会检查所含文件中的变化，适合用于包含动态页面，并且可以带参数" },
            { context: "静态INCLUDE用include伪码实现,定不会检查所含文件的变化，适用于包含静态页面 " },
            { context: "<%@ include file='included.htm' %>。" }
        ]
    }, {
        title: "两种跳转方式分别是什么?有什么区别： ",
        data: [
            { context: "答：有两种，分别为： " },
            { context: "&lt;jsp:include page='included.jsp' flush='true'&gt; " },
            { context: "&lt;jsp:forward page= 'nextpage.jsp'/&gt;" },
            { context: "前者页面不会转向include所指的页面，只是显示该页的结果，主页面还是原来的页面。执行完后还会回来，相当于函数调用。并且可以带参数." },
            { context: "后者完全转向新页面，不会再回来。相当于go to 语句。" }
        ]
    }, {
        title: "说一说Servlet的生命周期：",
        data: [
            { context: "答:servlet有良好的生存期的定义，包括加载和实例化、初始化、处理请求以及服务结束。这个生存期由javax.servlet.Servlet接口的init,service和destroy方法表达。" }
        ]
    }, {
        title: "JAVA SERVLET API中forward() 与redirect()的区别：",
        data: [
            { context: "前者仅是容器中控制权的转向，在客户端浏览器地址栏中不会显示出转向后的地址；" },
            { context: "后者则是完全的跳转，浏览器将会得到跳转的地址，并重新发送请求链接。这样，从浏览器的地址栏中可以看到跳转后的链接地址。" },
            { context: "所以，前者更加高效，在前者可以满足需要时，尽量使用forward()方法，并且，这样也有助于隐藏实际的链接。" },
            { context: "在有些情况下，比如，需要跳转到一个其它服务器上的资源，则必须使用sendRedirect()方法。" }
        ]
    }, {
        title: "xml有哪些解析技术?区别是什么： ",
        data: [
            { context: "答:有DOM,SAX,STAX等 " },
            { context: "DOM:处理大型文件时其性能下降的非常厉害。这个问题是由DOM的树结构所造成的，这种结构占用的内存较多，而且DOM必须在解析文件之前把整个文档装入内存,适合对XML的随机访问" },
            { context: "SAX:不现于DOM,SAX是事件驱动型的XML解析方式。它顺序读取XML文件，不需要一次全部装载整个文件。当遇到像文件开头，文档结束，或者标签开头与标签结束时，它会触发一个事件，用户通过在其回调事件中写入处理代码来处理XML文件，适合对XML的顺序访问 " },
            { context: "STAX:Streaming API for XML (StAX)。" }
        ]
    }, {
        title: "你在项目中用到了xml技术的哪些方面?如何实现的：",
        data: [
            { context: "答:用到了数据存贮，信息配置两方面。" },
            { context: "在做数据交换平台时，将不能数据源的数据组装成XML文件，然后将XML文件压缩打包加密后通过网络传送给接收者，接收解密与解压缩后再同XML文件中还原相关信息进行处理。" },
            { context: "在做软件配置时，利用XML可以很方便的进行，软件的各种配置参数都存贮在XML文件中。" }
        ]
    }, {
        title: "EJB与JAVA BEAN的区别： ",
        data: [
            { context: "答:Java Bean 是可复用的组件，对Java Bean并没有严格的规范，理论上讲，任何一个Java类都可以是一个Bean。" },
            { context: "但通常情况下，由于Java Bean是被容器所创建（如Tomcat）的，所以Java Bean应具有一个无参的构造器，" },
            { context: "另外，通常Java Bean还要实现Serializable接口用于实现Bean的持久性。" },
            { context: "Java Bean实际上相当于微软COM模型中的本地进程内COM组件，它是不能被跨进程访问的。" },
            { context: "Enterprise Java Bean 相当于DCOM，即分布式组件。" },
            { context: "它是基于Java的远程方法调用（RMI）技术的，所以EJB可以被远程访问（跨进程、跨计算机）。" },
            { context: "但EJB必须被布署在诸如Webspere、WebLogic这样的容器中，EJB客户从不直接访问真正的EJB组件，而是通过其容器访问。" }
        ]
    }, {
        title: "MVC的各个部分都有那些技术来实现?如何实现：",
        data: [
            { context: "答:MVC是Model－View－Controller的简写" },
            { context: "'Model'代表的是应用的业务逻辑（通过JavaBean，EJB组件实现）， " },
            { context: "'View' 是应用的表示面（由JSP页面产生），" },
            { context: "'Controller' 是提供应用的处理过程控制（一般是一个Servlet），通过这种设计模型把应用逻辑，处理过程和显示逻辑分成不同的组件实现。这些组件可以进行交互和重用。" }
        ]
    }, {
        title: "J2EE是什么： ",
        data: [
            { context: "Je22是Sun公司提出的多层(multi-diered),分布式(distributed),基于组件(component-base)的企业级应用模型(enterpriese application model)." },
            { context: "在这样的一个应用系统中，可按照功能划分为不同的组件，这些组件又可在不同计算机上，并且处于相应的层次(tier)中。" },
            { context: "所属层次包括客户层(clietn tier)组件,web层和组件,Business层和组件,企业信息系统(EIS)层。" }
        ]
    }, {
        title: "WEB SERVICE名词解释。JSWDL开发包的介绍。JAXP、JAXM的解释。SOAP、UDDI,WSDL解释： ",
        data: [
            { context: "Web Service描述语言WSDL " },
            { context: "SOAP即简单对象访问协议(Simple Object Access Protocol)，它是用于交换XML编码信息的轻量级协议。" },
            { context: "UDDI 的目的是为电子商务建立标准；UDDI是一套基于Web的、分布式的、为Web Service提供的、信息注册中心的实现标准规范，" },
            { context: "同时也包含一组使企业能将自身提供的Web Service注册，以使别的企业能够发现的访问协议的实现标准" }
        ]
    }, {
        title: "STRUTS的应用(如STRUTS架构) ：",
        data: [
            { context: "Struts是采用Java Servlet/JavaServer Pages技术，开发Web应用程序的开放源码的framework。 " },
            { context: "采用Struts能开发出基于MVC(Model-View-Controller)设计模式的应用构架。 Struts有如下的主要功能：" },
            { context: "一.包含一个controller servlet，能将用户的请求发送到相应的Action对象。" },
            { context: "二.JSP自由tag库，并且在controller servlet中提供关联支持，帮助开发员创建交互式表单应用" },
            { context: "三.提供了一系列实用对象：XML处理、通过Java reflection APIs自动处理JavaBeans属性、国际化的提示和消息。" }
        ]
    }, {
        title: "开发中都用到了那些设计模式?用在什么场合：",
        data: [
            { context: "每个模式都描述了一个在我们的环境中不断出现的问题，然后描述了该问题的解决方案的核心。" },
            { context: "通过这种方式，你可以无数次地使用那些已有的解决方案，无需在重复相同的工作。" },
            { context: "主要用到了MVC的设计模式。用来开发JSP/Servlet或者J2EE的相关应用。简单工厂模式等。" }
        ]
    }, {
        title: "存储过程和函数的区别：",
        data: [
            { context: "存储过程是用户定义的一系列sql语句的集合，涉及特定表或其它对象的任务，用户可以调用存储过程，" },
            { context: "而函数通常是数据库已定义的方法，它接收参数并返回某种类型的值并且不涉及特定用户表。" }
        ]
    }, {
        title: "Class.forName的作用?为什么要用： ",
        data: [
            { context: "答：调用该访问返回一个以字符串指定类名的类的对象。" },
        ]
    }, {
        title: "Jdo是什么： ",
        data: [
            { context: "JDO是Java对象持久化的新的规范，为java data object的简称,也是一个用于存取某种数据仓库中的对象的标准化API。" },
            { context: "JDO提供了透明的对象存储，因此对开发人员来说，存储数据对象完全不需要额外的代码（如JDBC API的使用）。这些繁琐的例行工作已经转移到JDO产品提供商身上，使开发人员解脱出来，从而集中时间和精力在业务逻辑上。" },
            { context: "另外，JDO很灵活，因为它可以在任何数据底层上运行。" },
            { context: "JDBC只是面向关系数据库（RDBMS）JDO更通用，提供到任何数据底层的存储功能，比如关系数据库、文件、XML以及对象数据库（ODBMS）等等，使得应用可移植性更强。" },
        ]
    }, {
        title: "事务是什么：ACID（原子性、一致性、隔离性和持久性）",
        data: [
            { context: "事务是作为一个逻辑单元执行的一系列操作，一个逻辑工作单元必须有四个属性，称为 ACID（原子性、一致性、隔离性和持久性）属性，只有这样才能成为一个事务：" },
            { context: "原子性：事务必须是原子工作单元；对于其数据修改，要么全都执行，要么全都不执行。" },
            { context: "一致性：事务在完成时，必须使所有的数据都保持一致状态。在相关数据库中，所有规则都必须应用于事务的修改，以保持所有数据的完整性。事务结束时，所有的内部数据结构（如 B 树索引或双向链表）都必须是正确的。" },
            { context: "隔离性：由并发事务所作的修改必须与任何其它并发事务所作的修改隔离。事务查看数据时数据所处的状态，要么是另一并发事务修改它之前的状态，要么是另一事务修改它之后的状态，事务不会查看中间状态的数据。这称为可串行性，因为它能够重新装载起始数据，并且重播一系列事务，以使数据结束时的状态与原始事务执行的状态相同。" },
            { context: "持久性：事务完成之后，它对于系统的影响是永久性的。该修改即使出现系统故障也将一直保持。" },
        ]
    }, {
        title: "游标的作用？如何知道游标已经到了最后：",
        data: [
            { context: "游标用于定位结果集的行，通过判断全局变量@@FETCH_STATUS可以判断是否到了最后，通常此变量不等于0表示出错或到了最后。" },
        ]
    }, {
        title: "触发器分为事前触发和事后触发，这两种触发有和区别。语句级触发和行级触发有何区别：",
        data: [
            { context: "事前触发器运行于触发事件发生之前，而事后触发器运行于触发事件发生之后。通常事前触发器可以获取事件之前和新的字段值。" },
            { context: "语句级触发器可以在语句执行前或后执行，而行级触发在触发器所影响的每一行触发一次。" }
        ]
    }, {
        title: "bean 实例的生命周期：",
        data: [
            { context: "对于Stateless Session Bean、Entity Bean、Message Driven Bean一般存在缓冲池管理，" },
            { context: "而对于Entity Bean和Statefull Session Bean存在Cache管理，通常包含创建实例，设置上下文、创建EJB Object（create）、业务方法调用、remove等过程，" },
            { context: "对于存在缓冲池管理的Bean，在create之后实例并不从内存清除，而是采用缓冲池调度机制不断重用实例，" },
            { context: "而对于存在Cache管理的Bean则通过激活和去激活机制保持Bean的状态并限制内存中实例数量。" },
        ]
    }, {
        title: "remote接口和home接口主要作用：",
        data: [
            { context: " remote接口定义了业务方法，用于EJB客户端调用业务方法" },
            { context: " home接口是EJB工厂用于创建和移除查找EJB实例。" }
        ]
    }, {
        title: "客服端调用EJB对象的几个基本步骤：",
        data: [
            { context: "一、  设置JNDI服务工厂以及JNDI服务地址系统属性。" },
            { context: "二、  查找Home接口。" },
            { context: "三、  从Home接口调用Create方法创建Remote接口。" },
            { context: "四、  通过Remote接口调用其业务方法。" },
        ]
    }, {
        title: "是否可以继承String类： ",
        data: [
            { context: "String类是final类故不可以继承。" },
        ]
    }, {
        title: "面向对象的特征有哪些方面：",
        data: [
            { context: "抽象：抽象就是忽略一个主题中与当前目标无关的那些方面，以便更充分地注意与当前目标有关的方面。抽象并不打算了解全部问题，而只是选择其中的一部分，暂时不用部分细节。抽象包括两个方面，一是过程抽象，二是数据抽象。" },
            { context: "继承：继承是一种联结类的层次模型，并且允许和鼓励类的重用，它提供了一种明确表述共性的方法。对象的一个新类可以从现有的类中派生，这个过程称为类继承。新类继承了原始类的特性，新类称为原始类的派生类（子类），而原始类称为新类的基类（父类）。派生类可以从它的基类那里继承方法和实例变量，并且类可以修改或增加新的方法使之更适合特殊的需要。" },
            { context: "封装：封装是把过程和数据包围起来，对数据的访问只能通过已定义的界面。面向对象计算始于这个基本概念，即现实世界可以被描绘成一系列完全自治、封装的对象，这些对象通过一个受保护的接口访问其他对象。" },
            { context: "多态性：多态性是指允许不同类的对象对同一消息作出响应。多态性包括参数化多态性和包含多态性。多态性语言具有灵活、抽象、行为共享、代码共享的优势，很好的解决了应用程序函数同名问题。" },
        ]
    }, {
        title: "String是最基本的数据类型吗：",
        data: [
            { context: "基本数据类型包括byte、int、char、long、float、double、boolean和short。" },
            { context: "java.lang.String类是final类型的，因此不可以继承这个类、不能修改这个类。为了提高效率节省空间，我们应该用StringBuffer类。" },
        ]
    }, {
        title: "String 和StringBuffer的区别：",
        data: [
            { context: "JAVA平台提供了两个类：String和StringBuffer，它们可以储存和操作字符串，即包含多个字符的字符数据" },
            { context: "这个String类提供了数值不可改变的字符串。" },
            { context: "而这个StringBuffer类提供的字符串进行修改。当你知道字符数据要改变的时候你就可以使用StringBuffer。典型地，你可以使用StringBuffers来动态构造字符数据。" },
        ]
    }, {
        title: "说出ArrayList,Vector, LinkedList的存储性能和特性：",
        data: [
            { context: "ArrayList和Vector都是使用数组方式存储数据，此数组元素数大于实际存储的数据以便增加和插入元素，它们都允许直接按序号索引元素，但是插入元素要涉及数组元素移动等内存操作，所以索引数据快而插入数据慢" },
            { context: "Vector由于使用了synchronized方法（线程安全），通常性能上较ArrayList差，" },
            { context: "而LinkedList使用双向链表实现存储，按序号索引数据需要进行前向或后向遍历，但是插入数据时只需要记录本项的前后项即可，所以插入速度较快。" },
        ]
    }, {
        title: "同步和异步有何异同，在什么情况下分别使用他们？举例说明。",
        data: [
            { context: "如果数据将在线程间共享。例如正在写的数据以后可能被另一个线程读到，或者正在读的数据可能已经被另一个线程写过了，那么这些数据就是共享数据，必须进行同步存取。" },
            { context: "当应用程序在对象上调用了一个需要花费很长时间来执行的方法，并且不希望让程序等待方法的返回时，就应该使用异步编程，在很多情况下采用异步途径往往更有效率。" }
        ]
    }, {
        title: "heap和stack有什么区别：",
        data: [
            { context: "栈是一种线形集合，其添加和删除元素的操作应在同一段完成。栈按照后进先出的方式进行处理。" },
            { context: "堆是栈的一个组成元素。" }
        ]
    }, {
        title: "EJB与JAVA BEAN的区别:",
        data: [
            { context: "java Bean 是可复用的组件，对Java Bean并没有严格的规范，理论上讲，任何一个Java类都可以是一个Bean。" },
            { context: "但通常情况下，由于Java Bean是被容器所创建（如Tomcat）的，所以Java Bean应具有一个无参的构造器，" },
            { context: "另外，通常Java Bean还要实现Serializable接口用于实现Bean的持久性。" },
            { context: "Java Bean实际上相当于微软COM模型中的本地进程内COM组件，它是不能被跨进程访问的。" },
            { context: "Enterprise Java Bean 相当于DCOM，即分布式组件。它是基于Java的远程方法调用（RMI）技术的，所以EJB可以被远程访问（跨进程、跨计算机）。" },
            { context: "但EJB必须被布署在诸如Webspere、WebLogic这样的容器中，EJB客户从不直接访问真正的EJB组件，而是通过其容器访问。" },
            { context: "EJB容器是EJB组件的代理，EJB组件由容器所创建和管理。客户通过容器来访问真正的EJB组件。" },
        ]
    }, {
        title: "Static Nested Class 和 Inner Class的不同:",
        data: [
            { context: "Static Nested Class是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。" },
            { context: "而通常的内部类需要在外部类实例化后才能实例化。" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }, {
        title: "",
        data: [
            { context: "" },
            { context: "" }
        ]
    }
    ]
}

data = [demo01];