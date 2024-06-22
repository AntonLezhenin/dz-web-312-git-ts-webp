function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const txt : HTMLElement | null = document.querySelector(".txt");

  const palitra : HTMLElement | null = document.querySelector(".palitra");

  const children = palitra.getElementsByTagName("div");

  for(let i = 0; i <= 10; i++){
   let block : HTMLElement = document.createElement("div");
   block.style.width = "50px";
   block.style.height = "50px";
   block.style.backgroundColor = getRandomColor();
   block.dataset.color = block.style.backgroundColor;
   palitra.appendChild(block)
   block.addEventListener("click", function(){
   txt.style.color = block.dataset.color;
   })
  }
