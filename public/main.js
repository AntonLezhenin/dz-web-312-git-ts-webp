(()=>{var e=document.querySelector(".plus"),n=document.querySelector(".counter"),t=document.querySelector(".minus"),c=0;e.addEventListener("click",(function(){return c++,n.innerText="".concat(c),c})),t.addEventListener("click",(function(){return c--,n.innerText="".concat(c),c}))})();