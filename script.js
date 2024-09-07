let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";


btn.addEventListener("click",async ()=>{
    // console.log("btn was clicked");
    let fact = await getFacts();
    let para = document.querySelector("#output");
    para.innerText = fact;
});

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error - ", e);
        return "no fact found";
    }
}

let btn2 = document.querySelector(".doggy");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async ()=>{
    // console.log("dog");
    let link = await dogImage();
    let img = document.querySelector(".dogImage");
    img.setAttribute("src", link);
});

async function dogImage(){
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        let link = res.data.message;
        return res.data.message;
    }catch{
        console.log("error");
    }
}