const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Please enter an array: '));

console.log(array[0])
