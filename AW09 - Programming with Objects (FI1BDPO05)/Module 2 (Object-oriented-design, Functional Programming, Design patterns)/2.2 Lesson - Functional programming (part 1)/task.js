/*
Object with 1x private property: "textToAdd".
Implement its getters and setters.
Object should contain one function - generateText().
generateText() should take string parameter (for the sake of naming - variable x) and
return function which also takes string parameter (variable y).
The final function should return a string containing x at the beginning, textToAdd in between and y at the end.
*/

const TextGenerator = ({ textToAdd }) => {
    var _textToAdd = textToAdd;
    return {
        generateText: x => y => x + _textToAdd + y,
        setTextToAdd: newTextToAdd => _textToAdd = newTextToAdd,
    }
}

const tg = TextGenerator({ textToAdd: '......' });
const fun = tg.generateText("First Text");
console.log(fun("Second Text"));
tg.setTextToAdd("^__^");
console.log(fun("Second Text"));