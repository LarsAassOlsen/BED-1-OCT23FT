$(function () {
    $("#onButton").click(function () {
        $("p").click(hide);
    });
    $("#offButton").click(function () {
        $("p").off("click", hide);
    });
    function hide() {
        $(this).hide();
    }
})