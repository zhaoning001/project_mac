$(function() {
	$(".nav-moblie").click(function() {
		if($(this).hasClass("navmo-active")) {
			$(this).removeClass("navmo-active")
			$('.neirong-bd').removeClass("neirong-show")
		} else {
			$(this).addClass("navmo-active")
			$('.neirong-bd').addClass("neirong-show")
		}
	})
	var flag = 0;
	$(".liac_smziy").click(function() {
		if(flag == 0) {
			$(".smnav_xial").animate({
				height: "185px"
			}, 500)
			flag = 1
		} else {
			$(".smnav_xial").animate({
				height: "0"
			}, 500)
			flag = 0
		}
	})
	$(".lice_ziy").mouseenter(function() {
		$(this).css("height", "220px")
	})
	$(".lice_ziy").mouseleave(function() {
		$(this).css("height", "100%")
	})
	window.onscroll = function() {scrollFunction()};
	 
	function scrollFunction() {
	    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
	        $(".sidebar_box").css("right","0")
	    } else {
	        $(".sidebar_box").css("right","-100px")
	    }
	}
		
	
	var flobalurl = location.href;
	if (flobalurl.indexOf('pages') >=1) {
		var pagestm='<ul class="sidebar_box">'+
		              '<li class="fix">'+
		                  '<div class="sib_iocnbox">'+'<img src="../img/sidebar1.iocn.png" alt="" />'+'</div>'+
		                  '<div class="sib_nrbox">'+'<p>010-66081702</p>'+'</div>'
		               +'</li>'+
		               '<li class="fix">'+
		                  '<div class="sib_iocnbox">'+'<img src="../img/sidebar2.iocn.png" alt="" />'+'</div>'+
		                  '<div class="sib_weix">'+'<img src="../img/code.png" alt="" />'+'</div>'
		               +'</li>'+
		               '<li class="fix">'+
		                  '<div class="sib_iocnbox">'+'<img src="../img/sidebar3.iocn.png" alt="" />'+'</div>'+
		                  '<div class="sib_nrbox">'+'<p>lc7166@163.com</p>'+'</div>'
		               +'</li>'+
		               '<li class="fix">'+
		                  '<div class="sib_iocnbox" id="sidebar_top">'+'<img src="../img/sidebar4.iocn.png" alt="" />'+'</div>'
		               +'</li>'
		          +'</ul'
		$("body").append(pagestm)          

    }
	$("body").on("click","#sidebar_top",function(){
	  	  $('html, body').animate({scrollTop: 0}, 700)
    })
})
var globaluri = "http://www.liangceshiji.com:8080/front"
var uitll = {
	getdata: function(url, get, json, data, cache, async, success, error) {
		$.ajax({
			url: globaluri + url + 'time=' + new Date().getTime(),
			type: get,
			dataType: json,
			data: data,
			cache: cache,
			async: async,
			success: success,
			error: error
		});
	},
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return(r[2]);
		return null;
	}
}