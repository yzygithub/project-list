var showTomast, showBottomMessageBox, parseTime;
! function(a) {
	a.iDialog = function(b) {
		var c = {},
			d = {
				width: "262px",
				title: "提示",
				icon: 1,
				content: "",
				mode: 1,
				countdown: 3,
				ok: function() {},
				cancel: function() {},
				close: function() {}
			};
		switch (c = a.extend(d, b), c.icon) {
			case 1:
				c.icon = "http://static.ch64.cn/global/images/idialog_icon_succeed.png";
				break;
			case 2:
				c.icon = "http://static.ch64.cn/global/images/idialog_icon_question.png"
		}
		this.createHtml = function() {
			var d, e, f, b = "";
			switch (b += '<div class="i-dialog">', b += '	<div class="header">', b += '		<div class="title">' + c.title + "</div>", b += '		<a class="close">&times;</a>', b += "	</div>", b += '	<div class="body clearfix">', 3 != c.mode && (b += '	<div class="icon" style="background-image: url(' + c.icon + ')"></div>'), b += '		<div class="content">' + c.content + "</div>", b += "	</div>", c.mode) {
				case 2:
					b += '<div class="footer">', b += '	<button class="ok" type="button">确定</button>', b += '	<button class="cancel" type="button">取消</button>', b += "</div>";
					break;
				case 1:
					b += '<div class="footer">', b += '	<button class="cancel" type="button">确定</button>', b += "</div>";
					break;
				case 0:
			}
			switch (b += "</div>", b += '<div class="hide-bg"></div>', a("body").append(b), a(".i-dialog").css("margin-left", -a(".i-dialog").width() / 2), a(".i-dialog").css("margin-top", -a(".i-dialog").height() / 2), d = function() {
				a(".i-dialog").remove(), a(".hide-bg").remove(), c.close()
			}, a(".i-dialog .close").click(d), a(".i-dialog .cancel").click(function() {
				c.cancel(), d()
			}), c.mode) {
				case 0:
					a(".i-dialog .title").text(c.countdown + "秒后关闭"), e = c.countdown - 1, f = setInterval(function() {
						e > 0 ? (a(".i-dialog .title").text(e + "秒后关闭"), e--) : (clearInterval(f), d())
					}, 1e3);
					break;
				case 2:
					a(".i-dialog .ok").click(function() {
						c.ok(), d()
					})
			}
		}, this.createHtml()
	}, a.iDialogSelect = function(b) {
		var f, c = {},
			e = {
				icon: "http://static.ch64.cn/global/images/idialog_icon_question.png",
				title: "选项",
				list: {},
				click: function() {},
				close: function() {}
			};
		c = a.extend(e, b), f = "i_dialog_select_" + Math.random(), this.createHtml = function() {
			var d, b = "";
			b += '<div class="i-dialog-select" ch-dialog-select-id="' + f + '">', b += '	<div class="header clearfix">', b += '		<img class="icon" src="' + c.icon + '"/>', b += '		<div class="title">' + c.title + "</div>", b += '		<a class="close">&times;</a>', b += "	</div>", b += '	<ul class="list">', a.each(c.list, function(a, c) {
				b += '<li ch-dialog-option="' + a + '">' + c + "</li>"
			}), b += "	</ul>", b += "</div>", b += '<div class="hide-bg" ch-dialog-select-id="' + f + '"></div>', a("body").append(b), a(".i-dialog-select").css("margin-left", -a(".i-dialog-select").width() / 2), a(".i-dialog-select").css("margin-top", -a(".i-dialog-select").height() / 2), d = function() {
				a("[ch-dialog-select-id='" + f + "']").remove(), c.close()
			}, a(".i-dialog-select .close,.hide-bg").click(d), a(".i-dialog-select li").click(function() {
				c.click(a(this).attr("ch-dialog-option"), a(this).text()), d()
			})
		}, this.createHtml()
	}, a.fn.iCountdown = function(b) {
		var c = {},
			d = this,
			e = {
				mode: 1,
				second: 60,
				content: "已发送",
				tipElement: "span",
				tipClass: "",
				text: "重新发送",
				end: function() {}
			};
		c = a.extend(e, b), this.showCountdown = function() {
			var e, b = c.second - 1;
			switch (c.mode) {
				case 1:
					a(d).hide(), a(d).after("<" + c.tipElement + ' id="tips_countdown" class="' + c.tipClass + '">' + c.content + "(" + c.second + ")</" + c.tipElement + ">"), e = setInterval(function() {
						b > 0 ? (a("#tips_countdown").text(c.content + "(" + b + ")"), b--) : (a("#tips_countdown").remove(), "" != c.text && a(d).text(c.text), a(d).show(), clearInterval(e), c.end())
					}, 1e3);
					break;
				case 0:
					a(d).attr("disabled", !0).text(c.content + "(" + c.second + ")"), e = setInterval(function() {
						b > 0 ? (a(d).text(c.content + "(" + b + ")"), b--) : (a(d).text(c.text).attr("disabled", !1), clearInterval(e), c.end())
					}, 1e3)
			}
		}, this.showCountdown()
	}, a.fn.getCaptcha = function() {
		var b = a(this).attr("captcha-id"),
			c = "/captcha/pic/id/" + b;
		a(this).attr("src", c).attr("title", "点击刷新验证码").css("cursor", "pointer"), a(this).click(function() {
			a(this).attr("src", c + "/" + Math.random())
		})
	}
}(jQuery), showTomast = function(a, b) {
	var e, c = "tomast_" + Math.random(),
		d = '<div tid="' + c + '" class="tomast">' + a + "<div>";
	$("body").append(d), e = $("[tid='" + c + "']"), e.css("margin-left", -e.width() / 2), e.css("margin-top", -e.height() / 2), "undefined" == typeof b && (b = 3e3), setInterval(function() {
		e.remove()
	}, b)
}, showBottomMessageBox = function(a, b) {
	var c, d, e;
	"undefined" == typeof b && (b = 19), "undefined" == typeof a && (a = 9), c = new Date, c.getHours() < b && c.getHours() > a || (d = '<div class="bottom-message-button">', d += '	<span class="icon-mail">下班啦，给我们留言吧</span>', d += "</div>", d += '<div class="bottom-message-box">', d += '	<div class="box-header">', d += '		<div class="box-title">给我们留言</div>', d += '		<span class="icon icon-min" title="最小化窗口"></span>', d += "	</div>", d += '	<div class="box-content">', d += '		<form class="box-form" method="post">', d += "			<p>我们会在看到留言的第一时间回复你~</p>", d += '			<div class="form-group">', d += '				<textarea class="form-control" name="msg_content" rows="5" placeholder="请输入留言"></textarea>', d += "			</div>", d += '			<div class="form-group">', d += '				<input class="form-control" name="msg_mobile" placeholder="联系电话" type="text">', d += "			</div>", d += '			<input name="msg_sub" class="btn btn-primary pull-right btn-block" value="留言" type="button">', d += '			<div style="clear:both;"></div>', d += "		</form>", d += '		<div class="box-success">', d += '			<img class="success-img" src="http://static.ch64.cn/Enterprise/images/common_bottom_msg_success.png">', d += "			<h2>留言成功</h2>", d += "			<p>我们会在1个工作日内联系你。</p>", d += '			<a class="btn btn-success">好的</a>', d += '			<a class="btn-again" href="javascript:void(0);">再次留言</a>', d += "		</div>", d += "	</div>", d += "</div>", $("body").append(d), $(".bottom-message-button").click(function() {
		$(".bottom-message-button").css("bottom", -100), $(".bottom-message-box").css("bottom", 0)
	}), $(".icon-min").click(function() {
		$(".bottom-message-button").css("bottom", 0), $(".bottom-message-box").css("bottom", -600)
	}), $(".box-success .btn-success").click(function() {
		$("input[name='msg_message']").val(""), $("input[name='msg_mobile']").val(""), $(".box-form").show(), $(".box-success").hide(), $(".bottom-message-button").css("bottom", 0), $(".bottom-message-box").css("bottom", -600)
	}), $(".box-success .btn-again").click(function() {
		$("input[name='msg_message']").val(""), $("input[name='msg_mobile']").val(""), $(".box-form").show(), $(".box-success").hide()
	}), e = function(a) {
		var d, b = "boxtips_" + Math.random(),
			c = '<div tid="' + b + '" class="box-tips">' + a + "</div>";
		$(".box-content").append(c), d = $("[tid='" + b + "']"), d.css("left", ($(".box-content").width() - $(".box-tips").width()) / 2), setInterval(function() {
			d.remove()
		}, 3e3)
	}, $("input[name='msg_sub']").click(function() {
		var c, a = $("textarea[name='msg_content']").val(),
			b = $("input[name='msg_mobile']").val();
		return a.length < 10 ? ($("textarea[name='msg_content']").parent().addClass("has-error"), e("留言不能少于10个字"), void 0) : /^[(86)|0]?1[34578]\d{9}$/i.test(b) ? (c = "http://www.ch64.cn/leave_message?content=" + a + "&mobile=" + b, $.ajax({
			type: "get",
			url: c,
			success: function(a) {
				1 == a.error ? ($(".box-form").hide(), $(".box-success").show()) : e(a.data)
			},
			dataType: "json"
		}), void 0) : (e("请填写手机号码"), void 0)
	}), $(".box-form .form-control").click(function() {
		$(this).parent().removeClass("has-error")
	}))
}, parseTime = function(a) {
	if (0 > a) return "";
	var b = new Date(1e3 * a);
	return b.getFullYear() + "-" + (b.getMonth() < 9 ? "0" + (b.getMonth() + 1) : b.getMonth() + 1) + "-" + (b.getDate() < 10 ? "0" + b.getDate() : b.getDate()) + " " + (b.getHours() < 10 ? "0" + b.getHours() : b.getHours()) + ":" + (b.getMinutes() < 10 ? "0" + b.getMinutes() : b.getMinutes()) + ":" + (b.getSeconds() < 10 ? "0" + b.getSeconds() : b.getSeconds())
}, $(function() {
	$("[type-change]").focus(function() {
		$(this).attr("type", $(this).attr("type-change"))
	}), $("[ch-captcha='pic']").each(function() {
		$(this).getCaptcha()
	}), $("input[number]").on("keyup", function() {
		$(this).val(), $(this).val($(this).val().replace(/\D/g, ""))
	})
});