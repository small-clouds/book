//九阴真经面试题
var demo01={
    title: "九阴真经面试题",
    name: "demo01",
    data:[{
        title:"final, finally, finalize的区别",
        data:[
            {context:"<span class='remark'>final</span>：：：修饰符（关键字）如果一个类被声明为final，意味着它不能再派生出新的子类，不能作为父类被继承。因此一个类不能既被声明为 abstract的，又被声明为final的。将变量或方法声明为final，可以保证它们在使用中不被改变。被声明为final的变量必须在声明时给定初值，而在以后的引用中只能读取，不可修改。被声明为final的方法也同样只能使用，不能重载 "},
            {context:"<span class='remark'>finally</span>：：：再异常处理时提供 finally 块来执行任何清除操作。如果抛出一个异常，那么相匹配的 catch 子句就会执行，然后控制就会进入 finally 块（如果有的话）。 "},
            {context:"<span class='remark'>finalize</span>：：：方法名。Java 技术允许使用 finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。这个方法是由垃圾收集器在确定这个对象没有被引用时对这个对象调用的。它是在 Object 类中定义的，因此所有的类都继承了它。子类覆盖 finalize() 方法以整理系统资源或者执行其他清理工作。finalize() 方法是在垃圾收集器删除对象之前对这个对象调用的。"}
        ]
    },{
        title:"Anonymous Inner Class (匿名内部类) 是否可以extends(继承)其它类，是否可以implements(实现)interface(接口)",
        data:[
            {context:"匿名的内部类是没有名字的内部类。不能extends(继承) 其它类，但一个内部类可以作为一个接口，由另一个内部类实现。"}
        ]
    },{
        title:"&和&&的区别：",
        data:[
            {context:"&是位运算符。&&是布尔逻辑运算符。"}
        ]
    },{
        title:" HashMap和Hashtable的区别：",
        data:[
            {context:"都属于Map接口的类，实现了将惟一键映射到特定的值上。"},
            {context:"<span class='remark'>HashMap</span> 类没有分类或者排序。它允许一个 null 键和多个 null 值。 "},
            {context:"<span class='remark'> Hashtable</span> 类似于 HashMap，但是不允许 null 键和 null 值。它也比 HashMap 慢，因为它是同步的。"}
        ]
    },{
        title:"Collection 和 Collections的区别：",
        data:[
            {context:"<span class='remark'> Collections</span>是个java.util下的类，它包含有各种有关集合操作的静态方法。 "},
            {context:"<span class='remark'> Collection</span>是个java.util下的接口，它是各种集合结构的父接口。"}
        ]
    },{
        title:"GC是什么? 为什么要有GC? (基础)：",
        data:[
            {context:"GC是垃圾收集器。Java 程序员不用担心内存管理，因为垃圾收集器会自动进行管理。要请求垃圾收集，可以调用下面的方法之一："},
            {context:"System.gc();  Runtime.getRuntime().gc()。"}
        ]
    },{
        title:'String s = new String("xyz");创建了几个String Object：',
        data:[
            {context:"两个对象，一个是“xyx”,一个是指向“xyx”的引用对象s。"}
        ]
    },{
        title:"Math.round(11.5)等於多少? Math.round(-11.5)等於多少：",
        data:[
            {context:"Math.round(11.5)返回（long）12，Math.round(-11.5)返回（long）-11。"}
        ]
    },{
        title:"short s1 = 1; s1 = s1 + 1;有什么错? short s1 = 1; s1 += 1;有什么错：",
        data:[
            {context:"short s1 = 1; s1 = s1 + 1;有错，s1是short型，s1+1是int型,不能显式转化为short型。可修改为s1 =(short)(s1 + 1) 。short s1 = 1; "},
            {context:"s1 += 1正确。"}
        ]
    },{
        title:"sleep() 和 wait() 有什么区别：",
        data:[
            {context:"搞线程的最爱"},
            {context:"<span class='remark'>sleep() </span>方法是使线程停止一段时间的方法。"},
            {context:"在sleep 时间间隔期满后，线程不一定立即恢复执行。这是因为在那个时刻，其它线程可能正在运行而且没有被调度为放弃执行，除非(a)“醒来”的线程具有更高的优先级 "},
            {context:"(b)正在运行的线程因为其它原因而阻塞。"},
            {context:"<span class='remark'> wait() </span>是线程交互时，如果线程对一个同步对象x 发出一个wait()调用，该线程会暂停执行，被调对象进入等待状态，直到被唤醒或等待时间到。"}
        ]
    },{
        title:"数组有没有length()这个方法? String有没有length()这个方法：",
        data:[
            {context:"数组没有length()这个方法，有length的属性。"},
            {context:"String有有length()这个方法。"}
        ]
    },{
        title:"Overload和Override的区别。Overloaded的方法是否可以改变返回值的类型 重载和重写",
        data:[
            {context:"方法的重写Overriding和重载Overloading是Java多态性的不同表现。"},
             {context:"重写Overriding是父类与子类之间多态性的一种表现，重载Overloading是一个类中多态性的一种表现。"},
             {context:"如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。子类的对象使用这个方法时，将调用子类中的定义，对它而言，父类中的定义如同被“屏蔽”了。"},
             {context:"如果在一个类中定义了多个同名的方法，它们或有不同的参数个数或有不同的参数类型，则称为方法的重载(Overloading)。Overloaded的方法是可以改变返回值的类型。"}
        ]
    },{
        title:"Set里的元素是不能重复的，那么用什么方法来区分重复与否呢? 是用==还是equals()? 它们有何区别：",
        data:[
            {context:"Set里的元素是不能重复的，那么用iterator()方法来区分重复与否。equals()是判读两个Set是否相等。 "},
            {context:"equals()和==方法决定引用值是否指向同一对象equals()在类中被覆盖，为的是当两个分离的对象的内容和类型相配的话，返回真值。"}
        ]
    },{
        title:"给我一个你最常见到的runtime exception：",
        data:[
            {context:"ArithmeticException, ArrayStoreException, BufferOverflowException, BufferUnderflowException, CannotRedoException, CannotUndoException, ClassCastException, CMMException, ConcurrentModificationException, DOMException, EmptyStackException, IllegalArgumentException, IllegalMonitorStateException, IllegalPathStateException, IllegalStateException, ImagingOpException, IndexOutOfBoundsException, MissingResourceException, NegativeArraySizeException, NoSuchElementException, NullPointerException, ProfileDataException, ProviderException, RasterFormatException, SecurityException, SystemException, UndeclaredThrowableException, UnmodifiableSetException, UnsupportedOperationException。"}
        ]
    },{
        title:"error和exception有什么区别：",
        data:[
            {context:"<span class='remark'> error </span>表示恢复不是不可能但很困难的情况下的一种严重问题。比如说内存溢出。不可能指望程序能处理这样的情况。 "},
            {context:"<span class='remark'> exception </span>表示一种设计或实现问题。也就是说，它表示如果程序运行正常，从不会发生的情况。"}
        ]
    },{
        title:"List, Set, Map是否继承自Collection接口：",
        data:[
            {context:"List，Set是。"},
            {context:"Map不是。"}
        ]
    },{
        title:"abstract class和interface有什么区别： ",
        data:[
            {context:"&nbsp;&nbsp;  声明方法的存在而不去实现它的类被叫做抽象类（abstract class），它用于要创建一个体现某些基本行为的类，并为该类声明方法，但不能在该类中实现该类的情况。不能创建abstract 类的实例。然而可以创建一个变量，其类型是一个抽象类，并让它指向具体子类的一个实例。不能有抽象构造函数或抽象静态方法。Abstract 类的子类为它们父类中的所有抽象方法提供实现，否则它们也是抽象类为。取而代之，在子类中实现该方法。知道其行为的其它类可以在类中实现这些方法。"},
            {context:"&nbsp;&nbsp;   接口（interface）是抽象类的变体。在接口中，所有方法都是抽象的。多继承性可通过实现这样的接口而获得。接口中的所有方法都是抽象的，没有一个有程序体。接口只可以定义static final成员变量。接口的实现与子类相似，除了该实现类不能从接口定义中继承行为。当类实现特殊接口时，它定义（即将程序体给予）所有这种接口的方法。然后，它可以在实现了该接口的类的任何对象上调用接口的方法。由于有抽象类，它允许使用接口名作为引用变量的类型。通常的动态联编将生效。引用可以转换到接口类型或从接口类型转换，instanceof 运算符可以用来决定某对象的类是否实现了接口。"}
        ]
    },{
        title:"接口 抽象类 接口之间的关系",
        data:[
            {context:"接口可以继承接口。抽象类可以实现(implements)接口，抽象类是否可继承实体类，但前提是实体类必须有明确的构造函数。"}
        ]
    },{
        title:"启动一个线程是用run()还是start()：",
        data:[
            {context:"启动一个线程是调用start()方法，使线程所代表的虚拟处理机处于可运行状态，这意味着它可以由JVM调度并执行。"},
            {context:"这并不意味着线程就会立即运行。run()方法可以产生必须退出的标志来停止一个线程"}
        ]
    },{
        title:"构造器Constructor是否可被override：",
        data:[
            {context:"构造器Constructor不能被继承，因此不能重写Override，但可以被重载Overloading。"}
        ]
    },{
        title:"try {}里有一个return语句，那么紧跟在这个try后的finally {}里的code会不会被执行，什么时候被执行，在return前还是后：",
        data:[
            {context:"　会执行，在return前执行。"}
        ]
    },{
        title:"两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对：",
        data:[
            {context:"不对，有相同的hash code。"}
        ]
    },{
        title:"当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性，并可返回变化后的结果，那么这里到底是值传递还是引用传递： ",
        data:[
            {context:"　是值传递。Java 编程语言只由值传递参数。当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。对象的内容可以在被调用的方法中改变，但对象的引用是永远不会改变的。"}
        ]
    },{
        title:"swtich是否能作用在byte上，是否能作用在long上，是否能作用在String上：",
        data:[
            {context:"switch（expr1）中，expr1是一个整数表达式。因此传递给 switch 和 case 语句的参数应该是 int、 short、 char 或者 byte。long 都不能作用于swtich。"},
            {context:"<span class='remark'>在java1.7以上 支持string 但是效率不高 编译器回吧string转换成hashcode</span>"}
        ]
    },{
        title:"Hashtable和HashMap的区别：",
        data:[
            {context:"Hashtable继承自Dictionary类，而HashMap是Java1.2引进的Map interface的一个实现 "},
            {context:"HashMap允许将null作为一个entry的key或者value，而Hashtable不允许 "},
            {context:"还有就是，HashMap把Hashtable的contains方法去掉了，改成containsvalue和containsKey。因为contains方法容易让人引起误解。"},
            {context:"　最大的不同是，Hashtable的方法是Synchronize的，而HashMap不是，在 多个线程访问Hashtable时，不需要自己为它的方法实现同步，而HashMap 就必须为之提供外同步。"},
            {context:"Hashtable和HashMap采用的hash/rehash算法都大概一样，所以性能不会有很大的差异"}
        ]
    },{
        title:"",
        data:[
            {context:""}
        ]
    },{
        title:"",
        data:[
            {context:""}
        ]
    }
    ]
}

data=[demo01];