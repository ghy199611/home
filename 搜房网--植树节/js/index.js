/**
 * Created by Czc on 2017/10/14.
 */
//大轮播图
$(function() {
    var k = 0;
    var timer = null;
    $(".lunbo>ol>li").mouseenter(function() {
        k = $(this).index();
        core();
    })

    function autoPlay() {
        timer = setInterval(function() {
            k++;
            if (k > $(".lunbo>ol>li").length - 1) {
                k = 0;
            }
            core();

        }, 2000)
    }

    function core() {
        if (k < 0) {
            k = $(".lunbo>ol>li").length - 1;
        } else if (k > $(".lunbo>ol>li").length - 1) {
            k = 0;
        }
        $(".lunbo>ol>li").eq(k).addClass("btn-sel")
            .siblings().removeClass("btn-sel");
        $(".lunbo>ul>li").eq(k).stop(true, true).fadeIn(800)
            .siblings().stop(true, true).fadeOut(800);
    }
    autoPlay();
    $(".lunbo").mouseenter(function() {
        clearInterval(timer);
        timer = null;
    })
    $(".lunbo").mouseleave(function() {
        autoPlay();
    })
    $(".lunbo>.arr").click(function() {
        if ($(this).hasClass("left")) {
            k--;
            core();
        } else {
            k++;
            core();
        }
    })
})
//新产品
$(function() {
    $(".new-product>.arr").click(function() {
        if ($(this).hasClass("left")) {
            $(".new-product-list>ul").animate({
                "left": 0
            }, 1000);
        } else {
            $(".new-product-list>ul").animate({
                "left": -$(".new-product-list>ul").width() / 2
            }, 1000);
        }
    })
})
//编辑推荐
$(function() {
    $("#popular>li>a").click(function() {
        $(this).parent().addClass("select")
            .siblings().removeClass("select");
        $(".editor-recommend").eq($(this).parent().index()).show()
            .siblings().hide();
    })
})
//大家说
$(function() {
    var timer = null;
    var k = 0;
    var width = -$(".people-say-item").outerWidth(true);
    var last1 = $(".people-say-item").first().clone(); //1
    var last2 = $(".people-say-item").eq(1).clone(); //2
    var first1 = $(".people-say-item").eq($(".people-say-item").length - 2).clone(); //3
    var first2 = $(".people-say-item").last().clone(); //4
    $(".people-say-list").append(last1);
    $(".people-say-list").append(last2);
    $(".people-say-list").prepend(first2);
    $(".people-say-list").prepend(first1);

    function autoPlay() {
        timer = setInterval(function() {
            k++;
            if (k > $(".people-say-item").length - 3) {
                k = 1;
                $(".people-say-list").css("left", width * k)
                    .stop(true, true).animate({
                        "left": width * (k + 1)
                    }, 400);
                k = k + 1;
            } else {
                $(".people-say-list").stop(true, true).animate({
                    "left": width * k
                }, 400);
            }
        }, 1500);
    }
    $(".people-say button").click(function() {
        if ($(this).hasClass("left")) {
            k--;
            if (k < 0) {
                k = $(".people-say-item").length - 4;
                $(".people-say-list").css("left", width * k)
                    .stop(true, true).animate({
                        "left": width * (k - 1)
                    }, 400);
                k = k - 1;
            } else {
                $(".people-say-list").stop(true, true).animate({
                    "left": width * k
                }, 400)
            }
        } else {
            k++;
            if (k > $(".people-say-item").length - 3) {
                k = 1;
                $(".people-say-list").css("left", width * k)
                    .stop(true, true).animate({
                        "left": width * (k + 1)
                    }, 400);
                k = k + 1;
            } else {
                $(".people-say-list").stop(true, true).animate({
                    "left": width * k
                }, 400);
            }
        }
        // console.log( $(".people-say-list").css("left"));
    })
    autoPlay();
    $(".people-say-item").mouseenter(function() {
        clearInterval(timer);
        timer = null;
    })
    $(".people-say-item").mouseleave(function() {
        autoPlay();
    })
    $(".people-say button").mouseenter(function() {
        $(".left-fixed").hide();
        clearInterval(timer);
        timer = null;
    });
    $(".people-say button").mouseleave(function() {
        $(".left-fixed").show();
        autoPlay();
    });
})
//新品换图
$(function() {
    $(".product-t").mouseover(function() {
        $(this).find(".change").show().css("box-shadow", "0 1px 10px 2px rgba(200,200,200,0.5)").siblings().hide();
    })
    $(".product-t").mouseout(function() {

        $(this).find(".change").hide().siblings().show();
    })
})
//图片放大
$(function() {
    $(".bigger").mouseenter(function() {
        $(this).stop().animate({
            width: 282,
            height: 188,
        }, 500);
    })
    $(".bigger").mouseleave(function() {
        $(this).stop().animate({
            width: 272,
            height: 178,
        }, 500);
    })
})
//倒计时
$(function(){
    //获取几点场
    var now = parseInt($(".time").text());
    var date = new Date();
    var timer = null;

    function countDown() {
        var hour = '0'+(now + 2 - date.getHours());
        var minute = 59 - date.getMinutes();
        var second = 59 - date.getSeconds();
        timer = setInterval(function(){
            second--;
            if(second < 0) {
                second = 59;
                minute--;
            }
            if(minute < 0) {
                minute = 59;
                hour--;
            }
            if (second < 10) {
                second = '0'+parseInt(second);
            }
            if(minute < 10 ) {
                minute = '0'+ parseInt(minute);
            }
            if(hour<0) {
                $(".time").text((now+2)+"点场");
            }
            $("#hour").text(hour);
            $("#minute").text(minute);
            $("#second").text(second);
        }, 1000)
    }
    // console.log(date.getHours());
    if(date.getHours() > now) {
        $("#now").text(now+"点场");
        countDown();
    }

})
