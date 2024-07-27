//Activity 1: template Literals>>
//Task1:
const object={
    name:"Arnav gupta",
    age:20
}
console.log(`name of the person is: ${object.name} and his age is: ${object.age}.`);
//Task 2:
let str=`happy birthday john.
May you live long.
May all your dreams vome true.`
console.log(str);

//Activity 2: Destructuring>>
//task 3:
let arr=[1,"tanya",2,3,4];
const [first, second]=arr;
console.log(first, second);
//Task 4:
const book={
    title:"You are the best friend",
    author:"Pandey Ji"
}
const {title, author}=book;
console.log(title, ",",author);

//Activity 3:Spread and Rest Operators:
//Task 5:
let oldArr=[1,2,3,4];
let newArr=[...oldArr,"happy","sad",78];
console.log(newArr);
//Task6:
const sum=function(...args){
    let result=0;
    for(let i=0;i<args.length;i++){
        result+=args[i];
    }
    return result;
}
console.log(sum(2,3,4,5,6));

//Activity 4: Default Parameters>>
//Task 7:
const multi=(num1,num2=1)=>{
    return num1*num2;
}
console.log(multi(3)); //output:3
console.log(multi(3,4));//output:12

//Activity 5:Enhanced Object literals>>
//Task 8:
const name="Tanishka";
const course="B.tech";
const year=2023
const student={
    name,
    course,
    year,
    show(){
        let str=`Name of student: ${this.name}
        Course enrolled in: ${this.course}
        Year of enrollment: ${this.year}`
        console.log(str);
    }
}
console.log(student);
student.show();
//Task9:
const user="student";
const details={
    [user+"Name"]:"Tanishka Gupta",
    [user+"Year"]:2023,
    [user+"Course"]:"B.tech",
    [user+"Age"]:20
}
console.log(details)

//Feature request:
//1:same as activity 1
//2:same as activity 2
//3:same as activity 3
//4:same as activity 4
//5:same as activity 5

