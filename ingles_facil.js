
let menu = document.querySelector("menu");
let listaDesplegable = document.querySelector("ul");

menu.addEventListener("click",()=>{
    listaDesplegable.classList.toggle("mostrar");
})