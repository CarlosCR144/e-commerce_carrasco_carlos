// SPRINT 2

const h1 = document.querySelector("h1");

const section = document.querySelector("section");

h1.innerText = "Productos";

const autos = [
  {
  id: 1,
  modelo: "Tundra",
  descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  precio: 15000,
  url: `1`,
  categoria: "Moderno"
}, {
  id: 2,
  modelo: "I",
  descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  precio: 17000,
  url: `2`,
  categoria: "Moderno"
}, {
  id: 3,
  modelo: "M3",
  descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  precio: 55000,
  url: `3`,
  categoria: "Moderno"
}, {
  id: 4,
  modelo: "Rio",
  descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  precio: 19000,
  url: `4`,
  categoria: "Moderno"
}, {
  id: 5,
  modelo: "Ram Van B250",
  descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  precio: 25000,
  url: `5`,
  categoria: "Vintage"
}, {
  id: 6,
  modelo: "Econoline E150",
  descripcion: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  precio: 23000,
  url: `6`,
  categoria: "Moderno"
}, {
  id: 7,
  modelo: "Rabbit",
  descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  precio: 19000,
  url: `7`,
  categoria: "Vintage"
}, {
  id: 8,
  modelo: "928",
  descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  precio: 41000,
  url: `8`,
  categoria: "Moderno"
}, {
  id: 9,
  modelo: "Intrepid",
  descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  precio: 24000,
  url: `9`,
  categoria: "Moderno"
}];



// Botones de categoria
const todosButton = document.querySelector("#todosButton");
const modernosButton = document.querySelector("#modernosButton");
const vintageButton = document.querySelector("#vintageButton");

// -----------------------------------------------------------------------

// Botones del buscador
const resetButton = document.querySelector("#resetButton");
const filterButton = document.querySelector("#filterButton");
const buscador = document.querySelector("#buscador");
const buscadorContainer = document.querySelector("#buscadorContainer")



const buscar = () => {
  const filtrado = autos.filter(auto => auto.modelo.includes(buscador.value))
  
  if (filtrado.length === 0) {
    section.innerHTML = `<p>No se han encontrado productos</p>`;
  } else {
    mostrarCards(filtrado)
  }
}

const resetInput = () => (buscador.value = "");

filterButton.addEventListener("click", buscar)

resetButton.addEventListener("click", () => {
  resetInput()
  mostrarCards(autos)
})


// ------------------------------------------------------------------------


modernosButton.addEventListener("click", () => {
  filterProducts("Moderno")
  h1.innerText = "Productos - Modernos";
})

vintageButton.addEventListener("click", () => {
  filterProducts("Vintage")
  h1.innerText = "Productos - Vintage";
})

todosButton.addEventListener("click", () => {
  mostrarCards(autos)
  h1.innerText = "Productos";
})

const filterProducts = (category) => {
  const productsToShow = autos.filter(product => product.categoria === category)
  mostrarCards(productsToShow)
}



const mostrarCards = (a) => {
  const cards = a.map((auto) =>
    `<div class="card" style="width: 18rem;">
                <img src=https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${auto.url}.jpg class="card-img-top" alt="..." height="200px">
                <div class="card-body">
                    <h5 class="card-title">Modelo: ${auto.modelo}</h5>
                    <p class="card-text">${auto.descripcion.slice(0, 50)}...</p>
                    <p class="card-text">Categoria: ${auto.categoria}</p>
                    <p class="card-price">$${auto.precio}</p>
                    <a href="producto.html?prod=${auto.id}" class="btn btn-primary">Ver más</a>

                </div>
            </div>`);
  section.innerHTML = cards.join("");
}

mostrarCards(autos)


