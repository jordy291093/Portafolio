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

// Funcion que aplica la animacion de las barras 
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("php").classList.add("barra-progreso5");
        document.getElementById("sass").classList.add("barra-progreso6");
    }
}