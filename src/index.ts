const textForCom : HTMLElement | null = document.querySelector(".textForCom");

const addComBut : HTMLElement | null = document.querySelector(".addComBut");

const nameCom : HTMLElement | any = document.querySelector(".name");

const comment : HTMLElement | any = document.querySelector(".comment");


const comments : HTMLElement | null = document.querySelector(".comments");

const comArr = [];

let glName : string;

nameCom.addEventListener("input", function(e : any){
    glName = e.target.value;
})


let glCom : any;
comment.addEventListener("input", function(e : any){
  glCom = e.target.value;
});

addComBut.addEventListener("click", function(){
    let comBlock : HTMLElement | null = document.createElement("div");
    let nomi : HTMLElement | null = document.createElement("h3");
    nomi.innerText = glName;
    comBlock.appendChild(nomi);
    let date : HTMLElement | null = document.createElement("p");
    date.innerText = `${new Date()}`;
    comBlock.appendChild(date);
    let comi : HTMLElement | null = document.createElement("p");
    comi.innerText = glCom;
    comBlock.appendChild(comi);
    comments.appendChild(comBlock);
    nameCom.value = "";
    comment.value = "";
})