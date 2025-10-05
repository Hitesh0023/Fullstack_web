let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () =>{
//     let fact = await getFacts()
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
    let link = await getImage();
    // console.log(link)
    let img = document.querySelector("img")
    img.setAttribute("src",link);
});


// let url = "https://www.google.com/search?q=catfact.ninja+api";

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error -", e);
        return"No Image found"
    }
}
