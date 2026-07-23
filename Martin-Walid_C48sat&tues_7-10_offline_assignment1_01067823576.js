// Practical
//Question1
    let x = "123"
    console.log(Number (x) + 7);

//Question2
    let falsy = 0
    if (falsy == false) {
        console.log ("Invalid")
    }

// Question3
    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0){continue;};
        console.log(i);
    }

//Question4
    let arr = [1,2,3,4,5]
    let arrResult = arr.filter (getEven);

    function getEven (arr){
        return arr % 2 == 0
    }
    console.log(arrResult);
 
//Question5
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]

    console.log([...arr1,...arr2]);

//Question6
function getDayOfWeek(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }
    return day;
}
console.log(getDayOfWeek(2));

//Question7
let array1 = ['a', 'bc', 'cde']
let newArray1  = array1.map(str => str.length)


console.log(newArray1);

//Question8
    function checkDivisibility(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Divisible by both";
        } else {
            return "Not divisible by both";
        }
    }
    console.log(checkDivisibility(15));
    console.log(checkDivisibility(10));

//Question9
    const square = (num) => {
        return num * num;
    };
    console.log(square(5));

//Question10
    function formatPerson({ name, age }) {
    return `the user who is ${name} is ${age} years old`;
    }
    const person = { name: 'Martin', age: 28 };
    console.log(formatPerson(person));

//Question11
    function sumMultiple(num1, num2, ...args) {
    return num1 + num2 + args.reduce((sum, current) => sum + current, 0);
}
    console.log(sumMultiple(1, 2, 3, 4, 5))

//Question12
function delaySuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('Success');
        }, 3000);
    });
}

    delaySuccess().then((message) => {
    console.log(message);
    });

//Question13
    function findLargest(arr) {
        if (arr.length === 0) return null;

        let largest = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }
    console.log(findLargest([1, 3, 7, 2, 4]));

//Question14
    function getObjectKeys(obj) {
        return Object.keys(obj);
    }
    const char = { name: "John", age: 30 };
    console.log(getObjectKeys(char));

//Question15
    function splitWords(str) {
        return str.split(" ");
    }

    const input = "The quick brown fox";
    console.log(splitWords(input)); 



//Essay

//Question1//
/*The difference between for loop and for each is the following 
The for...of statements combo iterates (loops) over the values of any iterable.
The code block inside the loop is executed once for each value.
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.
when to use 
for...of:
Simple Array Iteration: Use it when you want to perform a simple action or side
effect (like logging or updating the DOM)
for every single element in an array.Functional Programming Styles:
It integrates well if you are chaining array methods and need a terminal step
*/

//Question2//
/* 
Hoisting is JavaScript's default behaviour of moving declarations to the top of their scope.
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

The Temporal Dead Zone (TDZ) is a behavior in JavaScript where a variable exists in a scope
but cannot be accessed until it is officially initialized.
Hoisting :
x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x;                     

var x;

TDZ:
{
    
    console.log(myScore);
    
    let myScore = 100;
    
    console.log(myScore); 
}
*/
//Question3//
/* 
- The == operator is known as the loose equality operator.
It compares two values for equality after performing type coercion,
meaning it converts the values to the same type before comparing them.

- The === operator is called the strict equality operator.
It checks for equality without type conversion,
meaning both the value and the type must be exactly the same for the comparison to return true.
*/

//Question4//
/*
The try...catch statement in JavaScript is a structural mechanism used to
intercept runtime errors and prevent applications from crashing.
When combined with modern async/await syntax,
it becomes the standard approach for managing errors in asynchronous code
*/

//Question5//
/*
Type conversion is the manual, programmer-driven process of changing a value’s data type,
while coercion is the automatic, behind-the-scenes type
conversion performed by a programming language (like JavaScript) during operations.
Conversion is explicit; coercion is implicit
*/