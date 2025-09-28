// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");