/*
$(function () {
    $("#onButton").on("click", function() {
        $("#para1").on("mouseenter mouseleave", highlight)
    });
    $("#offButton").on("click", function() {
        $("#para1").off("mouseenter mouseleave", highlight)
    });

});
function highlight() {
    console.log("Event triggered")
    $(this).toggleClass("highlighted");
}*/
$(function() {
    $("#onButton").click(function() {
        $("#para1").hover(highlight, highlight)
    });
    $("#offButton").click(function() {
        $("#para1").off("mouseenter mouseleave", highlight)
    });

});
function highlight() {
    console.log("Event triggered")
    $(this).toggleClass("highlighted");
}