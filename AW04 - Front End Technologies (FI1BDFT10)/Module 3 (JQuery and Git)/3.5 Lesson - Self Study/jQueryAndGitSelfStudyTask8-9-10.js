$(function () {
    $("#button1").dblclick(function () {
        $(this).fadeTo("slow", 0.4);
    });
    $("#button2").hover(function () {
        $(this).slideUp();
    });
    $("#button3").click(function () {
        $(this).animate({
            width: '200px'
        }, 1000);
    })
})