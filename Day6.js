//Activity 1: Array Creation and Access
//Task1:
const arr1=[1,2,3,4,5];
console.log(arr1);//output:[ 1, 2, 3, 4, 5 ]
//Task 2:
const arr2=new Array(1,2,3,4,5,6);
console.log(arr2[0],arr2[5]); //output: 1  6

//Activity 2: Array Methods(BASICS):
//TAsk3 + Task4+ TAsk5+ Task6
const arr3= ["apple","mango"];
arr3.push("banana");
console.log(arr3);//output:[ 'apple', 'mango', 'banana' ]
arr3.pop();
console.log(arr3);//output:[ 'apple', 'mango' ]
arr3.shift();
console.log(arr3);//output:[ 'mango' ]
arr3.unshift("pomegranate");
console.log(arr3);//output:[ 'pomegranate', 'mango' ]

//Activity 3: Array Methods(INTERMEDIATE)
//Task7:
const arr4=[1,2,3,4,5];
const arr5= arr4.map(i=>{
    return i*2;
});
console.log(arr5);//output:[2,4,6,8,10]
//Task8:
const arr6=arr4.filter(n=>{
    return n%2==0;
})
console.log(arr6);//output: [2,4]
//Task9:
const result=arr4.reduce((sum,i)=>{
    return sum+i;
})
console.log(result);//output: 15

//Activity 4: Array Iteration:
//Task10:
const arr7=["mumma","papa","didi","bhaiyu","main"];
for(let i=0;i<arr7.length;i++){
    console.log(arr7[i]);
}
//TAsk11:
arr7.forEach(i=>{
    console.log(i);
});

//Activity 5: Multi-dimensional Arrays:
// Task 12+ Task 13:
const matrix=[[2,3,4],[5,6,7]];
for(let i=0;i<matrix.length;i++){
    let str="";
    for(let j=0;j<matrix[0].length;j++){
        str+=matrix[i][j]+" ";
    }
    console.log(str);
}
//output: 2 3 4
    //    5 6 7 
console.log(matrix[1][2])//output: 7

//Feature request:
//1:same as activity 2
//2:same as activity 3
//3:same as activity 4
//4:same as activity 5
  

