function action1() {
    $("div p").replaceWith(replacementFn)
}

function replacementFn() {
    return '<a href="https://youtube.com">' + $(this).text() + '</a>';
}

function action2() {
    $("a").hover(hoverToggleEnter, hoverToggleExit)
}

function hoverToggleEnter() {
    $(this).css("font-size", "20px");
}

function hoverToggleExit() {
    $(this).css("font-size", "16px");
}

function action3() {
    $("p").fadeOut();
    $("button").slideUp();
}