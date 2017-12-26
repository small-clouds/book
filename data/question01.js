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
    }
    ]
}

data = [demo01];