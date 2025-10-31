// function hello(){
//     console.log("Inside hello fix");
//     console.log("Hello Hitesh!")

// }

// function demo(){
// console.log("calling hello function")
// hello();
// };

// console.log("Calling Demo function")
// demo();
// console.log("done, By!");

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans)
// }
// three();

// let a = 10;
// console.log(a);
// let b = 20;
// console.log(b);
// console.log(a+b);

// setTimeout(() =>{
//     console.log("Hitesh Chaudahri");

// },2000);
// setTimeout(() =>{
//     console.log("Hello Chaudahri");

// },2000);

// console.log("Hello..!");

h1 = document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(() =>{
        h1.style.color = color;
        nextColorChange();
    },delay);

}

changeColor("red",1000,() =>{
    changeColor("orange",1000,() =>{
        changeColor("green",1000,() =>{
            changeColor("yellow",1000)
        });

    });

});

// changeColor("red",1000);
// changeColor("green",2000);dd
//     console.log(" failure : weak connection , data not saved ");
// let request = saveTODBPromise ("Hitesh cahudahri");
// request
// .then(() => {
//     console.log("Promises resolved");
// });
// .catch(() =>{
//     console.log("Promises rejected")
// });