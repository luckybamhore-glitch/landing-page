// //1 count occurance

// function countChar(str, char){
// 	let count = 0;
// 	for(let i=0; i<str.length; i++){
// 		if(str[i]===char){
// 			count++
// 		}
// 	}
// 	return count
// }
// console.log(countChar("luckylucky" , "l"))

// //largest no in array

// function largestNum(arr){
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }return max;
        
// }
// console.log(largestNum([10,20,30,50]))

// //capitalise first letter of string

// function capitalise(str){
//     let result = "";
//     let capitaliseNext = true;
    
//     for(let i=0; i<str.length; i++){
//         if(str[i]===" "){
//             capitaliseNext = true;
//             result+=str[i]
//         }else if (capitaliseNext){
//             result+=str[i].toUpperCase()
//             capitaliseNext=false;
//         }else {
//             result+=(str[i])
//         }
//     }return result
// }
// console.log(capitalise("hello good morning everyone"))

// // reverse a string

// function reverseString(str){
//     let reverse = " ";
//     for(let i=str.length-1; i>=0; i--){
//         reverse+= str[i]
//     }return reverse
// }
// console.log(reverseString("lucky"))

// // check palindrome

// function palindrome(str){
//     let reverse = "";
//     for(let i=str.length-1; i>=0; i--){
//       reverse+=str[i]    
//     }
//     if(reverse === str){
//         return true;
//     }else{
//         return false
//     }
    
// }
// console.log(palindrome("lucky"))

// // count vowel in a string

// function countVowel(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU"

//     for(let i=0; i<str.length; i++){
//         for(let j=0; j<str.length; j++){
//             if(str[i]===vowels[j]){
//                 count++
//             }
//         }
//     }return count
// }
// console.log(countVowel("luckyyou"))

// //remove duplicate from two array

// function removeDuplicateArray(arr){
//    let result = []
//    for(let i=0; i<arr.length; i++){
//     let found = false;
//     for(let j=0; j<result.length; j++){
//         if(arr[i]===result[j]){
//             found = true;
//             break;
//         }
//     }
//         if (found === false) {
//             result.push(arr[i]);
//         }
//    } return result

// }
// console.log(removeDuplicateArray([10,10,20,30,40,80]))

//fizzbuzz

// function fizzBuzz(n){
//     let result = [];
//     for(let i=0; i<=n; i++){
//         if(i%15 === 0){
//             result.push("fizzbuzz")
//         }else if(i%3 === 0){
//             result.push("fizz")
//         }else if(i%5 === 0){
//             result.push("buzz")
//         }else{
//             result.push
//         }   
//     }return result
// }
// console.log(fizzBuzz(15))

//Intersection of two array

// function intersection(arr1, arr2){
//     let result = [];
   

//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i]==arr2[j]){
//                 result.push(arr1[i])
//             }
          
//         }
//     }return {result}
// }

//  console.log(intersection([10,20,30,40],[10,20,30,50]))

// uncommon element of two array

// function intersection(arr1, arr2){
//     let result = [];
//     let uncommon = [];
//     for(let i=0; i<arr1.length; i++)
//     {
        
//  if(!arr2.includes(arr1[i])){

//                 uncommon.push(arr1[i])

//             }
//     }
    
//     for(let i=0; i<arr2.length; i++)
//     {
        
//  if(!arr1.includes(arr2[i])){

//                 uncommon.push(arr2[i])

//             }
//     }
    
   
//     return uncommon
// }

// console.log(intersection([10,20,30,40],[10,20,30,50]))

// function uncommon(arr1,arr2){
//     let result = [];
//     for(let i=0; i<arr1.length; i++){
//         let found = false;
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i]===arr2[j]){
//                 found = true;
//                 break;
//             }
//         }
//         if(found===false){
//         result.push(arr1[i])
//     }

//     }

//     for(let i=0; i<arr2.length; i++){
//         let found = false;
//         for(let j=0; j<arr1.length; j++){
//             if(arr2[i]===arr1[j]){
//                 found = true;
//                 break;
//             }
//         }
//         if(found===false){
//             result.push(arr2[i])
//         }
//     }
// return result
// }
// console.log(uncommon([10, 20, 30, 40], [10, 20, 30, 50]))

//facebook like problem

// function likes(names){
//     switch(names.length){
//         case 0 :
//         return "no one likes this"

//         case 1:
//         return `${names[0]}  likes this`;

//         case 2 :
//         return `${names[0]} and ${names[1]} like this`

//         case 3 :
//         return `${names[0]} and ${names[1]} and ${names[2]}like this`

//         default:
//             return `${names[0]} and ${names[1]} and ${names.length - 2} other like this`
  
//     }
// }
// console.log(likes(["lucky","ayush","asim","pramod"]))

//find the missing no in array

// function missingNum(arr,n){
//     let expectedSum = (n*(n+1))/2;
//     let actualSum = 0;
//     for(let i=0; i<arr.length; i++){
//         actualSum += arr[i];
//     }
//     return expectedSum-actualSum
// }
// console.log(missingNum([1,2,3,5,6,7],7))

//find missing letter

// function missingLetter(arr){
//     for(let i=0; i<arr.length - 1; i++){
//         let current = arr[i].charCodeAt(0);
//         let next = arr[i+1].charCodeAt(0);

//         if(next-current==2){
//             return String.fromCharCode(current+1)
//         }
//     }
// }
// console.log(missingLetter(["a","b","c","e","f"]))

// check all characters are unique

// function unique(str){
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<str.length; j++){
//             if(str[i]===str[j]){
//                 return false
//             }
//         }
//     } return true
// }

// console.log(unique("luckyy"))

//Dice Game Stimulation

// function diceGame(numSimulation){
//       let results=[];
//       for(let i=0; i<numSimulation; i++){
//         let dice1 = Math.floor(Math.random()* 6 + 1)
//         let dice2 = Math.floor(Math.random()* 6 + 1)
//         let sum = dice1 + dice2;
//         results.push({
//             dice1,
//             dice2,
//             sum,
//             results: sum >= 7 ? "win" :"lose"
//                 })
//       }
//       return results;
// }
// console.log(diceGame(2))

//format phone number



const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    gender: "Male",
    skills: ["JavaScript", "React", "Node.js"],
    salary: 65000,
	isActive: true,
  },
  {
    name: "Priya Verma",
    age: 27,
    gender: "Female",
    skills: ["Python", "Django", "SQL"],
    salary: 80000,
	isActive: true,
  },
  {
    name: "Rohan Singh",
    age: 30,
    gender: "Male",
    skills: ["Java", "Spring Boot", "MongoDB"],
    salary: 95000,
	isActive: true,
  },
  {
    name: "Ananya Patel",
    age: 22,
    gender: "Female",
    skills: ["HTML", "CSS", "Tailwind CSS"],
    salary: 50000,
	isActive: false,
  },
  {
    name: "Vikram Mehta",
    age: 35,
    gender: "Male",
    skills: ["AWS", "Docker", "Kubernetes"],
    salary: 140000,
	isActive: false,
  },
  {
    name: "Sneha Kapoor",
    age: 28,
    gender: "Female",
    skills: ["React", "TypeScript", "Next.js"],
    salary: 110000,
	isActive: true,
  },
  {
    name: "Karan Gupta",
    age: 26,
    gender: "Male",
    skills: ["C++", "Data Structures", "Algorithms"],
    salary: 70000,
	isActive: false,
  },
  {
    name: "Neha Joshi",
    age: 31,
    gender: "Female",
    skills: ["Angular", "Node.js", "MySQL"],
    salary: 100000,
	isActive: true,
  },
  {
    name: "Aditya Rao",
    age: 29,
    gender: "Male",
    skills: ["Go", "Redis", "PostgreSQL","Java","c"],
    salary: 120000,
	isActive: true,
  },
  {
    name: "Meera Nair",
    age: 25,
    gender: "Female",
    skills: ["UI/UX", "Figma", "Adobe XD", "Java"],
    salary: 75000,
	isActive: true,
  },
];


//sort users by age (des)

let ageInDes = users.sor


