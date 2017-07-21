$(function() {
    jQuery.validator && (jQuery.validator.addMethod("noEqualTo", function(a, b, c) {
        return this.optional(b) || $(c).val() != a
    }, "两次输入不能相同"),
    jQuery.validator.addMethod("mobile", function(a, b) {
        return this.optional(b) || /^(1[3-9]\d{9})$/.test(a)
    }, "手机号格式不正确"),
    jQuery.validator.addMethod("uname", function(a, b) {
        return this.optional(b) || /^[a-zA-Z]{1}[a-zA-Z0-9]{5,19}$/.test(a)
    }, "用户名必须由6-20位的数字或大小写字母组成"),
    jQuery.validator.addMethod("upassword", function(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9\-~!@#$%^&*()=_|"\'?.,+{}[\]`:]{6,18}$/.test(a)
    }, "密码为6-18位的数字或字符"),
    jQuery.validator.addMethod("idNumber", function(a, b) {
        var c;
        return c = 15 == a.length ? /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(a) : 18 == a.length ? /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(a) : !1,
        this.optional(b) || c
    }, "请输入正确的身份证号"),
    jQuery.validator.addMethod("practiceNumber", function(a, b) {
        return this.optional(b) || /(^\d{17}$)/.test(a)
    }, "请输入正确的执业证号"),
    jQuery.validator.addMethod("icRegNumber", function(a, b) {
        return this.optional(b) || /(^(\d{15}|[\d\w]{18})$)/.test(a)
    }, "请输入正确的工商注册号")),
    $("input").keydown(function(a) {
        var c, b = a.keyCode ? a.keyCode : a.which ? a.which : a.charCode;
        13 == b && (c = $(this).parents("form").eq(0),
        "undefined" == typeof c.attr("noEnter") && $(this).parent().submit())
    })
});
