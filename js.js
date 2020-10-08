$(document).ready(function() {
    // $("#login-mc").click(function() {
    //     alert("您尚未登录，请先登录");
    //     window.location.href = "login.html";
    // });


    $("#confire-pwd").change(function() {
        if ($("pwd").val() == $("confire-pwd").val()) {
            $("#register-mc").text("注册");
            $("#register-mc").removeAttr("disabled");
        } else {
            $("#register-mc").text("两次输入密码不统一");
            $("#register-mc").attr("disabled", "disabled");
        }
    });

});