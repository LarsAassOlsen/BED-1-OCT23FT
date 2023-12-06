$("document").ready(function() {
    var elem = $("#para3");
    elem.prev().css("border", "3px solid red")
               .css("background-color", "yellow");
    elem.next().css("border", "3px solid green")
               .next().css("background-color", "blue");
    elem.parentsUntil($("body")).css("border", "3px dashed blue");

    var leftmargin = 0;
    var fontSize = 20;
    $("#example").children().each( (index, element) => {
        $(element).css("font-size", fontSize + "px")
                  .css("margin-left", leftmargin);
        fontSize += 2;
        leftmargin += 10;
    });

});