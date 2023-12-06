function changeStyle() {
    text.style.fontSize = "16px";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "blue";
}
function changeColor() {
    body = document.getElementsByTagName("body")[0];
    myBodyElements = body.getElementsByTagName("p");
    firstParagraph = myBodyElements[1];
    firstParagraph.style.color = "red";
    secondParagraph = myBodyElements[2];
    secondParagraph.style.color = "green";
}

function getAttributes() {
    var href = document.getElementById("link1").href;
    alert('The value of the href atrribute of this link is : ' + href);

    var target = document.getElementById("link1").target;
    alert('The value of the target attribute of the link is : ' + target);

    var type = document.getElementById("link1").type;
    alert('The value of the type attribute of the link is : ' + type);
}

function insertRow() {
    var table = document.getElementById("myTable").insertRow(0);
    var name = table.insertCell(0);
    var surname = table.insertCell(1);

    name.innerHTML = "New Name";
    surname.innerHTML = "New Surname";
}

function createTable() {
    rowNumber = window.prompt("Input number of rows", 1);
    columnNumber = window.prompt("Input number of columns", 1);

    for (var r = 0; r < parseInt(rowNumber, 10); r++){
        var row = document.getElementById("myTable2").insertRow(r);

        for (var c = 0; c < parseInt(columnNumber, 10); c++)
        {
            var cell = row.insertCell(c);
            cell.innerHTML = "Row-" + r + " Column-" + c;
            }
    }
    createMyTable2Button.style.visibility = "hidden";
}

function removeSelected() {
    var x = document.getElementById("fruitsSelect");
    x.remove(x.selectedIndex);
}

function printSize() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    console.log("Width: " + width);
    console.log("Height: " + height);
}

function displayPikachu() {
    let pikachu = new Image();
    pikachu.src = "https://cdn.pixabay.com/photo/2016/09/09/11/59/pokemon-1656997_960_720.png";
    pikachu.width = "240";
    pikachu.height = "200";

    displayNewImage(pikachu);
}

function displayBulbasaur() {
    let bulbasaur = new Image();
    bulbasaur.src = "https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png";
    bulbasaur.width = "235";
    bulbasaur.height = "220";

    displayNewImage(bulbasaur);
}

function displayNewImage(newImage) {
    var images = document.getElementsByTagName("img");
    for (var p = 0; p < images.length; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    document.body.appendChild(newImage);
}

var italicItems;
window.onload = getItalicItems();

function getItalicItems() {
    italicItems = document.getElementsByTagName("i");
}

function highlight() {
    for (let i = 0; i < italicItems.length; i++){
        italicItems[i].style.color = "blue";
    }
}

function turnOffHighlight() {
    for (let i = 0; i < italicItems.length; i++){
        italicItems[i].style.color = "black";
    }
}