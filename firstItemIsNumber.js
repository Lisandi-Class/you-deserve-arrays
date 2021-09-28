const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Please enter an array: '));

if (array[0] === Number){
    arrayTrue = array[0] === Number
    console.log(arrayTrue)
}
else{
    arrayFalse = array[0] === Number
    console.log(arrayFalse)
}