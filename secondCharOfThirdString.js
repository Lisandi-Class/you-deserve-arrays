const prompt = require('prompt-sync')({ sigint: true });

const array = JSON.parse(prompt('Please enter an array: '));

if (array[2] === String){
    console.log(array[2])
}
else{
    console.log('Error')
}