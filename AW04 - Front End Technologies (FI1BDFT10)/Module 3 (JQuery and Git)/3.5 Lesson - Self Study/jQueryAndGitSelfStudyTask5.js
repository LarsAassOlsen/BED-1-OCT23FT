function button1Click() {
    $("p[lang]").html("<img src='https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png' width='235' height='220'>");
}

function button2Click() {
    $("<button>Empty button</button>").insertAfter("button:first-of-type");
}

function button3Click() {
    $("p").append($("#para1").text());
}