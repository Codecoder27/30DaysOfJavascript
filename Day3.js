//Activity 1: If-Else Statements:
//Task1:
let num=34;
if(num>0){
    console.log("positive");
}
else if(num<0){
    console.log("negative");
}
else{
    console.log("zero");
}//output: positive
//TAsk2:
let age=12;
if(age>=18){
    console.log("eligible to vote");
}
else{
    console.log("you are a minor");
}//output:you are a minor

//Activity 2:Nested If else statements>>
//Task1:
let num1=23;
let num2=33;
let num3=42;
if(num1>num2){
    if(num1>num3){
        console.log("largest: "+ num1);
    }
    else{
        console.log("largest: "+num3);
    }
}
else if(num2>num1){
    if(num2>num3){
        console.log("largest: "+ num2);
    }
    else{
        console.log("largest: "+num3);
    }
}//output: 42

//Activity 3: Switch Case>>
//TAsk 4:
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 0:
        console.log("sunday");
        break;
    default:
        text="incorrect input.";
}//output:Tuesday
//Task5:
let marks=85;
switch(Math.floor(marks/10)){
    case (10):
    case(9):
        console.log("grade: A" );
        break;
    case(8):
        console.log("Grade: B");
        break;
    case(7):
        console.log("Grade: C");
        break;
    case(6):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade:F");
}//output: B

//Activity 4:Conditional (Ternary )Operator>>
//Task 6:
let number=55;
let ans=(55%2==0)?"even":"odd";
console.log(ans);

//Activity 5: Combining Conditions>>
let year=1900;
if(year%4==0){
    if(year%100!=0){
        console.log("leap year");
    }
    else if(year%100==0&&year%400!=0){
        console.log("Not a leap year");
    }
    else{
        console.log("leap year");
    }
}
else{
    console.log("not a leep year");
}//output: not a leap year

//Feature Request>>
//1: same as Task1
//2: same as Task2
//3: same as Task3
//4: same as Task4
//5: same as Task5

