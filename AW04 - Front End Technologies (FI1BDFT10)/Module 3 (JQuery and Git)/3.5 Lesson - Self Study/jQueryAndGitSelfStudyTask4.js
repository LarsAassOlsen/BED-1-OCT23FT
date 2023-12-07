$("document").ready(function () {
    var elem = $("#para3");
    elem.prev().prev().css("background-color", "yellow");
    elem.next().css("background-color", "blue");
})