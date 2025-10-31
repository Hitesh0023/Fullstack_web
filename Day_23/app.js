// let btn = document.querySelector("button")
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked");
// };

// let btns = document.querySelectorAll("button")
// for (btn of btns){
    // btn.onclick = sayhello;
    // btn.onmouseenter = function(){
    //     console.log("You entered a button")
    //}
    // console.dir(btn)

    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked me!")
// });
// }
// function sayhello(){
//     alert("Hello")
// }
// function sayName(){
//     alert("Hitesh Chaudahri")
// }


// let p = document.querySelector("p");
// p.addEventListener("mouseenter",function(){
//     console.log("parah was clicked");

// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box")
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     this.style.background = "Blue"
    
// })
// let p1 = document.querySelector("p1");
// btn.addEventListener("click",function(){
//     this.style.background = "Blue"
    
// })
// let yz = document.querySelector("button");
// btn.addEventListener("click",function(){
//     this.style.background = "Blue"
    
// })

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");

// function changecolor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";

// }

// btn.addEventListener("click",changecolor);
// p.addEventListener("click",changecolor);
// h2.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);


// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     // console.log(event)
//     console.log("button clicked");
// });


// btn.addEventListener("dblclick",function(event){
//     // console.log(event)
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key = ",event.key);
//     console.log("code",event.code)
//     console.log("key was pressed");
// });


// let form = document.querySelector('form')

// form.addEventListener("event",function(event){
//     event.preventDefault();
//     alert("your form submitted");
// })

// const myElement = document.getElementById('myDiv');

// myElement.addEventListener('mouseout', (event) => {
//   console.log('Mouse left the element or moved into a child element!');
//   // Perform actions like changing styling or triggering animations
// //   event.target.style.backgroundColor = 'red';
// });

// const log = document.getElementById("log");
// const input = document.querySelector("input");

// input.addEventListener("keypress", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "Scroll event fired!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 1000);
});