let text = "My favourite book is \"Harry Potter\". I love this book so much.";

let resultText1 = text.slice(3, 35) + " ";
let resultText2 = text.slice(0, 3) + text.slice(13, 21) + text.slice(39, 43) + ". ";
let resultText3 = text.slice(0, 3) + text.slice(13, 21) + text.slice(21, 36).toUpperCase() + " ";
let resultText4 = text.slice(28, 34).toLowerCase() + " " + text.slice(22,27).toLowerCase();

document.writeln(resultText1);
document.writeln(resultText2);
document.writeln(resultText3);
document.writeln(resultText4);