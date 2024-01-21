let loadMore = document.querySelector(".loadMore");
let button = document.querySelector("#button");
const URL="https://fakestoreapi.com/products";
let myntra = async()=>{
    let responce = await fetch(URL);
    let data = await responce.json();
    let i = 0;
    button.addEventListener("click",()=>{
        let count = 0;
        while(i<=data.length&&count<4){
            let images = document.createElement("div");
            images.classList.add("MyntraImages");
            images.innerHTML=`<img src="` +data[i].image +`" alt=""></img><br>`;
            loadMore.append(images);
            count++;
            i++;
        }
        if(i==data.length){
            button.style.display="none";
        }

    });
};
myntra();