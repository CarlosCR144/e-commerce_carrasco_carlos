// Asignar los elementos HTML para modificar
const h1 = document.querySelector("h1");
const section = document.querySelector("section");

// Modificar texto de h1
h1.innerText = "Productos"

// Inicializar variable "array" al asignarle un array vacío
let array = []

// Bucle para insertar las Cards al array "array"
for (let i = 1; i < 10; i++) {
    array.push(`
        <div class="card" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Auto ${i}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
`)
}

// Transformar el array a string
// Reemplazar las "," con cadena vacía
section.innerHTML = array.join().replaceAll(",", "");



