// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click", async () =>{
// //     let fact = await getFacts()
// //     // console.log(fact);
// //     let p = document.querySelector("#result");
// //     p.innerText = fact;
//     let link = await getImage();
//     // console.log(link)
//     let img = document.querySelector("img")
//     img.setAttribute("src",link);
// });

// // let url = "https://www.google.com/search?q=catfact.ninja+api";

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error -", e);
//         return"No Image found"
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         // The API requires a specific 'Accept' header to return JSON
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         // This will return the joke object, e.g., { id: '...', joke: '...', status: 200 }
//         return res.data.joke;
//     } catch (e) {
//         console.log("error -", e);
//         return "No Jokes found";
//     }
// }

// let url = "http://universities.hipolabs.com/search?";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("#country").value;
//   console.log("Country:", country);
// //   getUniversity(country);
//   let universitiesArr = await getUniversity(country);
//   console.log(universitiesArr);
//   Show(universitiesArr);
// });
// // let  country = "India";

// function Show(universitiesArr){
//     let list = document.querySelector("#list");
//     for(col of universitiesArr){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.append(li);
//     }
// }
// async function getUniversity(country) {
//   try {
//     let res = await axios.get(`${url}?country=${country}`);
//     return res.data;
//     // console.log(res.data);
//   } catch (e) {
//     console.log("error -", e);
//     return [];
//   }
// }

let url = "http://universities.hipolabs.com";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;
    console.log("Country:", country);

    // Fetch the list of universities
    let universitiesArr = await getUniversity(country);
    
    // Display the list on the page
    Show(universitiesArr);
});

function Show(universitiesArr) {
    let list = document.querySelector("#list");
    list.innerHTML = ""; // Clear the previous list before adding new items

    for (col of universitiesArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.append(li);
    }
}

async function getUniversity(country) {
    try {
        // CORRECTED LINE: Added "/search" to the URL
        let res = await axios.get(`${url}/search?country=${country}`);
        return res.data;
    } catch (e) {
        console.log("error -", e);
        return []; // Return an empty array on error
    }
}