//春哥总结的面试题目-spring
var demo01 = {
    title: "JAVA面试题--spring",
    name: "春哥总结的",
    data: [{
        title: "1、ioc和aop的原理说一下",
        data: [
            { context: "IoC（Inversion of Control）就是由容器控制程序之间的关系，而非传统实现中，由程序代码直接操控。这也就是所谓“控制反转”的概念所在。控制权由应用代码中转到了外部容器，控制权的转移是所谓反转。IoC还有另外一个名字——“依赖注入（Dependency Injection）”。从名字上理解，所谓依赖注入，即组件之间的依赖关系由容器在运行期决定，形象地说，即由容器动态地将某种依赖关系注入到组件之中" },
            { context: "IoC是近年来兴起的一种思想，不仅仅是编程思想。主要是协调各组件间相互的依赖关系，同时大大提高了组件的可移植性，组件的重用机会也变得更多。在传统的实现中，由程序内部代码来控制程序之间的关系。我们经常使用new关键字来实现两组键间关系的组合，这种实现的方式会造成组件之间耦合(一个好的设计，不但要实现代码重用，还要将组件间关系解耦)。IoC很好的解决了该问题，它将实现组件间关系从程序内部提到外部容器来管理。也就是说由容器在运行期将组件间的某种依赖关系动态的注入组件中。控制程序间关系的实现交给了外部的容器来完成。" },
            { context: "依赖查找：容器提供回调接口和上下文环境给组件。EJB和Apache Avalon都是使用这种方式。    " },
            { context: "依赖注入：组件不做定位查询，只是提供普通的Java方法让容器去决定依赖关系。容器全权负责组件的装配，它会把符合依赖关系的对象通过JavaBean属性或者构造子传递给需要的对象" },
            { context: "AOP为Aspect Oriented Programming的缩写，意为：面向切面编程，可以通过预编译方式和运行期动态代理实现在不修改源代码的情况下给程序动态统一添加功能的一种技术。" },
            { context: "AOP主要应用于日志记录，性能统计，安全控制,事务处理等方面。" },
            { context: "实现原理：一是采用动态代理技术，利用截取消息的方式，对该消息进行装饰，以取代原有对象行为的执行；二是采用静态植入的方式，引入特定的语法创建“方面”，从而使得编译器可以在编译期间织入有关“方面”的代码，属于静态代理；" },
        ]
    }, {
        title: "2、spring中的过滤器和拦截器有什么区别，你是如何理解的",
        data: [
            { context: "Spring的拦截器与Servlet的Filter都是AOP编程思想的体现，都能实现权限价差，日志记录。" },
            { context: "适用范围不同：过滤器Filter是Servlet规范规定的，只能用于Web程序中，而拦截器既可以用于web程序，也可以用于Application中。" },
            { context: "规范不同：过滤器Filter是在Servlet规范中定义的，是Servlet支持的，而拦截器是在Spring容器内的。是Spring框架支持的。" },
            { context: "使用的资源不同：同其他的代码块一样，拦截器也是一个Spring的组件，归Spring管理，配置在Spring文件中，因此能使用Spring只里的任何资源，对象。例如Service对象，数据源，事务管理，通过IOC得注入到拦截器即可，而Filter则不能。" },
            { context: "深度不同：过滤器Filter在只在Servlet前后起作用。而拦截器能够深入到方法前后，异常抛出前后，因此拦截器的使用具有更大的弹性。所以在Spring构架的程序中。要优先使用拦截器。" },
        ]
    }, {
        title: "3、spring boot 有什么你使用比较好的特性，或者说为什么使用spring boot",
        data: [
            { context: "能够快速创建基于Spring的应用程序；" },
            { context: "能够直接使用java的main方法启动内嵌的Tomcat，Jetty服务器运行Spring boot程序，不需要部署war包文件；" },
            { context: "提供约定的starter POM来简化来简化Maven配置，让Maven配置变得简单；" },
            { context: "根据项目的maven依赖配置，Spring boot自动配置Spring,SpringMVC等其它开源框架；" },
            { context: "自动管理依赖，自带应用监控；" },
            { context: "支持关系数据库和非关系数据库；" },
            { context: "支持各种IED，如IntelliJ IDEA、NetBeans；" },
            { context: "" },
        ]
    }, {
        title: "4、spring cloud 和dubbo的区别是什么",
        data: [
            { context: "Dubbo和Spring Cloud并不是完全的竞争关系，两者所解决的问题域不一样：Dubbo的定位始终是一款RPC框架，而Spring Cloud的目的是微服务架构下的一站式解决方案。" },
            { context: "" },
        ]
    }, {
        title: "5、beanFactory 和ApplicationContext有什么区别",
        data: [
            { context: "BeanFactory：是Spring里面最低层的接口，提供了最简单的容器的功能，只提供了实例化对象和拿对象的功能；" },
            { context: "ApplicationContext：应用上下文，继承BeanFactory接口，它是Spring的一个更高级的容器，提供了更多的有用的功能；" },
            { context: "BeanFactory：BeanFactory在启动的时候不会去实例化Bean，中有从容器中拿Bean的时候才会去实例化；" },
            { context: "ApplicationContext：ApplicationContext在启动的时候就把所有的Bean全部实例化了。它还可以为Bean配置lazy-init=true来让Bean延迟实例化； " },
            { context: "延迟实例化的优点：（BeanFactory）应用启动的时候占用资源很少；对资源要求较高的应用，比较有优势；" },
            { context: "不延迟实例化的优点： （ApplicationContext）" },
            { context: "1. 所有的Bean在启动的时候都加载，系统运行的速度快； " },
            { context: "2. 在启动的时候所有的Bean都加载了，我们就能在系统启动的时候，尽早的发现系统中的配置问题 " },
            { context: "3. 建议web应用，在启动的时候就把所有的Bean都加载了。（把费时的操作放到系统启动中完成" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "6、spring事务的传播机制说一下",
        data: [
            { context: "可通过spring配置或注解来设置  @Transactional(propagation=Propagation.REQUIRED) " },
            { context: "REQUIRED（默认）：支持使用当前事务，如果当前事务不存在，创建一个新事务。" },
            { context: "SUPPORTS：支持使用当前事务，如果当前事务不存在，则不使用事务。" },
            { context: "MANDATORY：中文翻译为强制，支持使用当前事务，如果当前事务不存在，则抛出Exception。" },
            { context: "REQUIRES_NEW：创建一个新事务，如果当前事务存在，把当前事务挂起。" },
            { context: "NOT_SUPPORTED：无事务执行，如果当前事务存在，把当前事务挂起。" },
            { context: "NEVER：无事务执行，如果当前有事务则抛出Exception。" },
            { context: "NESTED：嵌套事务，如果当前事务存在，那么在嵌套的事务中执行。如果当前事务不存在，则表现跟REQUIRED一样。" },
            { context: "四种隔离级别  @Transactional(isolation = Isolation.READ_UNCOMMITTED)" },
            { context: "事务隔离级别	脏读	不可重复读	幻读" },
            { context: "读未提交(Read-Uncommitted)	是	是	是" },
            { context: "不可重复读(Read-Committed)	否	是	是" },
            { context: "可重复读(Repeatable-Read)	否	否	是" },
            { context: "串行化(Serializable)	否	否	否" },
            { context: "1、脏读：事务A读取了事务B更新的数据，然后B回滚操作，那么A读取到的数据是脏数据" },
            { context: "2、不可重复读：事务 A 多次读取同一数据，事务 B 在事务A多次读取的过程中，对数据作了更新并提交，导致事务A多次读取同一数据时，结果 不一致。" },
            { context: "3、幻读：系统管理员A将数据库中所有学生的成绩从具体分数改为ABCDE等级，但是系统管理员B就在这个时候插入了一条具体分数的记录，当系统管理员A改结束后发现还有一条记录没有改过来，就好像发生了幻觉一样，这就叫幻读。" },
            { context: "小结：不可重复读的和幻读很容易混淆，不可重复读侧重于修改，幻读侧重于新增或删除。解决不可重复读的问题只需锁住满足条件的行，解决幻读需要锁表" },
        ]
    }, {
        title: "7、spring 常用的注解有哪些",
        data: [
            { context: "1.@RestController  	@RequestMapping(value = \"add\", method = RequestMethod.PUT)" },
            { context: "@PathVariable && @RequestParam(name=\"ids\") List<Long> ids" },
            { context: "" },
            { context: "3. @Resource和@Autowired  @Resource和@Autowired都是做bean的注入时使用，其实@Resource并不是Spring的注解，它的包是javax.annotation.Resource，需要导入，但是Spring支持该注解的注入。" },
            { context: "4、@PathVariable" },
            { context: "@ResponseBody　" },
            { context: "@service" },
            { context: "@component 把普通pojo实例化到spring容器中，相当于配置文件中的<bean id=\"\" class=\" \" />" },
            { context: "" },
        ]
    }, {
        title: "8、spring加载文件的顺序是什么",
        data: [
            { context: "1.1 springboot启动会扫描一下位置的application.properties或者application.yml作为默认的配置文件   ---加载的优先级顺序是从上向下加载，并且所有的文件都会被加载，高优先级的内容会覆盖底优先级的内容，形成互补配置" },
            { context: "外部配置文件加载位置" },
            { context: "1.命令行参数" },
            { context: "2.来自java:comp/env的JNDI属性" },
            { context: "3.Java系统属性（System.getProperties()）" },
            { context: "4.操作系统环境变量" },
            { context: "5.RandomValuePropertySource配置的random.*属性值  ;由jar包外向jar包内进行寻找； 优先加载带proﬁle" },
            { context: "6.jar包外部的application-{proﬁle}.properties或application.yml(带spring.proﬁle)配置文件" },
            { context: "7.jar包内部的application-{proﬁle}.properties或application.yml(带spring.proﬁle)配置文件  -- 再来加载不带proﬁle" },
            { context: "8.jar包外部的application.properties或application.yml(不带spring.proﬁle)配置文件" },
            { context: "9.jar包内部的application.properties或application.yml(不带spring.proﬁle)配置文件" },
            { context: "10.@Conﬁguration注解类上的@PropertySource" },
            { context: "11.通过SpringApplication.setDefaultProperties指定的默认属性" },
            { context: "所有支持的配置加载来源；" },
        ]
    },
    ]
}
//春哥总结的面试题目-java
var demo02 = {
    title: "JAVA面试题--java",
    name: "春哥总结的",
    data: [{
        title: "1、java集合有哪些（List；Map；Set）？hashMap和ArrayList的源码是否看过？ConcurentHashMap使用过吗？如何处理并发的。",
        data: [
            { context: "List一个是存储单列数据的集合，Map另一个是存储键和值这样的双列数据的集合，List中存储的数据是有顺序，并且允许重复；Map中存储的数据是没有顺序的，其键是不能重复的，它的值是可以有重复的。Set集合的特点:不能存储相同的元素。" },
            { context: "" },
            { context: "hashMap和hashtable和ConcurentHashMap 原理什么的https://www.cnblogs.com/heyonggang/p/9112731.html" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "2、抽象类和接口的区别是什么？",
        data: [
            { context: "他们都不能实例化对象，都可以包含抽象方法，而且抽象方法必须被继承的类全部实现。" },
            { context: "1、抽象类和接口都不能直接实例化，如果要实例化，抽象类变量必须指向实现所有抽象方法的子类对象，接口变量必须指向实现所有接口方法的类对象。" },
            { context: "2、抽象类要被子类继承，接口要被类实现。" },
            { context: "3、接口只能做方法申明，抽象类中可以做方法申明，也可以做方法实现" },
            { context: "4、接口里定义的变量只能是公共的静态的常量，抽象类中的变量是普通变量。" },
            { context: "5、抽象类里的抽象方法必须全部被子类所实现，如果子类不能全部实现父类抽象方法，那么该子类只能是抽象类。同样，一个实现接口的时候，如不能全部实现接口方法，那么该类也只能为抽象类。" },
            { context: "6、抽象方法只能申明，不能实现，接口是设计的结果" },
            { context: "7、抽象类里可以没有抽象方法" },
            { context: "8、如果一个类里有抽象方法，那么这个类只能是抽象类" },
            { context: "9、抽象方法要被实现，所以不能是静态的，也不能是私有的。" },
            { context: "10、接口可继承接口，并可多继承接口，但类只能单根继承。" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "3、synchronize和lock区别，底层实现原理？",
        data: [
            { context: "1、synchronized 是Java内置的关键字，使用后会自动释放锁，-- Lock是java.util.concurrent.Locks 包下的一个接口，必须要手动释放。特别是在发生异常时，需要在 finally 块中进行手动释放，否则会发生死锁行为" },
            { context: "2、Lock可响应中断，而synchronized 不能响应中断，并且Lock提供了更丰富的方法实现；" },
            { context: "3、synchronized 是非公平锁，即不能保证等待锁线程的顺序，Lock的实现 ReentrantLock 可通过实例化true or false 的构造参数实现公平锁和非公平锁，默认为非公平锁[ReentrantLock是唯一实现了Lock接口的类，并且ReentrantLock提供了更多的方法]" },
            { context: "5、synchronized无法判断是否获取锁的状态，Lock可以判断是否获取到锁；" },
            { context: "6、Lock锁适合大量同步的代码的同步问题，synchronized锁适合代码少量的同步问题。" },
            { context: "7、都是可重入锁：在执行对象中所有同步方法不用再次获得锁" },
            { context: "8、synchronized是一个悲观锁，Lock是一个乐观锁（底层基于volatile和cas实现），" },
            { context: "二、底层实现" },
            { context: "1、synchronznized映射成字节码指令就是增加两个指令：monitorenter、monitorexit，" },
            { context: "当一条线程执行时遇到monitorenter指令时，它会尝试去获得锁，如果获得锁，那么所计数器+1（为什么要加1，因为它是可重入锁，可根据这个琐计数器判断锁状态），如果没有获得锁，那么阻塞，" },
            { context: "当它遇到一个monitoerexit时，琐计数器会-1，当计数器为0时，就释放锁" },
            { context: "（tips：节码中出现的两个monitoerexit指令的原因是：一个正常执行-1，令一个异常时执行，这两个用goto的方式只执行一个）" },
            { context: "2、Lock底层则基于volatile和cas实现" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "4、设计模式用过哪些，能写一下单例模式的实现吗？",
        data: [
            { context: "设计模式是世界上各种各样程序员用来解决特定设计问题的尝试和测试的方法。设计模式是代码可用性的延伸。" },
            { context: "总共23种，分为三大类：创建型，结构型，行为型" },
            { context: "我只记得其中常用的6、7种，分别是：" },
            { context: "创建型（工厂、工厂方法、抽象工厂、单例）" },
            { context: "结构型（包装、适配器，组合，代理）" },
            { context: "行为（观察者，模版，策略）" },
            { context: "工厂模式：工厂模式是一种经常被使用到的模式，根据工厂模式实现的类可以根据提供的数据生成一组类中某一个类的实例，通常这一组类有一个公共的抽象父类并且实现了相同的方法，但是这些方法针对不同的数据进行了不同的操作。首先需要定义一个基类，该类的子类通过不同的方法实现了基类中的方法。然后需要定义一个工厂类，工厂类可以根据条件生成不同的子类实例。当得到子类的实例后，开发人员可以调用基类中的方法而不必考虑到底返回的是哪一个子类的实例。" },
        ]
    }, {
        title: "5、线程池用过吗？如何启动线程，是否看过源码？",
        data: [
            { context: "<a href='https://www.cnblogs.com/javazhiyin/p/10605511.html'>详情</a> " },
            { context: "如何创建使用线程池?" },
            { context: "1.创建一个定长线程池，可控制线程最大并发数，超出的线程会在队列中等待。" },
            { context: "2.(JDK8新增)会根据所需的并发数来动态创建和关闭线程。能够合理的使用CPU进行对任务进行并发操作，所以适合使用在很耗时的任务。" },
            { context: "3.创建一个可缓存的线程池,可灵活回收空闲线程，若无可回收，则新建线程。" },
            { context: "4.创建一个单线程的线程池。" },
            { context: "5.创建一个定长线程池，支持定时及周期性任务执行。" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "6、java锁都有哪些？偏向锁、轻量级锁，重量级锁是什么。公平锁和非公平锁又是什么",
        data: [
            { context: "<a href='https://blog.csdn.net/zqz_zqz/article/details/70233767'>原文链接</a>  " },
            { context: "<a href='https://www.douban.com/note/713452249/'>公平锁和非公平锁</a>" },
            { context: "重量级锁Synchronized  Synchronized是非公平锁。[ Synchronized在线程进入ContentionList时，等待的线程会先尝试自旋获取锁，如果获取不到就进入ContentionList，这明显对于已经进入队列的线程是不公平的，还有一个不公平的事情就是自旋获取锁的线程还可能直接抢占OnDeck线程的锁资源。]" },
            { context: "偏向锁，顾名思义，它会偏向于第一个访问锁的线程，如果在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁。 " },
            { context: "轻量级锁是由偏向所升级来的，偏向锁运行在一个线程进入同步块的情况下，当第二个线程加入锁争用的时候，偏向锁就会升级为轻量级锁； " },
            { context: "不过要知道java并发包里很多锁默认的策略都是非公平的，也就是可能后来的线程先加锁，先来的线程后加锁。" },
            { context: "而一般情况下，非公平的策略都没什么大问题，但是大家要对这个策略做到心里有数，在开发的时候，需要自己来考虑和权衡是要用公平策略还是非公平策略。" },
            { context: "CAS ： 在计算机科学中，比较和交换（Conmpare And Swap）是用于实现多线程同步的原子指令。" },
        ]
    }
    ]
}
//春哥总结的面试题目-并发
var demo03 = {
    title: "JAVA面试题--并发",
    name: "春哥总结的",
    data: [
        {
            title: "1、ThreadLocal用过吗？底层实现原理是怎样的",
            data: [
                { context: "<a href='https://www.jianshu.com/p/3c5d7f09dfbd'>ThreadLocal</a>" },
                { context: "总结 算是底层吧" },
                { context: "对于某一ThreadLocal来讲，他的索引值i是确定的，在不同线程之间访问时访问的是不同的table数组的同一位置即都为table[i]，只不过这个不同线程之间的table是独立的。" },
                { context: "对于同一线程的不同ThreadLocal来讲，这些ThreadLocal实例共享一个table数组，然后每个ThreadLocal实例在table中的索引i是不同的。" },
                { context: "特性" },
                { context: "ThreadLocal和Synchronized都是为了解决多线程中相同变量的访问冲突问题，不同的点是" },
                { context: "Synchronized是通过线程等待，牺牲时间来解决访问冲突" },
                { context: "ThreadLocal是通过每个线程单独一份存储空间，牺牲空间来解决冲突，并且相比于Synchronized，ThreadLocal具有线程隔离的效果，只有在线程内才能获取到对应的值，线程外则不能访问到想要的值。" },
                { context: "正因为ThreadLocal的线程隔离特性，使他的应用场景相对来说更为特殊一些。在android中Looper、ActivityThread以及AMS中都用到了ThreadLocal。当某些数据是以线程为作用域并且不同线程具有不同的数据副本的时候，就可以考虑采用ThreadLocal。" },
                { context: "ThreadLocal实现主要涉及Thread，ThreadLocal，ThreadLocalMap这三个类。" }
            ]
        }, {
            title: "2、CAS知道吗？ABA问题怎么解决的？JUC包下的类都用过哪些",
            data: [
                { context: "<a href='https://www.cnblogs.com/Tiancheng-Duan/p/11528504.html'>CAS和ABA</a>" },
                { context: "CAS ： 在计算机科学中，比较和交换（Conmpare And Swap）是用于实现多线程同步的原子指令。" },
                { context: "JUC就是jdk并发包【目录简称】" },
                { context: "有些文章或代码中提到通过CAS执行多个变量的原子操作，其实本质并不是针对多个变量，而是针对这些变量的集合或者总的对象的Reference操作的。" },
                { context: "ABA问题的本质就是由于对多线程下CAS流程控制的缺乏，而导致的信息缺失。表现出来的就是由于缺乏必要信息，而产生了隐患" },
                { context: "解决方案 - 用我的话说呢，就是通过引入版本号，了解到线程执行操作时，是否有别的线程做了类似ABA的事情，从而使得本线程的CAS操作重新执行。" },
            ]
        }, {
            title: "3.Java高并发处理总结",
            data: [
                { context: "1 代码层面： <a href='https://blog.csdn.net/zhousenshan/article/details/82502616/'>锁优化措施</a>、尽量简化事务和减少事务" },
                { context: "2 应用层面：缓存 队列 限流 熔断 " },
                { context: "3 数据库层面： 分库分表 读写分离" },
                { context: "4 服务器，用空间换时间" },
                { context: "" },
                { context: "" },
            ]
        },]
}
//春哥总结的面试题目-mybatis
var demo04 = {
    title: "JAVA面试题--mybatis",
    name: "春哥总结的",
    data: [{
        //一般数据库的优化是，先优化一些查询操作，然后优化业务的逻辑，或者加入缓存，最后不行再用集群，最后再分库分表。https://www.jianshu.com/p/2d8ff87d030c
        title: "1、Mybatis插件有了解过吗",
        data: [
            { context: "mybatis插件就是对ParameterHandler、ResultSetHandler、StatementHandler、Executor这四个接口上的方法进行拦截，利用JDK动态代理机制，为这些接口的实现类创建代理对象，在执行方法时，先去执行代理对象的方法，从而执行自己编写的拦截逻辑，" },
            { context: "设计模式：代理模式、责任链模式；" },
            { context: "软件思想：AOP编程思想，降低模块间的耦合度，使业务模块更加独立；" },
        ]
    }, {
        title: "2、实现原理能说一下嘛",
        data: [
            { context: "通常的Mapper接口我们都没有实现的方法却可以使用，是为什么呢？答案很简单 动态代理" },
            { context: "" }
        ]
    },
    {
        title: "3、一级缓存和二级缓存说一下",
        data: [
            { context: "<a href='https://blog.csdn.net/llziseweiqiu/article/details/79413130'>一级缓存和二级缓存</a>" },
            { context: "一级缓存基于sqlSession默认开启,在操作数据库时需要构造SqlSession对象，在对象中有一个HashMap用于存储缓存数据。不同的SqlSession之间的缓存数据区域是互相不影响的。" },
            { context: "一级缓存的作用域是SqlSession范围的，当在同一个sqlSession中执行两次相同的sql语句时，第一次执行完毕会将数据库中查询的数据写到缓存（内存）" },
            { context: "二级缓存是mapper级别的缓存。使用二级缓存时，多个SqlSession使用同一个Mapper的sql语句去操作数据库，得到的数据会存在二级缓存区域，它同样是使用HashMap进行数据存储。相比一级缓存SqlSession，二级缓存的范围更大，多个Sqlsession可以共用二级缓存，二级缓存是跨SqlSession的。" },
            { context: "二级缓存的作用域是mapper的同一个namespace。不同的sqlSession两次执行相同的namespace下的sql语句，且向sql中传递的参数也相同，即最终执行相同的sql语句，则第一次执行完毕会将数据库中查询的数据写到缓存，第二次查询会从缓存中获取数据，不再去底层数据库查询，从而提高效率。" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
        ]
    },
    {
        title: "4、#{}和${} 的区别是什么",
        data: [
            { context: "#将传入的数据都当成一个字符串，会对自动传入的数据加一个双引号。$将传入的数据直接显示生成在sql中。" },
            { context: "" },
            { context: "#方式能够很大程度防止sql注入。$方式无法防止Sql注入。" },
            { context: "$方式一般用于传入数据库对象，例如传入表名. 一般能用#的就别用$." },
            { context: "MyBatis排序时使用order by 动态参数时需要注意，用$而不是#" },
            { context: "" },
            { context: "" },
        ]
    },
    ]
}
//春哥总结的面试题目-redis
var demo05 = {
    title: "JAVA面试题--spring",
    name: "春哥总结的",
    data: [{
        title: "1、你们公司用redis是做什么的，基本类型知道多少",
        data: [
            { context: "String Hash List Set Sorted set pub/sub Transactions" },
            { context: "少量数据存储，高速读写访问。此类产品通过数据全部in-momery 的方式来保证高速访问，同时提供数据落地的功能，实际这正是Redis最主要的适用场景。" },
            { context: "" },
            { context: "" },
        ]
    }, {
        title: "2、redis的内存淘汰策略都有哪些？",
        data: [
            { context: "主要分为为LRU淘汰、TTL淘汰、随机淘汰" },
            { context: "1. volatile-lru：从设置过期时间的数据集(server.db[i].expires)中挑选出最近最少使用的数据淘汰。" },
            { context: "2. volatile-ttl：从设置过期时间的数据集(server.db[i].expires)中挑选将要过期的数据淘汰，ttl值越大越优先被淘汰。" },
            { context: "3. volatile-random：从已设置过期时间的数据集(server.db[i].expires)中任意选择数据淘汰。" },
            { context: "4. allkeys-lru：从数据集(server.db[i].dict)中挑选最近最少使用的数据淘汰，该策略要淘汰的key面向的是全体key集合，而非过期的key集合。" },
            { context: "5. allkeys-random：从数据集(server.db[i].dict)中选择任意数据淘汰。" },
            { context: "6. no-enviction：禁止驱逐数据，也就是当内存不足以容纳新入数据时，新写入操作就会报错，请求可以继续进行，线上任务也不能持续进行，采用no-enviction策略可以保证数据不被丢失，这也是系统默认的一种淘汰策略。" },
        ]
    },
    {
        title: "3、redis持久化机制都有哪些（RDB和AOF）",
        data: [
            { context: "RDB 有两种选择，一种是手动执行持久化数据命令来让redis进行一次数据快照，另一种则是根据你所配置的配置文件 的 策略，达到策略的某些条件时来自动持久化数据" },
            { context: "AOF,append only file。你所执行的每一条指令，都会被记录到appendonly.aof文件中。但事实上，并不会立即将命令写入到硬盘文件中，而是写入到硬盘缓存，在接下来的策略中，配置多久来从硬盘缓存写入到硬盘文件。所以在一定程度一定条件下，还是会有数据丢失，不过你可以大大减少数据损失。" },
            { context: "RDB每次进行快照方式会重新记录整个数据集的所有信息。RDB在恢复数据时更快，可以最大化redis性能，子进程对父进程无任何性能影响。" },
            { context: "AOF有序的记录了redis的命令操作。意外情况下数据丢失甚少。他不断地对aof文件添加操作日志记录，你可能会说，这样的文件得多么庞大呀。是的，的确会变得庞大，但redis会有优化的策略，" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
        ]
    },
    {
        title: "4、redis主从",
        data: [
            { context: "Redis主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布 记录。同步对读取操作的可扩展性和数据冗余很有帮助。" },
            { context: "Redis的主从结构可以采用一主多从或者级联结构，Redis主从复制可以根据是否是全量分为全量同步和增量同步。" },
            { context: "" },
            { context: "Redis主从同步策略" },
            { context: "主从刚刚连接的时候，进行全量同步；全同步结束后，进行增量同步。当然，如果有需要，slave 在任何时候都可以发起全量同步。redis 策略是，无论如何，首先会尝试进行增量同步，如不成功，要求从机进行全量同步。" },
        ]
    },
    {
        title: "5、redis分布式锁怎么实现、",
        data: [
            { context: "1. 数据库乐观锁；2. 基于Redis的分布式锁；3. 基于ZooKeeper的分布式锁。" },
            { context: "和java的锁差不多  不过就是语言不一样罢了" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
            { context: "" },
        ]
    },
    {
        title: "6、什么是缓存穿透？什么是缓存雪崩？",
        data: [
            { context: "<a href=\"https://baijiahao.baidu.com/s?id=1619572269435584821&wfr=spider&for=pc\">解释的好形象</a>" },
            { context: "缓存穿透，是指查询一个数据库一定不存在的数据。" },
            { context: "缓存雪崩，是指在某一个时间段，缓存集中过期失效。" },
            { context: "缓存击穿，是指一个key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个屏障上凿开了一个洞。" },
        ]
    },
    ]
}
//春哥总结的面试题目-MQ
var demo06 = {
    title: "JAVA面试题--MQ",
    name: "春哥总结的",
    data: [
        {
            title: "1、简单说一下MQ的作用",
            data: [
                { context: "实现高性能，高可用，可伸缩和最终一致性架构。是大型分布式系统不可缺少的中间件。" },
                { context: "消息队列在实际应用中常用的使用场景。异步处理，应用解耦，流量削锋和消息通讯四个场景。" },
                { context: "消息队列中间件是分布式系统中重要的组件，主要解决应用耦合，异步消息，流量削锋等问题。" },
                { context: "" },
                { context: "" },
                { context: "" },
            ]
        }, {
            title: "2、MQ的消息如何顺序执行的",
            data: [
                { context: "有时候我们需要消费者消费消息是顺序消费的。比如生成一个订单，先扣库存，然后扣款，这两条消息，由于现在系统都是分布式的，我们可能需要在有多台机器的多个消费者时，这两条消息是顺序消费的。在activemq中，有两种方式来保证，消息消费的顺序性。" },
                { context: "点对点通信模式:1.每个消息只有一个消费者2.发送者和消费者没有时间上的约束3.接收方在接受完消息后，需要向消息队列应答成功" },
                { context: "发布者发布一个消息，通过Topic传递给所有的客户端:1.一个消息可以有多个订阅者2.发布者与订阅者具有时间约束，针对某个Topic的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息，且必须保持运行的状态3.为了缓和时间约束，JMS允许订阅者可创建一个持久化的订阅。这样，即使订阅者没有激活，它也能接收到发布者的消息。" },
                { context: "" },
            ]
        },
    ]
}
//春哥总结的面试题目-其他
var demo07 = {
    title: "JAVA面试题--spring",
    name: "春哥总结的",
    data: [{
        title: "1、mysql索引原理说一下",
        data: [
            { context: "" },
        ]
    }, {
        title: "2、垃圾回收期和垃圾回收机制简单说一下",
        data: [
            { context: "" },
        ]
    }, {
        title: "3、OOM都见过哪些",
        data: [
            { context: "" },
        ]
    }, {
        title: "4、虚拟机参数调整过什么",
        data: [
            { context: "" },
        ]
    },
    ]
}


data = [demo01, demo02, demo03, demo04, demo05, demo06, demo07];