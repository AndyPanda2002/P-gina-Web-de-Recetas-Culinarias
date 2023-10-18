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
//Ocultar la barra lateral de navegacion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Baja cuando se presiona el boton de buscar
function scrollToRecipes() {
    const recetasSection = document.getElementById('recetas');
    recetasSection.scrollIntoView({ behavior: 'smooth' });
    seleccionar();
}
//Filtro para buscar las recetas
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
//Enviar el formulario para agregarlo a la pagina
function agregarReceta() {
    // Obtener los valores del formulario
    const nombreRecetaInput = document.querySelector('.nombre-receta input');
    const ingredientesTextarea = document.querySelector('.ingredientes textarea');
    const pasosRecetaTextarea = document.querySelector('.pasos-receta textarea');

    const nombreReceta = nombreRecetaInput.value.trim();
    const ingredientes = ingredientesTextarea.value.trim();
    const pasosReceta = pasosRecetaTextarea.value.trim();

    // Validar que los campos no estén vacíos
    if (nombreReceta === '' || ingredientes === '' || pasosReceta === '') {
        alert('Por favor, complete los campos.');
        return;  // No continúa si algún campo está vacío
    }

    // Crear un nuevo elemento de receta
    const nuevaReceta = document.createElement('div');
    nuevaReceta.classList.add('receta');
    nuevaReceta.innerHTML = `
        <h2>${nombreReceta}</h2>
        <p class="texto-negrita"><br>Ingredientes:</p>
        <p>${ingredientes}</p>
        <p class="texto-negrita"><br>Pasos:</p>
        <p>${pasosReceta}</p>
    `;

    // Insertar el nuevo elemento en la lista de recetas
    const listaRecetas = document.querySelector('#recetas .lista');
    listaRecetas.appendChild(nuevaReceta);

    // Limpiar los campos del formulario
    nombreRecetaInput.value = '';
    ingredientesTextarea.value = '';
    pasosRecetaTextarea.value = '';
}
