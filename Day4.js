//Activity 1>>For loop
//Task1:
for(let i=0;i<10;i++){
    console.log(i+1);
}//output: 1 2 3 4 5 6 7 8 9 10
//Task2:
for(let i=1;i<=10;i++){
    console.log("5x"+i+"="+5*i);
}//output: 5x1=5  5x2=10  5x3=15 ......and so on(in separate lines)

//Activity 2: While loop>>
//Task3:
let sum=0;
let num=1;
while(num<=10){
    sum+=num;
    num++;
}
console.log(sum);//output=55
//Task4:
let n=1;
while(n<=10){
    console.log(n);
    n++;
}

//Activity 3:Do..while Loop
//Task5:
let number=1;
do{
    console.log(number);
    number++;
}while(number<=5);
//Task6:
let x=1;
let num1=5;
let factorial=1;
do{
    factorial*=x;
    x++;
}while(x<=num1);
console.log(factorial);

//Activity 4:Nested loops
//Task 7:
for(let i=0;i<5;i++){
    let output="";
    for(let j=0;j<=i;j++){
        output+="*";
    }
    console.log(output);
}

//Activity 5: Loop control statements>>
//Task 8:
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
//Task9:
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
//Feature Request:
//1: same as task 1 and task 4 .
//2: same as task 2.
//3: same as task 7:
//4: same as task 3.
//5: same as task 6.


