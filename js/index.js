// 2-chi maslala tuzish

//   try catch throw ga oid masalalar
// 1-misol

// function divide(a,b){
// if(b===0){
//     throw new Error("Sonni 0 ga bolib bolmaydi")
// }
// return a/b
// }
// try {
//     const result= divide(10,0)
//     console.log('result', result);
// }catch (error){
// console.error("An error occured:", error.message)
// }

// 2-misol

// function divide(a,b){
// if(b===0){
//     throw new Error("Sonni 0 ga kopaytirib bolmaydi")
// }
// return a*b
// }
// try {
//     const result= divide(10,0)
//     console.log('result', result);
// }catch (error){
// console.error("An error occured:", error.message)
// }

// 3-misol

// function divide(a,b){
// if(b===0){
//     throw new Error("Songa  0 qoshsa  ham yigindi ozgarmaydi ")
// }
// return a+b
// }
// try {
//     const result= divide(10,0)
//     console.log('result', result);
// }catch (error){
// console.error("An error occured:", error.message)
// }

// 4-misol

// function divide(a,b){
// if(b===0){
//     throw new Error("Songa  0 ayirsa  ham yigindi ozgarmaydi ")
// }
// return a-b
// }
// try {
//     const result= divide(10,0)
//     console.log('result', result);
// }catch (error){
// console.error("An error occured:", error.message)
// }

// obekt metodiga oid masalalar

// 1-misol

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// function findstudents(students){
//     return students
// }
// console.log(findstudents(Object.entries(students)));

// 2-misol

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "active" },
// ];
//   function findBigElement(students){
// let highest = students[0].score
// for(let i =1; i<students.length; i++){
//     if (students[i].score>highest){
//         highest = students[i].score
//     }
// }
// return highest
//   }
//   console.log(findBigElement(students));

// 3-misol

// function filtermap(students){
//  return students.filter(students => students.name.startsWith('A'));
// }
// console.log(filtermap(students));

// 4-misol
// function ortachasinitopish(students){

//     let sum =0;
//     let count =0;
//     for(let i =0; i<students.length; i++){
//         sum+=students[i].score;
//         count++
//     }
//     return sum/count
// }
// console.log(ortachasinitopish(students));

// 5-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];

// function findstudentJohn(students,ism) {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].name === ism) {
//             return students[i];
//     }
//   }

// }
// console.log(findstudentJohn(students,"John"));

// 6-misol

// const students = [
//   { name: "Alice", age: 20, score: 80, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Charlie", age: 23, score: 85, status: "active" },
// ];

// function findindex(students) {
//   let res;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].score > 85) {
//       return i;
//     }
//   }
// }
// console.log(findindex(students));

// 7-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//   function filterStudentsactive(students){

//     return students.filter(students=> students.status=='active')
//  }

//   console.log(filterStudentsactive(students));

// 8-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];

//   function everyStudents(students){
//     return students.every(students => students.age>18)
//   }
//   console.log(everyStudents(students));

// 9-misol

// function someFunction(students){
// return students.some(students=> students.score>90)
// }
// console.log(someFunction(students));
// / const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];

// 10-misol

// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];

//   function concatArr(students1,students2){
//     return students1.concat(students2)
//   }
//   console.log(concatArr(students1,students2));

// 11-misol

// ustoz unikal  nma ekanligiga tuwunmadim   !!!!!!!!!!

// 12-misol

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function toUpperCaseArrname(students) {
//     for(let i=0; i<students.length; i++){
//         students[i].name = students[i].name.toUpperCase()
//     }
//     return students
// }

// console.log(toUpperCaseArrname(students))

// 13-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ]

// 1-usuli

// function findstudents(students){
//         return students.map(students=>students.score)
//     }
//     console.log(findstudents(students));

// 2-usuliii

// function scoresstudents(students){
//     let res=[]
//     for(let i=0; i<students.length; i++){
//      res.push(students[i].score)
//     }
//     return res
// }
// console.log(scoresstudents(students));

// 14-misol
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];

//   function findstudents(students){
//             return Object.keys(students[0])
//         }
//         console.log(findstudents(students));

// 15-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

// function Students(students){
//   const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };
//   return students.concat(newStudent)
// }
// console.log(Students(students));

// 16-misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ]
// function popStudentsname(students , ism){
//     return students.filter(student => student.name !== ism);}
// console.log(popStudentsname(students, 'Charlie'));

// 17-misol
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];

//   function filterarr(students){
//     return students.every(students => students.age>20 && students.age<20)
//   }

// console.log(filterarr(students));

// 18-misol
// const students = [
//         { name: 'Alice', age: 20, score: 85, status: 'active' },
//         { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//         { name: 'Charlie', age: 19, score: 88, status: 'active' }
//       ];

//       function statusStudents(students){
//         let res=[]
//         students.forEach(student => {
//             res.push(student.status);
//           });
//         return res
//       }
//       console.log(statusStudents(students));

// 19-misol
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

//   function Students(students){
//     const update = { name: 'Alice', age: 21, score: 90, status: 'active' };

//     return update
//   }
//   console.log(Students(students));

// 20-misol
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// function kiciginitopish(students){
// let min =students[0]
// students.forEach(function(value){
//     if(students.age<min.age){
//         min = students
//     }
// })
// return min
// }
// console.log(kiciginitopish(students));

//    STRING METODLARIGA OID MISOLLAR
// 1-misol

// 2-misol

//  3-misol
// const str="Hello world from JavaScript"
// function towordstr(str){
// return str.split(' ')
// }
// console.log(towordstr(str));

// 4-misol

// const str="Hello world from JavaScript"
// function splitstr(str){
// let res= str.split(' ')
// return res.join(', ')

// }console.log(splitstr(str));

// 5-misol

// const str ='Javascript'
// function replacestr(str){
//     return str.replaceAll('a', '@')
// }
// console.log(replacestr(str));

// 6-misol

// const str="   Hello, world!   "
// function trimStr(str){
//     return str.trim()
// }console.log(trimStr(str));
// 7-misol
// const str='Javascript'
// function charatstr(str,index){
//     return str.charAt(index)
// }console.log(charatstr(str,7));

// 8-misol
