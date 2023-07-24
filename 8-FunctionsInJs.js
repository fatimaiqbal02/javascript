console.log("Functions in Js");
/* ----------------------------------------------------------------------------------- */
function greet(name, greet = "Have a good Day"){
    console.log("Hey "+name + "\n" +
                name + ", " +greet);
}
let name1 = "Fatima";
let name2 = "Ayesha";
let name3 = "Mariam";
let name4 = "Saima";
let greetText = "Have a nice day";
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4);

/* -------------------------------------------------------------------------------------*/
function check(num1, num2){
    if(num1 < num2){
        console.log(num1 +' is lesser then '+num2);
    }else
    console.log(num2 +' is lesser then '+num1);
}

let num1 = 3;
let num2 = 6;
console.log('Number 1 = '+num1);
console.log('Number 2 = '+num2);
check(num1,num2);

/* --------------------------------------------------------------------------------------*/
function passByReference(employee){
    console.log("Inside the function");
    employee.name = "Aisha";
    employee.age = 24;
    console.log(employee);
}
let employee ={name :"Fatima", age: 19};
console.log('Before calling function');
console.log(employee);

passByReference(employee);
console.log('After calling function');
console.log(employee);

/* ------------------------------------------------------------------------------------- */
function inputArray(arr){
    for (let i = 0; i < 4 ; i++) {
       arr[i] =  prompt("Enter the array element at"+i+" index:");
       document.write((arr[i]));
    }
}
function printArray(arr){
    for (let i = 0; i < 4 ; i++) {
        console.log('The value at '+i+" index is "+arr[i]);
    }
}
function printArray2(arr){
    arr.forEach(function f(element){
        console.log("The value at index is "+element);
    });
}
function printArray3(arr){
   for (element of arr) {
        console.log("The value at index is "+element);
   }
}
let arr=[];
inputArray(arr);
console.log('The value at index 2 is '+arr[2]);
console.log('Using simple for Loop');
printArray(arr);
console.log('Using for Each Loop');
printArray2(arr);
console.log('Using for of Loop');
printArray3(arr);


/* ------------------------------------------------------------------------------------ */