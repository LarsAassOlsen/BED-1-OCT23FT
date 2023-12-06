$(function() {
    $("#showButton").click(function() {
        $("p").show("slow")
    });
    $("#hideButton").click(function() {
        $("p").hide("slow", "linear")
    });
    $("#toggleButton").click(function() {
        $("p").toggle("fast", afterCompletion)
    });
    $("#fadeinButton").click(function() {
        $("p").fadeIn("slow")
    });
    $("#fadeoutButton").click(function() {
        $("p").fadeOut("slow", "linear")
    });
    $("#toggleFadeButton").click(function() {
        $("p").fadeToggle("fast", afterCompletion)
    });
    $("#fadetoButton").click(function() {
        $("p").fadeTo("fast", 0.5);
    });
    $("#slidedownButton").click(function() {
        $("p").slideDown("slow")
    });
    $("#slideupButton").click(function() {
        $("p").slideUp("slow", "linear")
    });
    $("#toggleSlideButton").click(function() {
        $("p").slideToggle("fast", afterCompletion)
    });
    $("#para1").mouseover(function () {
        $(this).fadeTo("slow", 0.1) 
    });
    $("#para1").mouseout(function () {
        $(this).fadeTo("fast", 1) 
    });
});

function afterCompletion() {
    console.log("animation finished");
}