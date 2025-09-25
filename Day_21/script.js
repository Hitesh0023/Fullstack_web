// let arr = [1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el)
// });

// arr.forEach((el) => {
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print);

// let student = [
//     {
//         name:"Hitesh",
//         marks: 98,

//     },
//     {
//         name:"Mahesh",
//         marks: 95,

//     },
//     {
//         name:"Durgesh",
//         marks: 92,

//     },
// ];


// let gpa = student.map((el) => {
//     return el.marks /10;
// });

// arr.forEach((student) =>{
//     console.log(student);
// });

// let num = [1,2,3,4];
// let double = num.map((el) => {
//     // return el *el;

// });

// let check = [2,4,6,8,].every((el) => el%2 == 0);
// console.log(check)

// let nums = [1,2,3,4];
// let finalval = nums.reduce((res,el) => {
// console.log(res);
// return res +el;
// });

// let arr = [2,5,7,8,12,1,5,9];
// let max = -1;
// for(let i = 0; i < arr.lenght; i++) {
//     if (max < arr[i]){
//       max = arr[i];
//     }
// }
// console.log(max);


// let max = arr.reduce((max,el) => {
//     if(max < el){
//        return el;  
//     }else {
//         return max;
//     }
// });
// console.log(max)


// let num = [10, 20 , 30, 40];
// let ans = num.every((el) => el%10 == 0);
// console.log(ans)

// let min = arr.reduce((min,el) => {
//     if(min > el){
//         return el;
//     }else{
//         return min;
//     }
// });
// console.log(min);

// function sum (a = 2, b){
//     return a+b;
    
// }
// sum(1,3);
// sum(1);
// console.log(sum);


// console.log(...arr);
// let name = "HiteshChaudahri";
// console.log(...name);     


// let chars = [..."Hitehs"]


// let odd = [1,3,5,7,9,11,33];
// let even = [2,4,6,8,10];

// let nums = [...even, ...odd];


// const data = {
//     email: "hiteshc9011@gmial.com",
//     password : "Hitesh123",
// };
// const datacopy =  {...data}


// let arr = [2,5,7,8,12,1,5,9];
// let obj1 = {...arr};
// let obj2 = {..."Hello"}


// function sum(...args){
//     for (let i =0; i<args.length; i++){
//         console.log("you gave us :",args[i]);

//     }
// }

// function min(){
//     console.log(arguments)
// }

// function total(...args){
//     return args.reduce((sum ,el) => sum+el);

// }


// let namees = ["Htesh","mahesh","Durgesh","sagar"];
// let [winner, runnrup,...others] = namees;


// const student = {
//     name:"Hitesh",
//     username: "Hites123",
//     age : 20,
//     class : "Te",
//     subjects : ["English","DSA","OOPS","Math"],
//     password: "Hitec"
// };


// let {username,password: age ,place="Mumbai"} = student;