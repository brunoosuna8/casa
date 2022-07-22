const boton = document.querySelector(".mobile-menu");

boton.addEventListener("click",()=>{
    document.querySelector(".menu").style.visibility = "visible";
})
const close = document.querySelector(".close-button");
close.addEventListener("click",()=>{
    document.querySelector(".menu").style.visibility = "hidden";
})