window.onload=function (){
	function getClass(oParent,sClass) {
		// var outer=document.getElementById(oParent);
		var tags=oParent.all?oParent.all:oParent.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className.search(sClass) !== -1) {
				arr.push(tags[i]);
			};
		};
		return arr;
	};
	function isMouseLeaveOrEnter(e,handler) {
		var reltg = e.relatedTarget?e.relatedTarget:e.type == "mouseout"?e.toElement:e.fromElement;
		while (reltg&&reltg != handler){
			reltg = reltg.parentNode;
		};
		return (reltg != handler);
	};
	//area选择
	$(".ui-areamini-content-list .item a").click(function () {
		$(".ui-areamini-content-list .item a").removeClass("selected");
		$(this).addClass("selected");
	})
	//搜索
	
	//fs_col1  tab切换
	var cate_pop0 = document.getElementById('cate_pop0');	
	var cate_menu0 = document.getElementById('cate_menu0');	
	var cate_menu_item = getClass(cate_menu0,"cate_menu_item");
	var cate_part = getClass(cate_pop0,"cate_part clearfix");
	for (var i = 0; i < cate_menu_item.length; i++) {
		cate_menu_item[i].index = i;
		cate_menu_item[i].onmouseover = function () {
			for (var j = 0; j < cate_menu_item.length; j++) {
				cate_menu_item[j].className = "cate_menu_item";
				cate_part[j].style.display = "none";
			};
			this.className = "cate_menu_item cate_menu_item_on";
			cate_pop0.style.display = "block";
			cate_part[this.index].style.display = "block";
		};
		cate_menu_item[i].onmouseout = function (ev) {
			var Event=ev||window.event;
			if (isMouseLeaveOrEnter(Event,cate_pop0)) {
				cate_pop0.style.display = "none";
				for (var j = 0; j < cate_menu_item.length; j++) {
					cate_menu_item[j].className = "cate_menu_item";
					cate_part[j].style.display = "none";
				};
			};
		};
	};	
	cate_pop0.onmouseout = function (ev) {
		var Event=ev||window.event;
		if (isMouseLeaveOrEnter(Event,cate_pop0)) {
			cate_pop0.style.display = "none";
			for (var j = 0; j < cate_menu_item.length; j++) {
				cate_menu_item[j].className = "cate_menu_item";
				cate_part[j].style.display = "none";
			};
		}
	};
	//fs_col2  大图透明度变换
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else {
			return getComputedStyle(obj, false)[attr];
		};
	};
	var slider_list0 = document.getElementById('slider_list0');
	var slider_main0 = document.getElementById('slider_main0');
	var slider_indicator0 = document.getElementById('slider_indicator0');
	var slider_indicator_btn = slider_indicator0.getElementsByTagName('i');
	var slider_item = getClass(slider_list0,"J_slider_item slider_item");
	var J_slider_control_prev = getClass(slider_main0,"J_slider_control_prev");
	var J_slider_control_next = getClass(slider_main0,"J_slider_control_next");
	var now = 0;
	var timer2 = null;
	var timer1 = null
	function tabImg() {
		for (var i = 0; i < slider_item.length; i++) {
			slider_item[i].style.zIndex = 0;
			slider_item[i].style.opacity = 0;
			slider_indicator_btn[i].className = "slider_indicator_btn";
		}
		slider_item[now].style.zIndex = 1;
		move(slider_item[now],"opacity",1);
		slider_indicator_btn[now].className = "slider_indicator_btn slider_indicator_btn_active";
	};
	function move(obj,attr,end){
		var start = parseInt(getStyle(obj,attr));
		var eve=(end-start)/20;
		var step=0;
		clearInterval(this.timer2)
		this.timer2=setInterval(function(){
			step++;
			if(step>=20){
				clearInterval(this.timer2);
			}
			start+=eve;
			if (attr == "opacity") {
				obj.style[attr]=start;
			}else{
				obj.style[attr]=start + "px";
			}
		},10);
	};
	for (var i = 0; i < slider_indicator_btn.length; i++) {
		slider_indicator_btn[i].index = i;
		slider_indicator_btn[i].onmouseover = function () {
			now = this.index;
			tabImg();
		};
	};
	slider_main0.onmouseover = function () {
		clearInterval(timer1);
		J_slider_control_prev[0].style.display = "block";
		J_slider_control_next[0].style.display = "block";
	};
	slider_main0.onmouseout = function () {
		autoMove();
		J_slider_control_prev[0].style.display = "none";
		J_slider_control_next[0].style.display = "none";
	};
	J_slider_control_prev[0].onclick = function () {
		now--;
		if (now > 7) {
			now = 0;
		};
		if(now < 0){
			now = 7;
		};
		tabImg();
	};
	J_slider_control_next[0].onclick = function () {
		now++;
		if (now > 7) {
			now = 0;
		};
		if(now < 0){
			n = 7;
		}		
		tabImg();
	};
	function autoMove() {
		clearInterval(timer1);
		timer1 = setInterval(function () {
			now++;
			if (now > 7) {
				now = 0;
			};
			if(now < 0){
				n = 7;
			}
			tabImg();
		},2000);
	};
	autoMove();
	//fs_col3 滑动条v
	var timer3 = null;
	function news_tab(obj,end){
		var start = parseInt(getStyle(obj,"left"));
		var eve=(end-start)/20;
		clearInterval(timer3)
		timer3=setInterval(function(){
			start = parseInt(getStyle(obj,"left"));
			start+=eve;
			if (eve>0) {
				if(start>=end){
					start=end;
					clearInterval(timer3);
				};
			}else{
				if(start<=end){
					start=end;
					clearInterval(timer3);
				};
			};
			obj.style.left= start + "px";
		},10);
	};
	var news_tab_active = document.getElementById('news_tab_active0');
	var news_first = document.getElementById('news_first0');
	var news_last = document.getElementById('news_last0');
	var news_tab0 = document.getElementById('news_tab0');
	var mod_tab_content_item = getClass(news_tab0,"mod_tab_content_item");
	news_first.onmouseover = function () {
		news_tab(news_tab_active,0);
		mod_tab_content_item[0].style.display = "block";
		mod_tab_content_item[1].style.display = "none";
	};
	news_last.onmouseover = function () {
		news_tab(news_tab_active,50);
		mod_tab_content_item[1].style.display = "block";
		mod_tab_content_item[0].style.display = "none";
	};
	//service
	var J_service = document.getElementById('J_service');
	var service_pop = document.getElementById('service_pop0');
	var service_item = getClass(J_service,"service_item service_frame mod_tab_head_item");
	var timer4 = null;
	for (var i = 0; i < service_item.length; i++) {
		service_item[i].index = i;
		service_item[i].onmouseover = function (ev) {
			var Event=ev||window.event;
			$(".service_item").removeClass("service_frame_on");
			$(this).addClass("service_frame_on");
			if (isMouseLeaveOrEnter(Event,J_service)) {
				$(".service_list .mod_tab_head_item ").animate({top:'-38px'},"fast");
				$(".service_pop").animate({top:'25px'},"fast");
			};
		};
	};
	var service_pop_close = document.getElementById('service_pop_close');
	service_pop_close.onclick = function () {
		$(".service_list .mod_tab_head_item ").animate({top:'-0px'},"fast");
		$(".service_pop").animate({top:'210px'},"fast");
	};
	//京东秒杀
	$(".sk_list").mouseenter(function () {
		$(".sk_controls").show();
	})
	$(".sk_list").mouseleave(function () {
		$(".sk_controls").hide();
	})
	$(".sk_controls").mouseenter(function () {
		$(".sk_controls").show();
	})
	var w = -1000;
	var timer6 = null
	$(".sk_controls .sk_controls_prev").click(function () {
		if (w == -5000) {
				w = -1000;
				$(".sk_list").css({"transition-duration":"0s"});
				$(".sk_list").css({"transform": "translateX("+w+"px)"});
		}
		timer6 = setTimeout(function () {
			w-=1000;
			$(".sk_list").css({"transition-duration":"0.6s"});
			$(".sk_list").css({"transform": "translateX("+w+"px)"});
		},1)
	})
	$(".sk_controls .sk_controls_next").click(function () {
		if (w == 0) {
				w = -4000;
				$(".sk_list").css({"transition-duration":"0s"});
				$(".sk_list").css({"transform": "translateX("+w+"px)"});
		}
		timer6 = setTimeout(function () {
			w+=1000;
			$(".sk_list").css({"transition-duration":"0.6s"});
			$(".sk_list").css({"transform": "translateX("+w+"px)"});
		},1)
	})
	//倒计时
	function CountDown() {
		setInterval(function () {
			var time_s = new Date().getTime();
			var time_e = new Date("2017/02/16 24:00:00").getTime();
			var time = time_e - time_s;
			var days = Math.floor(time/(1000*60*60*24))
			var hours = Math.floor((time-days*1000*60*60*24)/(1000*60*60));
			var minutes = Math.floor((time-hours*1000*60*60-days*1000*60*60*24)/(1000*60));
			var seconds = Math.floor((time-minutes*1000*60-hours*1000*60*60-days*1000*60*60*24)/1000);
			if (hours < 10) {
				hours = "0"+hours;
			};
			if (minutes < 10) {
				minutes = "0"+minutes;
			};
			if (seconds < 10) {
				seconds = "0"+seconds;
			};
			$(".cd_hour span").html(hours);
			$(".cd_minute span").html(minutes);
			$(".cd_second span").html(seconds);	
		},1000);
	};
	CountDown();
	//排行榜tab切换
	$(".top_tab_head a").hover(function () {
		var trans =  78*$(this).index();
		$(".top_tab_active").css({"transform":"translateX("+trans+"px)"});
		$(".top_tab_content_item").removeClass("top_tab_content_item_on");
		$(".top_tab_content_item").eq($(this).index()).addClass("top_tab_content_item_on");
	})
	//右边工具栏
	$(".jdm-toolbar .jdm-toolbar-tab").hover(function () {
		$(this).addClass("z-jdm-tbar-tab-hover");
	},function () {
		$(this).removeClass("z-jdm-tbar-tab-hover");
	})
	//顶部广告关闭按钮
	$("#J_event_close").click(function () {
		$("#J_event").fadeOut();
	})
	//顶部搜索框
	function search_m() {
		if ($(window).scrollTop() > 665) {
			$(".search").addClass("search-fix");
		}else{
			$(".search").removeClass("search-fix");
		}
	}
	//左边功能栏global_toolbar
	function global_toolbar() {
		var s = $(".J_f_lift").eq(0).offset().top-$(".search").height();
		if ($(window).scrollTop() >= s) {
			$(".lift").fadeIn();
		}else{
			$(".lift").fadeOut();
		}
	}
	function floor() {
		var iCur = $(window).scrollTop()+$(window).height()/2;
		for (var j = 0; j < 10; j++) {
			var target = $(".J_f_lift").eq(j).offset().top+$(".J_f_lift").eq(j).height();
			if (iCur>target) {
				for (var k = 0; k < 10; k++) {
					$(".lift li").eq(k).removeClass("lift_item_on");
				}
				$(".lift li").eq(j+1).addClass("lift_item_on")
			}
		}
	}
	var timer5 = null;
	function window_scroll(start,end) {
		timer5 = setInterval(function () {
			if (start!=end) {
				var speed = (end-start)/5;
				start+=speed;
				if (Math.round(start)>=end&&speed>0) {
					start=end;
					clearInterval(timer5);
				}else if (Math.round(start)<=end&&speed<0) {
					start=end;
					clearInterval(timer5);
				}
				$(window).scrollTop(start);
			}
		},1)
	}
	$.each($(".lift li"),function (i) {
		$(".lift li").eq(i).click(function () {
			var j = $(this).index();
			var iCur = $(window).scrollTop();
			if (j<10) {
				var target =$(".J_f_lift").eq(i).offset().top-$(".search").height();
				clearInterval(timer5);
				window_scroll(iCur,target);
			}else if(j == 10){
				clearInterval(timer5);
				window_scroll(iCur,0);
			}
			$.each($(".lift li"),function (k) {
				$(".lift li").eq(k).removeClass("lift_item_on");
			})
			$(this).addClass("lift_item_on");
		})
	})
	//广告滚动
	var x = 1;
	var imgWidth6 = -95*6;
	var timer7 = null;
	$.each($(".pt_logo_list"),function (i) {
		$(".pt_logo_pre").eq(i).click(function () {
			if (x==3) {
				x = 1;
				$(".pt_logo_list").eq(i).css({"transition-duration":"0s"});
				$(".pt_logo_list").eq(i).css({"transform":" translateX("+imgWidth6*x+"px)"})
			}
			timer7 = setTimeout(function () {
				x++;
				$(".pt_logo_list").eq(i).css({"transition-duration":"0.6s"});
				$(".pt_logo_list").eq(i).css({"transform":" translateX("+imgWidth6*x+"px)"})			
			},1)
		})
		$(".pt_logo_next").eq(i).click(function () {
			if (x==0) {
				x = 2;
				$(".pt_logo_list").eq(i).css({"transition-duration":"0s"});
				$(".pt_logo_list").eq(i).css({"transform":" translateX("+imgWidth6*x+"px)"})
			}
			timer7 = setTimeout(function () {
				x--;
				$(".pt_logo_list").eq(i).css({"transition-duration":"0.6s"});
				$(".pt_logo_list").eq(i).css({"transform":" translateX("+imgWidth6*x+"px)"})			
			},1)
		})
	})
	//还没看够
	function load_more() {
		var y = $('.mod_footer').offset().top-$(window).height();
		if ($(window).scrollTop() >= y&&$('.more_list li').length<100) {
			for (var i = 0; i < 10; i++) {
				var more = $('<li class="J_more_item more_item more_item_5"><a href="javascript:;"class="more_item_lk"title="亚光 毛巾家纺 纯棉素色断档面巾三条装 吸水柔软 灰/蓝/军绿 100g/条 74*32cm/条"><img src="img/111.jpg"data-lazy-img="done"class="more_photo"alt="亚光 毛巾家纺 纯棉素色断档面巾三条装 吸水柔软 灰/蓝/军绿 100g/条 74*32cm/条"><div class="more_info"><p class="more_info_name">亚光毛巾家纺纯棉素色断档面巾三条装吸水柔软灰/蓝/军绿100g/条74*32cm/条</p><p class="J_more_info_price more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">29.9</span></p></div></a></li><li class="J_more_item more_item more_item_6"><a href="javascript:;"class="more_item_lk"title="【京东超市】花王（Merries）婴儿纸尿裤/尿不湿 加大号XL44片（12-20kg）（日本原装进口）"><img src="img/112.jpg"data-lazy-img="done"class="more_photo"alt="【京东超市】花王（Merries）婴儿纸尿裤/尿不湿 加大号XL44片（12-20kg）（日本原装进口）"><div class="more_info"><p class="more_info_name">【京东超市】花王（Merries）婴儿纸尿裤/尿不湿加大号XL44片（12-20kg）（日本原装进口）</p><p class="J_more_info_price more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">119.0</span></p></div></a></li><li class="J_more_item more_item more_item_7"><a href="javascript:;"class="more_item_lk"title="蔡康永的说话之道（套装共2册）"><img src="img/113.jpg"data-lazy-img="done"class="more_photo"alt="蔡康永的说话之道（套装共2册）"><div class="more_info"><p class="more_info_name">蔡康永的说话之道（套装共2册）</p><p class="J_more_info_price more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">44.7</span></p></div></a></li><li class="J_more_item more_item more_item_8"><a href="javascript:;"class="more_item_lk"title="JASONVOGUE英伦蝴蝶结领结男 正装结婚礼新郎领结男士韩版领结 礼盒装 黑色"><img src="img/114.jpg"data-lazy-img="done"class="more_photo"alt="JASONVOGUE英伦蝴蝶结领结男 正装结婚礼新郎领结男士韩版领结 礼盒装 黑色"><div class="more_info"><p class="more_info_name">JASONVOGUE英伦蝴蝶结领结男正装结婚礼新郎领结男士韩版领结礼盒装黑色</p><p class="J_more_info_price more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">49.0</span></p></div></a></li><li class="J_more_item more_item more_item_9"><a href="javascript:;"class="more_item_lk"title="名夏女包春夏新韩版手提包女士单肩包女手拎包百搭小方包斜跨包女贝壳包铂金包 黑色"><img src="img/115.jpg"data-lazy-img="done"class="more_photo"alt="名夏女包春夏新韩版手提包女士单肩包女手拎包百搭小方包斜跨包女贝壳包铂金包 黑色"><div class="more_info"><p class="more_info_name">名夏女包春夏新韩版手提包女士单肩包女手拎包百搭小方包斜跨包女贝壳包铂金包黑色</p><p class="J_more_info_price more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">118.0</span></p></div></a></li>')
				$('.more_list').append(more);
			}
		}
	}
	//页面滚动事件
	window.onscroll = function () {
		search_m()
		global_toolbar()
		floor()
		load_more()
	}
};