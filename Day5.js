//Activity 1: Function Declaration
//TAsk1:
function checkEvenOdd(num){
    if(num%2==0){
        return "EVEN";
    }
    return "ODD";
}
console.log(checkEvenOdd(34));//output: EVEN
//Task2:
function square(num){
    return num*num;
}
console.log(square(5));//output: 25

//Activity 2: Function Expression
//Task3:
const max=function(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    return "EQUAL";
}
console.log(max(3,4));///output: 4
//Task4:
const newStr=function(name){
    return `${name}, you are welcomed.`;
}
console.log(newStr("tanya"));//tanya, you are welcomed.

//Activity 3: Arrow Function
//Task 5:
const sum=(num1,num2)=>(num1+num2);
console.log(sum(3,6));
//Task 6:
const check=(str,char)=>{
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            return true;
        }
    }
    return false;
}
console.log(check("tanishka","q"))//output: false

//Activity 4: Function Parameters and Default Values
//Task 7:
function product(num1,num2=2){
    return num1*num2;
}
console.log(product(34));//output:68
//Task 8:
function greeting(name, age=25){

    return `${name}, hello! Nice to meet you. Your age is, ${age}.`;

}
console.log(greeting("ram",45));//output:ram, hello! Nice to meet you. Your age is, 45.

//Activity 5: Higher order functions
//Task 9:
const printMe=()=>{
    console.log("hello");
}
function callMe(n){
    for(let i=0; i<n;i++){
        printMe();
    }
}
callMe(5);//output: hello
                // hello
                // hello
                // hello
                // hello
//Task 10:
const findProductBy2=(num)=>(num*2);
const findSum=(num)=>(num+2);
function higherOrderFun(func1, func2, value){
    console.log(func1(value));
    console.log(func2(value));
}
higherOrderFun(findProductBy2,findSum,5);//output: 10  7

//Feature Request:

//1:same as task1.
//2:same as task 2.
//3:same as task4.
//4:same as task 5.
//5:same as task 9.

