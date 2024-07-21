//Activity 1:Arithmetic Operators>>
//TAsk 1:
let x=23;
let y=45;
console.log(x+y);//Output:68
//TAsk2:
let k1=24;
let k2=12;
console.log(k1-k2);//output:12
//Task 3:
let m1=24;
let m2=12;
console.log(m1*m2);//output:288
//Task4:
let d1=24;
let d2=2;
console.log(d1/d2);//output:12
//Task5:
let n1=5;
let n2=2;
console.log(n1%n2);//output:1

//Activity 2:Assignment Operators>>
//TAsk 6:
let num1=45;
num1+=11;
console.log(num1);//output:56
//TAsk7:
let num2=100;
num2-=10;
console.log(num2);//output:90;

//Activity 3:Comparison Operators>>
//TAsk 8:
let t1=22;
let t2=21;
console.log(t1>t2);//output:true
console.log(t1<t2);//output:false
//TAsk9:
let t3=21;
console.log(t3>=t2);//output:true
console.log(t3<=t1);//output:true

//Activity 4:Logical Operators>>
//Task 11 + Task 12+ Task 13
let moon=true;
let stars=true;
let ans1=(moon==true&&stars==true)?"starry sky":"normal sky";
let ans2=(moon==true||stars==true)?"beautiful sky":"clear sky";
let ans3=(!(moon==true&&stars==true))?"cloudy sky":"starry sky";
console.log(ans1);
console.log(ans2);
console.log(ans3);

//Activity 5:Ternary Operator>>
let number=-123;
let output=(number<0)?"negative":"positive";
console.log(output);

//Feature Request>>
//1:
let value1= 10;
let value2= 2;
console.log(value1+value2);//adds both the values
console.log(value1-value2);//subtracts both the values
console.log(value1*value2);//multiplies value1 and value2
console.log(value1/value2);//divides value1 by value2
console.log(value1%value2);//calculates the remainder when value1 is divided by value2
console.log(value1**value2);//calculates value1^value2

//2:
//script: grades of the student>>
let english=45;
let maths=34;
let sst=23;
let science=44;
let percentage=((english+maths+sst+science)/(50*4))*100;
if(percentage>=70){
    console.log("pass, 1st divison");
}
else if(percentage>=60&&percentage<70){
    console.log("pass, 2nd division");
}
else if(percentage>=45&&percentage<60){
    console.log("pass,3rd division");
}
else{
    console.log("fail");
}
//3:
//script: to check if a number is negative or positive
let inputNumber=-67;
let negOrpos=(inputNumber<0)?"negative":"positive";//if the condition is true print negative else print positive
console.log(negOrpos);




