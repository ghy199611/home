/**
 * Created by Czc on 2018/02/28.
 */

//固定顶部 返回显示与隐藏
$(function(){
    var topH = $("header").outerHeight();
    // console.log(topH);
    $(window).scroll(function(){
        var scrollT = $(this).scrollTop();
        // console.log(scrollT);
        //顶部固定
        if(scrollT >= topH) {
            $("#nav-bar").fadeIn(200);
        } else {
            $("#nav-bar").hide();
        }
        //返回的显示与隐藏
        if(scrollT >= 800) {
            $("#backTop").show();
        } else {
            $("#backTop").hide();
        }
    })
})

//返回
$(function() {
    $("#backTop").click(function(){
        $('html , body').animate({
            scrollTop:0 //直接滚动到0
        },1000);
    })
})





