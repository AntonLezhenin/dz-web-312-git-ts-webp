const addBlock : HTMLElement | null = document.querySelector(".addBlock");

const bList : HTMLElement | null = document.querySelector(".bList");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

addBlock.addEventListener("click", function(){

let block : HTMLElement | null = document.createElement("div");
block.style.width = "100px";
block.style.height = "100px";
block.style.backgroundColor = getRandomColor();
bList.appendChild(block);
block.addEventListener("click", function(e : any){
    let nothing = block.style.display = "none"
    e = nothing;
})
});

