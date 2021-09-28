const prompt = require('prompt-sync')({ sigint: true });

const array = Json.parse(prompt('Please enter an array: '));

console.log(array[array.length-1])
