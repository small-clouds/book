var demo01 = {
    title: "算法",
    name: "算法小结",
    data: [{
        title: "指数",
        data: [
            { context: "X^a*X^b = X^(a+b)" },
            { context: "X^a/X^b = X^(a-b)" },
            { context: "(X^a)^b = x^ab" },
            { context: "X^n+X^n = 2X^n" },
            { context: "2^n+2^n=2^(n+1)" }
        ]
    }, {
        title: "对数",
        data: [
            { context: "对数定义：X^a=B => logxB=A" },
            { context: "logaB = logcB/logcA A,B,C>0 ;a!=1" },
            { context: "logAB =logA+logB A,B>0" },
            { context: "logA/B =logA-logB" },
            { context: "log(A^b) = blogA" },
            { context: "logX< X 对所有的 X>0 都成立" },
            { context: "log1=0； log2=1；log1024=10；log1048576=20；" }
        ]
    }, {
        title: "级数",
        data: [
            { context: "1) 【(n)sum(i=0)】2^i = 2^(n+1) - 1 //解释 []大E西格玛 前面为变量 后面为初始值 求和" },
            { context: "2) 【(n)sum(i=0)】A^i = (A^(n+1)-1)/(A-1)" },
            { context: "第二个公式中如果0 &lt; A&lt; 1 ; 【(n)sum(i=0)】A^i &lt;=1 /(1-A) " },
            { context: "当n趋向于 无穷时 和趋向于1/(1-A) 这些公式是 <span class='remark'>几何级数</span>" },
            { context: "<span class='remark'>证明1</span>" },
            { context: "S=1+A^1+A^2+A^3+A^4...." },
            { context: "<span class='remark'>所以：</span>AS=A+A^2+A^3+A^4...." },
            { context: "<span class='remark'>相减:</span>S-AS=1 => S=1/(1-A)" },
            { context: "<span class='remark'>证明2：</span>" },
            { context: "【(无穷)sum(i=1)】(i/2^i); => S=1/2 + 2/2^2 + 3/2^3..... " },
            { context: "2S = 1+ 2/2 +3/2^2 + 4/2^3....;" },
            { context: "<span class='remark'>相减：</span>S=1+1/2+1/2^2+1/2^3..=> S=2" },
            { context: "<span class='remark'>基本公式：</span>【(N)sum(i=1)】i = N(N+1)/2 ~= N^2/2" }
        ]
    }, {
        title: "模运算",
        data: [
            { context: "<span class='remark'>定理：</span>如果N整除A-B 那么就说 A与B模N同余 ；A三B(mod N)" },
            { context: "注：<span class='remark'>很多定理适用于模运算 其中有些特别需要数论证明 我们将尽量少用模运算 这样前面的定理够了</span>" },
            { context: "" }
        ]
    }, {
        title: "证明方法",
        data: [
            {
                title: "归纳法",
                data: [
                    { context: "1.证明基准情形；2.进行归纳假设（假设定理对到某个有限的数k的所有情况都是成立的 然后使用这个证明 对<span class='remark'>k+1</span>是成立的 至此定理得证）" },
                    { context: "<span class='remark'>证明k成立  只要证明出k+1成立 说明她就成立</span>" },
                    { context: "eg:证明： 【(N)sum(i=1)】i^2 = N(N+1)(2N+1) / 6" },
                    { context: "假设成立：【(N+1)sum(i=1)】(i+1)^2 = 【(N)sum(i=1)】i^2 +(N+1)^2" },
                    { context: "结果：【(N+1)sum(i=1)】(i+1)^2 = (N+1)（(N+1)+1）（2(N+1)+1） / 6 所以上面的成立" },
                ]
            }, {
                title: "反证法",
                data: [
                    { context: "反证法是通过证明假设定理不成立 然后证明假设导致某个已知的性质不成立 从而证明假设是错误的" },
                    { context: "经典案例：证明存在无穷多个素数？" },
                    { context: "假设不成立  那么最大的素数是Pn" },
                    { context: "令 N=P1×P2×P3×P4×P5×Pn+1" },
                    { context: "所有的数都不能整除N 余数是1 所以假设Pn是最大的素数不成立；所以定理成立" }
                ]
            }

        ]
    }, {
        title: "递归简论",
        data: [
            { context: "当一个函数用它自己来定义时 就成为是递归 程序中允许函数使用递归 只是遵循的是递归思想" },
            { context: "常见问题" },
            { context: "递归是狗就是循环推理？ 是。" },
            { context: "基本法则" },
            { context: "基准情形：不用递归就能求解的值" },
            { context: "不断推进：对于需要递归求解的情形 每一次递归调用都必须要是状况朝向一种基准情形" },
            { context: "设计法则：假设所有的递归调用都能运行" },
            { context: "合成效益法则：" },
            { context: "<span class='remark'>递归不应该作为简单for循环的代替物  递归涉及到系统开销</span>" }
        ]
    }]
}

data=[demo01]