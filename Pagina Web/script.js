//Variable que mantiene el estado del menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
//Funcion para ocultar el menu cuando se selecciona una opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function alerta(){
    alert();
}
function scrollToRecipes() {
    const recetasSection = document.getElementById('recetas');
    recetasSection.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('input', e => {
    if (e.target.matches('#buscadorid')) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.receta').forEach(receta => {
            const titulo = receta.querySelector('h2').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                receta.style.display = 'block'; // Mostrar la receta si coincide
            } else {
                receta.style.display = 'none'; // Ocultar la receta si no coincide
            }
        });
    }
});
