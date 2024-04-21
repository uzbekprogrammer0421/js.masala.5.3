// 1-task 


// function middleNum(params) {
    
//     let arr = [...params]
//     let middleNumber = 0
//     let number1 =  0
//     let number2 =  0
//     if (arr.length % 2 == 1) {
//             middleNumber = (arr.length / 2 ) - 0.5
//             return(arr[middleNumber]);
//         }
//         else{
//             number1 = (arr.length / 2 )
//             number2 = (arr.length / 2 ) - 1
//             middleNumber = (arr[number1] + arr[number2]) / 2
//             return middleNumber
//     } 
// }

// console.log(middleNum([1,2,3,4]));


// 2-task 


// function book(params) {
//     let arr = [...params]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].read === true) {
//             console.log(arr[i].author + " ning " + arr[i].title +" kitobi o'qilgan ");
//         }
//         else {
//             console.log(arr[i].author + " ning " + arr[i].title +" kitobi o'qilmagan ");

//         }
//     }
// }
// book([
//     {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//     },
//     {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
//     },
//     {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
//     },
//     ]
//     )

// 3-task 

// function textLength(params) {
    
//     let array = [...params]
//     let massiv = {}
//     for (let i = 0; i < array.length; i++) {
//         let length_num = array[i].length  
//         massiv[array[i]] = length_num
//     }
//     return massiv
// }
// console.log(textLength(["text", "world", "laptop"]));


// 4-task immutable


// function inc(params) {
//     const obj = {a: 2, b: 3, c: 4};
//     let new_obj = {};
//     let i = 0;
//     for (const key in obj) {
//         new_obj[key] = obj[key] * params;
//     }
//     return new_obj;
// }
// console.log(inc(3));


// 4-task muutable 


// function inc(params) {
//     const obj = {a: 2, b: 3, c: 4};
//     for (const key in obj) {
//         obj[key] = obj[key] * params
//     }
//     return obj;
// }
// console.log(inc(6));


// 5-task 


// function degree(params) {
//     let num = 1
//     let arr = []
//     for (let i = params; i >= 1; i--) {
//         num = num * 2 
//         arr.push(num) 
//     }
//     console.log(arr);
// }
// degree(5)


// 6-task 


// let new_obj = {}
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let arr = animals.sort();
// for (let i = 0; i < arr.length; i++) {
//     let count = 1
//     while (arr[i] === arr[i + 1]) {
//         count++
//         i++
//     }
//     new_obj[arr[i]] = count
// }
// console.log(new_obj)


// 7-task 1-usul forEach bilan


// function kvadrat(params) {
//     let arr = [...params]
//     let kvadrat_arr = []
//     arr.forEach(element => {
//         kvadrat_arr.push(element * 2)
//     });
//     return kvadrat_arr
// }
// console.log(kvadrat([1, 2, 3, 4, 5]));


// 7-task 2-usul


// function kvadrat(params) {
//     let arr = [...params]
//     let kvadrat_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         kvadrat_arr.push(arr[i] * arr[i])
//     }
//     return kvadrat_arr
// }
// console.log(kvadrat([1, 2, 3, 4, 5]));


// 8-task 


// let arr = [1, -4, 12, 0, -3, 29, -150];
// let new_arr = arr.filter(num => num > 0).reduce((total, num) => total + num, 0);
// console.log(new_arr);


// 9-task 1-usul sort bilan


// let array = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
// let arr = []
// for (let i = 0; i < array.length; i++) {
//     arr.push(array[i].age) 
// }
// arr.sort()
// console.log(arr[arr.length-1] - arr[0]);


// 9-task 2-usul sortsiz


// let array = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
// let arr = []
// for (let i = 0; i < array.length; i++) {
//     arr.push(array[i].age) 
// }
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(max - min);


// 9-task 3-usul 


// let array = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
//   array.sort((a, b) => a.age - b.age);
//   let max_age = array[array.length - 1];
//   let min_age = array[0];
//   let result = max_age.age - min_age.age
//   console.log(result);


// 11-task 1-usul trueni ham oladi sharti 


// var singleNumber = function(nums) {
//     let arr = [...nums]
//     let lastIndex = 0
//     let index = 0
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         lastIndex = arr.indexOf(arr[i])
//         index = arr.lastIndexOf(arr[i])
//         if (lastIndex === index) {
//             result.push(arr[i])
//         }
//         else {
//         }
//     }
//     console.log(result);
// };
// singleNumber( [4,1,2,1,2,9, true] )


// 11-task 2-usul faqat numberni qabul qiladi


// var singleNumber = function(nums) {
//     let arr = [...nums]
//     let lastIndex = 0
//     let index = 0
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         lastIndex = arr.indexOf(arr[i])
//         index = arr.lastIndexOf(arr[i])
//         if (lastIndex === index) {
//             if(typeof(arr[i]) === 'number'){
//                 result.push(arr[i])

//             }
//         }
//         else {
//         }
//     }
//     console.log(result);
// };
// singleNumber( [4,1,2,1,2,9, true] )


// 11-task 3-usul trueni ham oladi sharti 


// const search = function(nums) {
//     let massiv = [...nums]
//     let new_arr = []
//     let total = []
//     let index = 0
//     for (let i = 0; i < massiv.length; i++) {
//         if(!new_arr.includes(massiv[i])){
//             new_arr.push(massiv[i])
//         }
//         else {
//             total.push(massiv[i])
//         }
//     }
//     for (let g = 0; g < total.length; g++) {
//         index = new_arr.indexOf(total[g])
//         new_arr.splice(index,1)
//     }
//     console.log(new_arr);
// };
// search([4,1,2,1,2,9,true])