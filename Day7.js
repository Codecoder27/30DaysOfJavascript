//Activity 1: Object creation and Access
//Task1:
const book={
    title:"Half GirlFriend",
    author: "Chetan Bhagat",
    year: 2014
}
console.log(book);  //output:{ title: 'Half GirlFriend', author: 'Chetan Bhagat', year: 2014 }
//Task2:
console.log(book.author); //output: Chetan Bhagat
console.log(book.title);  //output: Half GirlFriend

//Activity 2: Object Methods>>
//Task3: 
book.printTitleAuthor=()=>{
    let Str=`Name of book is ${book.title} and name of Author is ${book.author}.`
    console.log(Str);
}
book.printTitleAuthor();
//Task4:
book.updateYear=()=>{
    book.year=2015;
    console.log(book);
}
book.updateYear();

//Activity 3: Nested Objects:
//Task5:
const library={
    Mathematics:{
        books:["BS. Grewal","RS Agrawal","RD Sharma"]
    },
    Science:{
        books:["S.Chand","Encyclopedia"]
    },
    Novels:{
        books:["Sapiens","You are The Best friend"]
    }
}
console.log(library);
//Task6:
let libraryNames=Object.keys(library);
console.log(`name of all libraries are: ${libraryNames}`);
console.log(`Books in mathematics library : ${library.Mathematics.books}`);
console.log(`Books in science library : ${library.Science.books}`);
console.log(`Books in novel library : ${library.Novels.books}`);

//Activity 4: the 'This' keyword:
//Task 7:
book.printTitleAuthor2=function(){
    console.log(`Title: ${this.title}, Author: ${this.author}`)
}
book.printTitleAuthor2();

//Activity 5: Object Iteration>>
//TAsk 8:
for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(key+":"+element);  
    }
}
//Task 9:
console.log(Object.keys(book));
console.log(Object.values(book));

//Feature Request:
//1: same as activity 1,2 and 4.
//2: same as activity 3.
//3: same as activity 5.


