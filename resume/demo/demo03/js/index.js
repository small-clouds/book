$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'slidesNavigation':true,
        'slidesNavPosition':'bottom',
        'controlArrows': false,
        'resize':true,
        // 首页载入动画
        'afterLoad':function(link,index){
            $(".header_box .nav_line").css("left",(index-1)*90+"px")
            $(".header_box a").removeClass("nav_on")
            $(".header_box a").eq(index).addClass("nav_on")
            switch(index){
                case 1:
                $(".slide1_text").addClass("animated bounceInDown")
                $(".slide1_line").addClass("animated bounceInLeft")
                break;
                case 2:
                $(".business_content li>div span").addClass("span_animate")
                $(".section2 .business_title").addClass("animated fadeIn")
                break;
                case 3:
                $(".section3 .business_title").addClass("animated fadeIn")
                $(".case_content").addClass("animated bounceInUp")
                break;
                case 4:
                $(".section4 .business_title").addClass("animated fadeIn")
                $(".partner_content ul li:eq(0),.partner_content ul li:eq(1),.partner_content ul li:eq(4),.partner_content ul li:eq(5)").addClass("animated bounceInLeft")
                $(".partner_content ul li:eq(2),.partner_content ul li:eq(3),.partner_content ul li:eq(6),.partner_content ul li:eq(7)").addClass("animated bounceInRight")
                break;
                case 5:
                // $(".section5 .business_title").addClass("animated bounceInDown")
                $(".aboutus_box").addClass("animated bounceInLeft")
                break;
                case 6:
                // $(".section6 .business_title").addClass("animated bounceInRight")
                $(".contact_box").addClass("animated bounceInRight")
                break;
            }
        },
        // 首页离开回调函数
        'onLeave':function(index){
            switch(index){
                case 1:
                $(".slide1_text").removeClass("animated bounceInDown")
                $(".slide1_line").removeClass("animated bounceInLeft")
                break;
                case 2:
                $(".business_content li>div span").removeClass("span_animate")
                $(".section2 .business_title").removeClass("animated fadeIn")
                break;
                case 3:
                $(".section3 .business_title").removeClass("animated fadeIn")
                $(".case_content").removeClass("animated bounceInUp")
                break;
                case 4:
                $(".section4 .business_title").removeClass("animated fadeIn")
                $(".partner_content ul li:eq(0),.partner_content ul li:eq(1),.partner_content ul li:eq(4),.partner_content ul li:eq(5)").removeClass("animated bounceInLeft")
                $(".partner_content ul li:eq(2),.partner_content ul li:eq(3),.partner_content ul li:eq(6),.partner_content ul li:eq(7)").removeClass("animated bounceInRight")
                break;
                case 5:
                $(".aboutus_box").removeClass("animated bounceInLeft")
                break;
                case 6:
                $(".contact_box").removeClass("animated bounceInRight")
                break;
            }
        },
        // 首页水平滚动回调动画
        'afterSlideLoad':function(anchorLink, index, slideAnchor, slideIndex){
            $(".aboutus_nav a").removeClass("aboutus_on");
            $(".aboutus_nav a").eq(slideIndex).addClass("aboutus_on");
            switch(slideIndex){
                case 0:
                $(".slide1_text").addClass("animated bounceInDown")
                $(".slide1_line").addClass("animated bounceInLeft")
                $(".slide2_text").removeClass("animated bounceInRight")
                $(".slide2_bg").removeClass("animated bounceInLeft")
                $(".slide3_text").removeClass("animated bounceIn")
                break;
                case 1:
                $(".slide2_text").addClass("animated bounceInRight")
                $(".slide2_bg").addClass("animated bounceInLeft")
                $(".slide3_text").removeClass("animated bounceIn")
                $(".slide1_text").removeClass("animated bounceInDown")
                $(".slide1_line").removeClass("animated bounceInLeft")
                break;
                case 2:
                $(".slide3_text").addClass("animated bounceIn")
                $(".slide2_text").removeClass("animated bounceInRight")
                $(".slide2_bg").removeClass("animated bounceInLeft")
                $(".slide1_text").removeClass("animated bounceInDown")
                $(".slide1_line").removeClass("animated bounceInLeft")
                break;
            }
        }
    })
    // 水平自动切换
    /*setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 5000);*/
    // 首页水平切换鼠标hover触发点击
    $(".fp-slidesNav a").mouseover(function(){
        $(this).trigger('click')
    })
    // 首页滑动箭头点击翻页
    $(".section1 .arrow").click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    //首页右侧导航上下翻页按钮
    $(".right_nav .prev").click(function(){
        $.fn.fullpage.moveSectionUp();
    })
    $(".right_nav .next").click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    //首页头部导航页内跳转
       $(".header_box a").each(function(i){
            $(this).click(function(){
                $.fn.fullpage.moveTo(i,0);
                $(".header_box a").removeClass("nav_on")
                $(this).addClass("nav_on")
            })
       })
       $(".head_nav2 a").each(function(i){
            $(this).click(function(){
                $.fn.fullpage.moveTo(i+1,0);
                $(".header_box a").removeClass("nav_on")
                $(this).addClass("nav_on")
            })
       })


    // 首页头部导航背景切换
    $(".header_box").mouseover(function(){
        var on_index=$(".nav_on").parent().index()
        var oleft=$(".nav_line").css("left")
        $(".header_box ul li").mouseover(function(){
            var long=($(this).index()-1)*90+"px";
            $(".nav_line").stop().css("left",long)
        })
        $(this).mouseout(function(){
            $(".nav_line").css("left",(on_index-1)*90+"px")
        })
    })
    
    // 首页新闻轮播
    function news_slide(){
        var i=0;
        var long=$(".home_news_box ul li").size()-1;
        function move(){
            i++;
            if(i>long){
               // $(".home_news_box ul").css("top","0");
               i=0; 
            }
            $(".home_news_box ul").animate({"top":-i*20+"px"},500)
        }
        setInterval(move,2000)
    }
    news_slide()

    //首页关于我们切换
    function about_slide(){
        $(".aboutus_nav .nav2").on("mouseover click",function(){
            if($(window).width()<768){
                var w_about=$(window).width()
                $(".about_slide").css("left",-w_about+"px")
                console.log(w_about)
            }else{
                $(".about_slide").css("left","-540px")
            }
            $(".aboutus_nav li").removeClass("about_on")
            $(this).addClass("about_on")
        })
         $(".aboutus_nav .nav1").on("mouseover click",function(){
            $(".about_slide").css("left","0")
            $(".aboutus_nav li").removeClass("about_on")
            $(this).addClass("about_on")
        })
    }
    about_slide()

    // 内页左侧导航展开/收起
    $(".switch").click(function(){
        if($(".nav_left").hasClass("nav_hide")){
            $(".nav_left").removeClass("nav_hide")
            $(".content_wrap").css("padding-left","240px")
            $(".content_header").css("left","240px")
            $(this).find(".glyphicon").removeClass("glyphicon-th-list").addClass("glyphicon-chevron-left")
        }else{
            $(".nav_left").addClass("nav_hide")
            $(".content_wrap").css("padding-left","0")
            $(".content_header").css("left","0")
            $(this).find(".glyphicon").removeClass("glyphicon-chevron-left").addClass("glyphicon-th-list")
        }
        $(".cases_lists ul").css("margin-left",(m-60)+"px")
    })

    // 内页左侧导航背景切换效果
    var bg_h=$(".nav_menu ul li.left_nav_bg").height();
    var index2=$(".nav_menu ul li a.left_nav_on").parent().index()
    $(".nav_menu ul li.left_nav_bg").css("top",index2*bg_h)
    $(".nav_menu ul li").mouseover(function(){
        var index=$(this).index()
        /*$(this).children().css("color","#fff")
        $(this).mouseout(function(){
            $(this).children().css("color","#333")
        })*/
        $(".nav_menu ul li.left_nav_bg").css("top",index*bg_h)
        $(".nav_menu ul li a.left_nav_on").css("color","#333")
        $(".nav_menu ul li a.left_nav_on").mouseout(function(){
            $(this).css("color","#333")
        })
    })
    $(".nav_menu").mouseleave(function(){
        $(".nav_menu ul li.left_nav_bg").css("top",index2*bg_h)
        $(".nav_menu ul li a.left_nav_on").css("color","#fff")
    })

    // 案例列表页js计算水平居中
    if($(document).width()>320){
        var w1=$(".cases_lists").width()
        var num=Math.floor(w1/350);
        var m=(w1-350*num)/2
        $(".cases_lists ul").css("margin-left",m+"px")
    }
    var w_h=$(window).height()
    // $(".nav_left").height(w_h)
    $(".content_wrap").css("min-height",w_h)

    // 翻页出场动画影响，延时100毫秒执行事件
    setTimeout(function(){
        if($(window).width()<767){
            var text1_h=$(".slide1_text img").height()
            $(".slide1_line").height(text1_h)
            var slide2_w=$(".business_content ul li").width()
            $(".business_content ul li").height(slide2_w)
        }
    },100)

    // 首页-案例小屏幕轮播
    function slide(box,pic,num){
        var long=$(pic).find("li").size();
        var width=$(pic).find("li").width();
        var clone=$(pic).find("li").first().clone();
        $(pic).width(width*(long+1));
        $(pic).append(clone);
        var i=0;
        // 向右
        function move_r(){
            i--;
            if(i==-1){
            $(pic).css("left",-(long*width)+"px")
                i=long-1;
            }
            $(pic).stop().animate({left:-width*i},600)
            $(num).find("li").eq(i).addClass("on").siblings().removeClass("on");
        }
        // 向左
        function move_l(){
            var long=$(pic).find("li").size();
            i++;
            if(i==long){
            $(pic).css("left","0")
                i=1;
            }
            $(pic).stop().animate({left:-width*i},600)
            if(i==long-1){
                $(num).find("li").eq(0).addClass("on").siblings().removeClass("on");
            }else{
                $(num).find("li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
        // 自动
        var time=setInterval(move_r,3500)
        $(box).click(function(){
            clearInterval(time)
        })
        $(box).mouseout(function(){
            time=setInterval(move_r,3500)
        })
        $(".case_content").mousedown(function(){
            clearInterval(time)
        })
        $(".case_content").mouseup(function(){
            time=setInterval(move_r,3500)
        })
        // 指示按钮
        $(num).find("li").mouseover(function(){
            i=$(this).index();
            $(pic).stop().animate({left:-width*i},600)
            $(num).find("li").eq(i).addClass("on").siblings().removeClass("on");
        })
        $(".case_content").find(".prev").click(function(){
            move_l()
        })
        $(".case_content").find(".next").click(function(){
            move_r()
        })
    }
    if($(window).width()<=768){
        slide(".case_slide",".case_pic",".num")
    }
    

    


})