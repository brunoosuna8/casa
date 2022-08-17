const boton = document.querySelector(".mobile-menu");

boton.addEventListener("click",()=>{
    document.querySelector(".menu").style.visibility = "visible";
})
const close = document.querySelector(".close-button");
close.addEventListener("click",()=>{
    document.querySelector(".menu").style.visibility = "hidden";
})

var productsContainer = document.querySelectorAll(".product-select");
var mainProduct = document.querySelector(".product-select-show");

productsContainer[0].onclick = function(){
    mainProduct.src = productsContainer[0].src;
}
productsContainer[1].onclick = function(){
    mainProduct.src = productsContainer[1].src;
}
productsContainer[2].onclick = function(){
    mainProduct.src = productsContainer[2].src;
}
productsContainer[3].onclick = function(){
    mainProduct.src = productsContainer[3].src;
}

function remove(button){
    let cartProduct = button.parentElement;
    cartProduct.remove();
}
// para el product shop hacer 1 array de 4 arrays con 4 productos.osea 16 productos en total
//cuando uno selecciona un producto,aparece el mismo con los 3 productos restantes de ese mismo array por debajo del producto q se le hizo click.
//y si se hace click en los prodcutos q estan abajo en chiquito.se pone esa foto .los elementos del array van a tener la foto del producto,para poder mostrar.

//






