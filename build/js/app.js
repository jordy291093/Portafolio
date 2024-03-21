// Funcion que se aplica el estilo a la opcion seleccionado del menu y quita la previamente seleccionado
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Hacemos desaparecer el menu una vez que ha seleccionado una opcion en el responsivo
    var x = document.getElementById("nav");
    x.className = "";
}
// Funcion que muestra el menu responsivo
function responsiveMenu() {
    var menu = document.getElementById("nav");
    if(menu.className === "") {
        menu.className = "responsive";
    } else {
        menu.className = "";
    }
}

// Detecto del scroll para aplicar la animacion de las barras
window.onscroll = function() {
    efectoHabilidades()
};