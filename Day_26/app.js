// async function greet (){
//     // throw "some random error"
//     return "Hello, World!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolve ");
//     console.log("result was : ",result);
// })
// .catch((err) =>{
//     console.log("promise was rejected with err : ",err)
// });

// let demo = async() =>{
//     return 5;
// }

function getNum() {
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
         let num = Math.floor(Math.random()*10)+1
        console.log( num);
        resolve();
       },1000);
    });
}

async function demo() {
 try{
   await getNum();
   await getNum();
   getNum();
 } catch(err){
   console.log("Error occurred: ", err);
 }

   let a= 5;
   console.log(a);
   console.log("New number = ",a+3);
    
}