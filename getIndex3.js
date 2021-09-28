const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Please enter an array: '));

if (array.length > 4){
    console.log(array[3])
}
else{
    console.log(array[array.length-1])
} 