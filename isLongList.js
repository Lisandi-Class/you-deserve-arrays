const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Please enter an array: '));

if (array.length >= 10){
    arrayTrue = array.length >= 10 
    console.log(arrayTrue)
}
else{
    arrayFalse = array.length <! 10
    console.log(arrayFalse)
}