$(function() {
	//  视频
	var videodata = {
		"type": "video",
		"limit": "4"
	}
	uitll.getdata("/index?", "get", "json", videodata, "false", "true", function(data) {
		$.each(data.data, function(i, val) {
			var template = "<li class='list" + (i + 1) + "'>" +
				"<img src=" + val.url + " oncontextmenu='return false'>" +
				"<div class='mask'>" +
				"<img src='img/video.png' alt='' video=" + val.path + " class='bof'>" +
				"</div>" +
				"</li>"

			var template1 = "<li class='col-xs-10'>" +
				"<img src=" + val.url + " oncontextmenu='return false'>" +
				"<div class='mask1'>" +
				"<img src='img/video.png' alt='' video=" + val.path + " class='bof'>" +
				"</div>" +
				"</li>"
			$(".imglist ul").append(template)
			$(".three_biglunbo ul").append(template1)
		})
		//1:设置按钮的颜色；
		//1.1获取当前应该变色的按钮的索引值
		//1.2找到该元素并设置一个绿色
		var index = 0; //默认情况下第一个按钮变成红色
		var aListName = []
		//	var aListName = ['list1', 'list2', 'list3']
		var aLi = $(".imglist ul li")
		for(var index = 0; index < aLi.length; index++) {
			aListName.push("list" + (index + 1))
			var emtemplat = "<span>" + "<em></em>" + "</span>"
			$(".lineb").append(emtemplat)
		}
		var aSpan = $(".lineb span") //把所有的按钮放到一个数组里
		function setLineBColor(index1) {
			for(var i = 0, len = aSpan.length; i < len; i++) {
				aSpan[i].style.background = '#ccc';
				aSpan[index1].style.background = '#BF1A20';
			}
		}
		setLineBColor(0)

		function nextPic() {
			aListName.unshift(aListName[aLi.length - 1]); //把数组最后一个名字复制并插入到第一个位置来

			aListName.pop() //删除最后一个值
			for(var i = 0, len = aLi.length; i < len; i++) {
				aLi[i].setAttribute('class', aListName[i]);
			}
			index++;
			if(index == aLi.length) {

				index = 0;
			}
		}

		function prePic() {
			aListName.push(aListName[0]);
			aListName.shift();
			for(var i = 0, len = aListName.length; i < len; i++) {
				aLi[i].setAttribute('class', aListName[i]);
				//			 index--;
				//			 if(index<0){
				//			 	index=2;
				//			 }
				//			 setLineBColor();
			}
		}
		var imgList = document.querySelector(".imglist");
		aLi.click(function() {
			clearInterval(nextime)
			var allindex = $(this).index()
			if($(this).attr("class") == "list3") {
				nextPic();
			} else if($(this).attr("class") == "list1") {
				prePic();
			}
			if($(this).index() == 0) {

				allindex = aLi.length
			} else if($(this).index() == aLi.length) {

				allindex = 1
			}
			index = allindex - 1
			setLineBColor(allindex - 1)
			// nextauto() 
		})
		var nextime;

		function nextauto() {
			nextime = setInterval(function() {
				nextPic()
			}, 3000)
		}
		//  播放视频		
		$(".mask").find("img").click(function() {
			var videurl = $(this).attr("video");
			var Media = document.getElementById("video");
			$(".zhez").css("display", 'flex')
			$("#video").attr("src", videurl)
			Media.play(); //播放
		})
		$(".mask1").find("img").click(function() {
			var videurl = $(this).attr("video");
			var Media = document.getElementById("video");
			$(".zhez").css("display", 'flex')
			$("#video").attr("src", videurl)
			Media.play(); //播放
		})
		$("#close").click(function() {
			$(".zhez").css("display", 'none')
			$("#video").attr("src", "")
		})

	})
	// nextauto()

	//  轮播
	var lubdata = {
		"type": "picture",
		"limit": "4"
	}
	uitll.getdata("/index?", "get", "json", lubdata, "false", "true", function(data) {
		$.each(data.data, function(i, val) {
			var telmplat = "<li>" +
				"<img src=" + val.path + ">" +
				"</li>"
			var linetelm = "<li></li>"
			$(".planting").append(telmplat)
			$(".plan_line").append(linetelm)

		})
		$(".plan_line li").eq(0).addClass("plan_active")
	})

	//  品牌活动
	var pindata = {
		"type": "cases",
		"limit": "6"
	}
	uitll.getdata("/index?", "get", "json", pindata, "false", "true", function(data) {
		$.each(data.data, function(i, val) {
			var paitemplate = "<div class='actimg_box fl'>" +
				"<a href='pages/case.html?id=" + val.url + "'>" +
				"<img src=" + val.path + " alt='' class='actime_big'>" +
				"<div class='actimg_zhez'>" +
				"<h1>" + val.name + "</h1>" +
				"<span>" + "</span>" +
				"<p>" + 'view type' + "</p>" +
				"</div>" +
				"</a>" +
				"</div>"
			$(".activity_img").append(paitemplate)
		})
	})
	//  合作伙伴
	var hedata = {
		"type": "frends",
		"limit": "24"
	}
	uitll.getdata("/index?", "get", "json", hedata, "false", "true", function(data) {
		$.each(data.data, function(i, val) {
			var paitemplate = "<li>" +
				"<a href='javascript:;'>" +
				"<img src=" + val.path + ">" +
				"</a>"
			"</li>"
			$(".coorper_box").append(paitemplate)
		})
	})

	var time;
	var lunindex = 0;

	function lunb() {
		time = setInterval(function() {
			lunindex++;
			if(lunindex == $(".planting li").length) {
				lunindex = 0;
			}
			$('.planting').animate({
				marginLeft: -lunindex * 100 + "%"
			}, "slow", "swing")
			$(".plan_line li").eq(lunindex).addClass("plan_active").siblings().removeClass("plan_active")
		}, 3000)
	}
	//	lunb()
	$(".plan_line").on("click", "li", function() {
		var index = $(this).index();
		clearInterval(time)
		$('.planting').animate({
			marginLeft: -index * 100 + "%"
		}, "slow", "swing")
		$(".plan_line li").eq(index).addClass("plan_active").siblings().removeClass("plan_active")
		lunindex = index
		lunb()
	})
	//    圆环
	function create_circle(num, val_num) {
	    let wid = $(window).width()
		if(wid < 1000) {
			//
			if(wid < 768) {
				$('#xscircle' + num).circleProgress({
					value: val_num,
					size: 160,
					startAngle: -1.57,
					thickness: 6,
					fill: {
						gradient: ["red"]
					},
					emptyFill: 'rgba(255, 255,255,1)', //空圆弧的颜色。默认值为"rgba(0, 0, 0, .1)"
				});
			} else {
				$('#circle' + num).circleProgress({
					value: val_num,
					size: 200,
					startAngle: -1.57,
					thickness: 6,
					fill: {
						gradient: ["red"]
					},
					emptyFill: 'rgba(255, 255,255,1)', //空圆弧的颜色。默认值为"rgba(0, 0, 0, .1)"
				});
			}
		} else {
			$('#circle' + num).circleProgress({
				value: val_num,
				size: 280,
				startAngle: -1.57,
				thickness: 6,
				fill: {
					gradient: ["red"]
				},
				emptyFill: 'rgba(255, 255,255,1)', //空圆弧的颜色。默认值为"rgba(0, 0, 0, .1)"
			});
		}

	}
	var scrollfalg = true;
	var rog_box, circle, contentzn, content_enlish, contentznspan;
	$(document).scroll(function() {
		if($(document).scrollTop() > Math.round($(".three_linb").offset().top)) {
			$(".nav_box").css("background", "rgba(22,22,22,.8)")
		} else {
			$(".nav_box").css("background", "rgba(22,22,22,1)")
		}
		let wid = $(window).width()
		if(wid < 768) {
			rog_box = $(".ring_samllnav .ring_nrbox")
			circle = $(".ring_samllnav .ring_nrbox")
			contentzn = $(".ring_samllnav .contentzn")
			contentznspan = '.ring_samllnav .contentzn span'
			content_enlish = $(".ring_samllnav .content_enlish")
		} else {
			rog_box = $(".ring_nav .ring_nrbox")
			circle = $(".ring_nav .circle")
			contentzn = $(".ring_nav .contentzn")
			contentznspan = '.ring_nav .contentzn span'
			content_enlish = $(".ring_nav .content_enlish")
		}
		if($(document).scrollTop() > Math.round($(".ring_box").offset().top) - 700 && scrollfalg) {
			scrollfalg = false;
			rog_box.eq(0).css("display", "block")
			circle.eq(0).addClass("fadeInUp")
			create_circle(1, 0.45);
			smllcountUp(contentznspan, 15, 0);
			contentzn.eq(0).addClass("fadeInUp")
			content_enlish.eq(0).addClass("fadeInUp")
			setTimeout(() => {
				rog_box.eq(1).css("display", "block")
				circle.eq(1).addClass("fadeInUp")
				create_circle(2, 0.50);
				smllcountUp(contentznspan, 10, 1);
				contentzn.eq(1).addClass("fadeInUp")
				content_enlish.eq(1).addClass("fadeInUp")
			}, 500);
			setTimeout(() => {
				rog_box.eq(2).css("display", "block")
				circle.eq(2).addClass("fadeInUp")
				create_circle(3, 0.65);
				countUp(contentznspan, 1000, 2);
				contentzn.eq(2).addClass("fadeInUp")
				content_enlish.eq(2).addClass("fadeInUp")
			}, 800);
			setTimeout(() => {
				rog_box.eq(3).css("display", "block")
				circle.eq(3).addClass("fadeInUp")
				create_circle(4, 0.76);
				countUp(contentznspan, 1000, 3);
				contentzn.eq(3).addClass("fadeInUp")
				content_enlish.eq(3).addClass("fadeInUp")
			}, 1100);
			setTimeout(() => {
				rog_box.eq(4).css("display", "block")
				circle.eq(4).addClass("fadeInUp")
				create_circle(5, 0.65);
				smllcountUp(contentznspan, 30, 4);
				contentzn.eq(4).addClass("fadeInUp")
				content_enlish.eq(4).addClass("fadeInUp")
			}, 1400);
			setTimeout(() => {
				rog_box.eq(5).css("display", "block")
				circle.eq(5).addClass("fadeInUp")
				create_circle(6, 0.50);
				smllcountUp(contentznspan, 50, 5);
				contentzn.eq(5).addClass("fadeInUp")
				content_enlish.eq(5).addClass("fadeInUp")
			}, 1700);
		}
	})

	$(window).resize(function() {
		widresize()
	})

	function widresize() {
		let wid = $(window).width()
		if(wid < 1000) {
			// 
		}
	}
	widresize()

	function countUp(box, count, i) {
		var div_by = 100,
			speed = Math.round(count / div_by),
			$display = $(box).eq(i),
			run_count = 1,
			int_speed = 24;
		var int = setInterval(function() {
			if(run_count < div_by) {
				$display.text(speed * run_count);
				run_count++;
			} else if(parseInt($display.text()) < count) {
				var curr_count = parseInt($display.text()) + 1;
				$display.text(curr_count);
			} else {
				clearInterval(int);
			}

		}, int_speed);
	}

	function smllcountUp(box, count, i) {
		var $display = $(box).eq(i),
			int_speed = 50,
			num = 0;
		var int = setInterval(function() {
			if(num < count) {
				num = num + 1;
				$display.text(num);
			} else {
				clearInterval(int);
			}
		}, int_speed);
	}
	//hover效果
	$(".activity_img").on("mouseenter", ".actimg_box  a", function() {
		$(this).find("span").css("background", "#bf1a20")
	})
	$(".activity_img").on("mouseleave", ".actimg_box  a", function() {
		$(this).find("span").css("background", "#fff")
	})
})