let apple : number = 5;
let speed : string = 'fast';
let hasName : boolean = true;

let nothingMuch : null = null;
let nothing : undefined = undefined;

//Built-in objects
let now : Date = new Date();

//Arrays
let colors : string[] = ['red', 'yellow', 'green', 'blue'];
let truths : boolean[] = [true, false, true, false];
let numbers : number[] = [1, 2, 3, 4, 5, 6, 7];

//Classes
class Car {

};

let car : Car = new Car();



//Object literals
let point : {x: number ; y: number} = {
    x: 10,
    y: 20
};

//Function
const logNumber : (i: number) => void = (i: number) => {
    console.log(i);
};


//using annotations when a variable cannot be inferred correctly
let theNumbers = [-10, -12, 30];
let foundNumber: boolean | number = false;

for (let i = 0; i < theNumbers.length; i++){
    if(theNumbers[i] > 0){
        foundNumber = theNumbers[i];
    }
}