(function($){
    // $(".submenu").css("display","block");

    //첫번째 유형
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display","none");
    // });

    //두번째 유형
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideUP(500);
    });

    //tap menu
    var tabmenu = $(".notice");

    tabmenu.find("ul > li > ul").hide();
    tabmenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $ (this); //사용자가 클릭한 메뉴
        target.next().show().parent("li").addclass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tabmenu.find("ul > li.active > ul").click(tabList);
})(jquery);