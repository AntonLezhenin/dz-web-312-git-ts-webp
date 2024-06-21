const plusButton : HTMLElement | null = document.querySelector(".plus");

let counter : HTMLElement | null = document.querySelector(".counter");

const minusButton : HTMLElement | null = document.querySelector(".minus");


let start : number = 0;

plusButton.addEventListener("click", function(){
    start++;
    counter.innerText = `${start}`;
    return start
});

minusButton.addEventListener("click", function(){
    start--;
    counter.innerText = `${start}`;
    return start
})