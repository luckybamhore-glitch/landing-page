// // 1. Write a function that takes in a string and a character, and returns the number of occurrences of
// // that character in the string.

// // function countOccurance(str , char){
// //     let count = 0;
// //     for(let i= 0; i<str.length; i++){
// //         if(str[i]===char){
// //             count++;
// //         }
// //     }

// //     return count;

// // }

// // console.log(countOccurance("devdas","d"))


// // 2. Write a function that takes in an array of numbers and returns 
// // the largest number in the array.

// // function largestNum (arr){
// //     let maxNum = 0;
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]>maxNum){
// //             maxNum=arr[i]
// //         }
// //     }
// //     return maxNum

// // }

// // console.log(largestNum([11,12,20,16,25]))


// // 3. Write a function that takes in a string and returns the string with
// //  the first letter of each word
// // capitalized.

// // function capitalLetter(str){
// // for (let i = 0; i<)


// // }

// // console.log(capitalLetter("here is your developer"))

// //max value in arr [2,3,7,9,5]

// // let arr = [2,3,7,9,5]
// // let max = arr[0]

// // for(i=1; i<arr.length; i++){
// //     if(arr[i]>max){
// //         max=arr[i]
// //     }
// // }

// // console.log(max)

// //same find min

// // let arr = [2,3,7,9,5]
// // let min = arr[0]

// // for (i=1; i<arr.length; i++){
// //     if(arr[i]<min){
// //         min= arr[i]
// //     }
// // }

// // console.log(min)

// // let arr = [10,20,30,40]
// //  let max = arr[0];
// //  for(i=1; i<arr.length;i++ ){
// //     if(arr[i]>max){

// //         max= arr[i]

// //     }

// //  }

// //  console.log(max)

// // input : 45678
// // output : 5 count num

// // let num = 45678
// // let count= 0;

// // while(num>0){
// //     num = Math.floor(num/10);
// //     count++
// // }
// // console.log(count)

// //reverse a number

// // let num = 1234;
// // let reverse = 0;
// // while(num>0){
// //     let lastdigit = num%10;
// //     reverse = reverse*10 + lastdigit;
// //     num = Math.floor(num/10);
// // }
// // console.log(reverse)

// //palindrome

// // let num = 1201
// // let originalNum = num;
// // let reverse = 0
// // while(num>0){
// //     let lastdigit = num%10
// //     reverse = reverse*10 + lastdigit
// //     num = Math.floor(num/10)
// // }
// // if(reverse === originalNum){
// //     console.log("Palindrome");
// // }
// // else{
// //     console.log("Not Palindrome");
// // }

// // console.log(reverse)

// //find GCD/HCF
// // let a = 12;
// // let b = 18;

// // while(b !== 0){
// //  let remainder = a%b;
// //    a=b;
// //    b= remainder
// // }

// // console.log("GCD IS:" , a)



// //LCM

// // let a = 12;
// // let b = 18;

// // let x = a;
// // let y = b;

// // while(b!==0){
// //     let remainder = a%b;
// //     a=b;
// //     b= remainder;

// // }

// // let gcd = a;
// // let lcm = (x*y)/gcd;
// // console.log(lcm)

// // function isUnique(str){
// // 	for(let i= 0; i< str.length; i++){
// // 		for( let j= i + 1; j< str.length; j++){
// // 			if([i]===[j]){
// // 				return false;
// // 			}
// // 		}
// // 	}
// // 	return true;
// // }
// // console.log(isUnique("ayusah"))


// const users = [
//   {
//     name: "Aarav Sharma",
//     age: 24,
//     gender: "Male",
//     skills: ["JavaScript", "React", "Node.js"],
//     salary: 65000,
// 	isActive: true,
//   },
//   {
//     name: "Priya Verma",
//     age: 27,
//     gender: "Female",
//     skills: ["Python", "Django", "SQL"],
//     salary: 80000,
// 	isActive: true,
//   },
//   {
//     name: "Rohan Singh",
//     age: 30,
//     gender: "Male",
//     skills: ["Java", "Spring Boot", "MongoDB"],
//     salary: 95000,
// 	isActive: true,
//   },
//   {
//     name: "Ananya Patel",
//     age: 22,
//     gender: "Female",
//     skills: ["HTML", "CSS", "Tailwind CSS"],
//     salary: 50000,
// 	isActive: false,
//   },
//   {
//     name: "Vikram Mehta",
//     age: 35,
//     gender: "Male",
//     skills: ["AWS", "Docker", "Kubernetes"],
//     salary: 140000,
// 	isActive: false,
//   },
//   {
//     name: "Sneha Kapoor",
//     age: 28,
//     gender: "Female",
//     skills: ["React", "TypeScript", "Next.js"],
//     salary: 110000,
// 	isActive: true,
//   },
//   {
//     name: "Karan Gupta",
//     age: 26,
//     gender: "Male",
//     skills: ["C++", "Data Structures", "Algorithms"],
//     salary: 70000,
// 	isActive: false,
//   },
//   {
//     name: "Neha Joshi",
//     age: 31,
//     gender: "Female",
//     skills: ["Angular", "Node.js", "MySQL"],
//     salary: 100000,
// 	isActive: true,
//   },
//   {
//     name: "Aditya Rao",
//     age: 29,
//     gender: "Male",
//     skills: ["Go", "Redis", "PostgreSQL","Java","c"],
//     salary: 120000,
// 	isActive: true,
//   },
//   {
//     name: "Meera Nair",
//     age: 25,
//     gender: "Female",
//     skills: ["UI/UX", "Figma", "Adobe XD", "Java"],
//     salary: 75000,
// 	isActive: true,
//   },
// ];

// // 1. Write a function that takes in a string and a character, 
// // and returns the number of occurrences of 
// // that character in the string.

// function countChar(str,char){
// 	let count = 0
// 	for(let i = 0; i<str.length; i++){
// 		if(str[i] === char){
// 			count++
// 		}
// 	}
// 	return count
// }

// console.log(countChar("amanchaman" , "a"))

// function countChar (str, char){
// 	return str.split(char).length - 1
// }
// console.log(countChar("amanchaman" , "a"))

// 2. Write a function that takes in an array of numbers and 
// returns the largest number in the array

// function largest(arr){
// 	let max = arr[0]
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i]>max){
// 			max = arr[i]
// 		}
// 	}
// 	return max

// }

// console.log(largest([10,20,30,40]))

// function largest(arr){
// 	return Math.max(...arr)
// }
// console.log(largest([10,20,30,40]))

// 3. Write a function that takes in a string and 
// returns the string with the first letter of each word 
// capitalized.

// function capitalizedWords(str){
// 	let result = ""
// 	for(let i=0; i<str.length; i++){
// 		if (i===0 || str[i - 1] === " "){
// 			result += str[i].toUpperCase()
// 		}else{
// 			result += str[i]
// 		}
// 	}return result
// }
// console.log(capitalizedWords("hello world this is javascript"))

// function capitalizedWords(str){
// 	return str
// 	.split(" ")
// 	.map(word => word[0].toUpperCase() + word.slice(1))
// 	.join(" ")
// }
// console.log(capitalizedWords("hello world this is javascript"))

// // function skills(users){
// //     return users.forEach((user)=>{
// //         console.log(`${user.name}:${user.skills.length}`)
// //       }  )
    
// // }
// // skills(users)

// // 18. Create an array of objects with only name and uppercase skills.

// // function nameSkils(users){
// // 	return users.map((user)=>({
// // 		name:user.name,
// // 		skills:user.skills.map((skill)=>skill.toUpperCase()
		
// // 			)

// // 	}))
// // }

// // console.log(nameSkils(users))

// // 19. Find all users who are active and earn more than 50,000.

// // let activeSalary = users.filter((user)=>{
// // 	return user.isActive && user.salary>50000
// // })

// // console.table(activeSalary)

// // function activeEarn(users){
// //    users.filter(user=>{
// // 	user.isActive && user.salary>50000
// //   })
// //   return(users)
// // }

// // console.log(activeEarn(users))

// // 20. Create a sorted array of users by age in descending order

// // let sortedAge = users.sort((a,b)=>{
// //  return b.age-a.age
// // })
// // console.table(sortedAge);

// // 21. Find the total salary of all active users.
// // let userActive = users.filter((user)=>{
// // 	return user.isActive
// // })
// // .reduce((acc, user)=>{
// // 	return acc +user.salary
// // },45000)
// // console.table(userActive)

// // 22. Find the user(s) who has the maximum number of skills.


// // let maximumSkills = users.sort((a,b)=>{
// // 	if(a.skills.length < b.skills.length){
// // 		return 1;
// // 	}else{
// // 		return -1;
// // 	}
// // })
// // console.table(maximumSkills)
// // console.log(maximumSkills[0])

// // 23. Group users by gender and return the result as
// 
//  { Male: [...], Female: [...] }.

// // let groups = users.reduce((acc, user)=>{
// // 	if(!acc[user.gender]){
// // 		acc[user.gender] = []
// // 	}
// // 	acc[user.gender].push(user)
// // 	return acc;
	
// // },{})

// // console.log(groups)

// // const grouped = {
// // 	Male:[],
// // 	Female:[],
// // }

// //  users.forEach((user)=>{
// // 	grouped[user.gender].push(user)
// // })

// // console.log(grouped)

// //  Find the average salary of inactive users

// // let averageSalary = users.filter((user)=>{
// //     return (!user.isActive)
// // }).reduce((acc,user)=>{
// //          return acc+user.salary
// // 	},0)
// // console.log(averageSalary)


// // 25. Get a sorted array of all unique skills 
// // (no duplicates) across users.

// // let skill = [...new Set(users.flatMap((user)=>{
// // 	return user.skills
// // }))].sort()
// // console.log(skill)

// // 26. Count how many users know "Python".

// // let python = users.filter((user)=>{
// // 	return user.skills.includes("Python")
// // }).length

// // console.log(python)

// // . Create a leaderboard sorted by salary (highest first),
// //  returning only name and salary.

// // let salary = users.sort((a, b)=>{
// // 	return b.salary - a.salary

// // }).map((user)=>({ 
// // 	name: user.name,
// // 	salary: user.salary,
// // }))
// // console.log(salary)

// // 28. Find the youngest active female user.

// // let youngest = users.filter((user)=>{
// // 	 return user.isActive && user.gender === "Female"
// // }).sort((a,b)=> a.age - b.age)[0]

// // console.log(youngest)

// // 29. Create an object showing the total number of active and 
// // inactive users.

// // const result = {
// // 	active : 0,
// // 	inactive : 0,
// // }

// // users.forEach((user)=>{
// // 	if(user.isActive){
// // 		result.active++
// // 	}else{
// // 		result.inactive++
// // 	}
// // })
// // console.log(result)

// // 30. For each user, create a string like
// //  "Aarav Sharma (24) knows JS, React".

// // const result = users.map(user=>{
// // 	return `${user.name} (${user.age}) knows ${user.skills.join(",")}`
// // })
// // console.log(result)






// // 31. Find the top 3 highest earning users.

// // let top3highest = [...users] 
// //    .sort((a,b)=>{
// // 	a.salary - b.salary
	
// //    }).slice(0,3)

// //    console.log(top3highest)


// // 32. Find the sum of salaries of users whose skills contain "React".

// // let sum = users.filter((user)=>{
// // 	return user.skills.includes("React")

// // }).reduce((acc,user)=>{
// // 	return acc+user.salary
// // },0)
// // console.log(sum)

// // 33. Sort users by the number of skills they know (descending).

// // let skill = users.filter((user)=>{
// // 	return user.skills
// // }).sort((a,b)=>{
// // return	b.skills.length - a.skills.length
// // })
// // console.table(skill)

// // 34. Return an array of user names where 
// // the name length is greater than 10 characters.

// // let username = users.filter((user)=>{
// // 	return user.name.length > 11
// // }).map((user)=>{
// //  return user.name
// // })
// // console.log(username)

// // 35. Create a list of all skills sorted alphabetically, 
// // counting how many times each appears (e.g., { JS: 
// // 2, React: 2, Python: 2, ... }).

// // let skill = users.flatMap((user)=>{
// // 	return user.skills
// // }).sort()
// // .reduce((acc,skill)=>{
// // 	acc[skill] = (acc[skill] || 0) +1
// // 	return acc
// // },{})
// // console.log(skill)


// // 36. Find the difference between the highest and lowest salaries.

// // const sortedUser = [...users].sort((a,b)=>{
// // 	return a.salary - b.salary;	
// // })
// // console.log(sortedUser)
// // const difference = sortedUser[sortedUser.length - 1].salary -sortedUser[0].salary
// // console.log(difference)


// console.log(


// 	Array.prototype
// )
// console.log(Object.getOwnPropertyNames(Array.prototype))
//  let num = [10,20,30]

// Array.prototype.lucky = function(){
// 	return this.reduce((sum , num)=> sum+num ,0)
// }

// console.log(num.lucky())

// 37. Show different ways to create objects in 
// JavaScript ({}, new Object(), factory function).


// const obj = new Object()
// obj.name = "Lucky"
// console.log(obj)

// const obj = {
//     name: "Lucky",
//     greet: function(){
//         console.log(this.name)
//     }
// }
// console.log(obj.name)

// Constructor function

// const userData = function(name,gender,address,age){
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.age = age;
// }

// const obj = new userData("lucky","male","indore","24")
// console.log(obj)

// const BankAccount = function(name,balance,accountNum){
//     this.name = name;
//     this.balance= balance;
//     this.accountNum= accountNum;

//     // this.deposit = function(amount){
//     //    return this.balance = this.balance + amount
//     // }
//     // this.withdrawl = function(amount){
//     //     this.balance-=amount

//     // }
// }

// const account = new BankAccount("lucky",10000,"SBIN001")

// BankAccount.prototype.deposit = function(amount){
//     this.balance+=amount
// }
// BankAccount.prototype.withdrawl = function(amount){
//     this.balance-=amount
// }

// BankAccount.prototype.showDetails = function(){
//     // console.log(`${this.name} :- ${this.balance}`)
// }
// account.deposit(2000)
// account.withdrawl(5000)
// account.showDetails()
// // console.log(this)

// console.log(account)


vklhgdfhgkjdfhgiofhiogjiof
