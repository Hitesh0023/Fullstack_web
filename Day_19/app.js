// function hello(){
//     console.log("Hello!")
// }
// hello();
// function printname(){
//     console.log("Hitesh Chaudahri");
// }
// printname();
// function print1to5(){
//     for(let i = 1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 18
//     // let age = prompt("Enter the age : ")
//     if(age >=18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not adult");
//     }
// }
// isAdult();


// function printPoem(){
//     console.log("Twinkle twinkle little star");
//     console.log("How are wonder what you are ")

// }
// printPoem();

// function rollDice(){
//     let value = Math.floor(Math.random()*6)+1;
//     console.log(value);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// function printInfo(name,age){
//     console.log(`${name} 's age is ${age}.`);
// }
// printInfo("Hitesh",20)
// printInfo("Mahesh",18)
// printInfo("Durgesh")

// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,6);
// sum(7,6);
// sum(5,0);


// function average(a,b,c){
//     console.log((a+b+c)/3)
// }
// average(3,6,9);
// average(4,5,6);
// average(7,23,22);

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//        console.log(i)
     
//     }
// }
// printTable(2);


// function sum(a,b){
//     console.log("hello!")
//     console.log("hello!")
//     return a+b;
//     console.log("hello!2")
//     console.log("hello!2")
// }


// console.log(sum(4,6));

// function isAdult(age){
    
//   if(age >=18){
//     return "Adult";
//   }else{
//     return "No adult"
//  }
//  console.log("bye-bye");
//   }


// function sum(n){
//     let sum = 0;
//     for(let i = 0; i<=n; i++ ){
        
//         sum+=i;
       
//     }
//      return sum
// }
// console.log(sum(10));

// let str = ["Hi","hello","bye","!"];
// function concat(str){
//     let result = "";
//     for(let i = 0; i<str.length; i++){
//         result +=  str[i];

//     }
//     return result;
// }

// let sum = 54;

// function calSum(a,b){
//     let sum = a+b;
    
// }
// calSum(1,4);
// console.log(sum);

// {
//     var a = 25;
// }
// console.log(a);

// let age = 25;
// if(age >=18){
   
//     let str = "Adult";
//     console.log(str);
// }


// function outerfunction(){
//     let x = 5;
//     let y = 10;
//     function innerfunction(){
//         console.log(x)
//         console.log(y)
        
//     }
   
//     innerfunction();
    
// }
// outerfunction();


// let greet = "Hello";

// function changegreet(){
//     let greet = "Namaste!"
//     console.log(greet);
//     function innergreet(){
//         console.log(greet);
//     }
//     innergreet();
// }
// console.log(greet);
// changegreet();


// let name = "hitesh";
// let x = 5;
// let sum = function(a,b){
//     return a+b;


// }
// let hello = function(){
//     console.log("Hello");
// }
// hello = function(){
//     console.log("Namaste");
// }


// function multipleGreet(func,count){
//     for(let i =1; i<=count; i++){
//         func();
//     }

// }
// let greet = function(){
//     console.log("Hello");
// }
// multipleGreet(greet,100); 



// function oddEvenfactory(request){
//     if(request == "Odd"){
//         let odd = function(n){
//             console.log(!(n%2 ==0));
            
//         }
//         return odd;
//     }
//         else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 ==0);
//     }
//     return even;
// }else {
//     console.log("wrong request");
//     }

// }
// let request = "odd";


// const calculator = {
//     num : 55,
//     add : function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;

//     },
//     mul: function (a,b){
//         returnA*b;
//     }
// };
