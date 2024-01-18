const jsonData = '{"name": "John", "age": 30, "car": null}';
console.log(jsonData);
const object = JSON.parse(jsonData);
console.log(JSON.stringify(object, null, 5));