var toggleBtn = $('.toggle-btn');
var oLeft = $('.left-side');
var oContent = $('.content');
var menu = $('.menu-root');
var nav = $('.top-nav');
var rotate = $('.icon-collapse1');
var toggle = false;
toggleBtn.click(function () {
    if(!toggle){ // 收起状态
        oLeft.addClass('active');
        oContent.addClass('active');
        toggleBtn.addClass('active');
        menu.addClass('active');
        nav.addClass('active');
        rotate.removeClass('rotate rotate1').addClass('rotate');
        $('.logo').css('width','50px');
        $('.logo img').animate({'margin-left': '-23px'},300);
        $('.menu-root>li>a>span').hide();
        $('.menu-root>li').css('width','50px');
        $('.icon-arrow-right').css('right','14px');
        toggle = true;
    }else{ // 展开状态
        oLeft.removeClass('active');
        oContent.removeClass('active');
        toggleBtn.removeClass('active');
        menu.removeClass('active');
        nav.removeClass('active');
        rotate.removeClass('rotate rotate1').addClass('rotate1');
        $('.logo').css('width','180px');
        $('.logo img').animate({'margin-left': 0},300);
        $('.menu-root>li').css('width','180px');
        $('.icon-arrow-right').css('right','10px');
        setTimeout(function(){$('.menu-root>li>a>span').show();},200);
        toggle = false;
    }
    return false;
});
$('.product-l').hover(function (){
    $('.sub-menu').css('width','870px');
},function (){
    $('.sub-menu').css('width',0);
});