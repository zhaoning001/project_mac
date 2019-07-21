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
	//  公共方法

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