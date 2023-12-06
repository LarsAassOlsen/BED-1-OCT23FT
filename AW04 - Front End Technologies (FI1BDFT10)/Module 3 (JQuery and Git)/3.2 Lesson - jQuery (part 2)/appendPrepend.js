function append() {
    $("#para1").append("APPENDED para1 text.")
}
function prependTo() {
    $("#example p:last").prependTo("#example p:first");
}
function before() {
    $("p").before("------------------")
}
function insertAfter() {
    $("<p>*****************</p>").insertAfter("p")
}