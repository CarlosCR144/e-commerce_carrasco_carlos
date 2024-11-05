const main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const autos = [
  {
  id: 1,
  modelo: "Tundra",
  descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  precio: 15000,
  url: `1`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 2,
  modelo: "I",
  descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  precio: 17000,
  url: `2`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 3,
  modelo: "M3",
  descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  precio: 55000,
  url: `3`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 4,
  modelo: "Rio",
  descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  precio: 19000,
  url: `4`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 5,
  modelo: "Ram Van B250",
  descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  precio: 25000,
  url: `5`,
  stock: 18,
  categoria: "Vintage"
}, {
  id: 6,
  modelo: "Econoline E150",
  descripcion: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  precio: 23000,
  url: `6`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 7,
  modelo: "Rabbit",
  descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  precio: 19000,
  url: `7`,
  stock: 18,
  categoria: "Vintage"
}, {
  id: 8,
  modelo: "928",
  descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  precio: 41000,
  url: `8`,
  stock: 18,
  categoria: "Moderno"
}, {
  id: 9,
  modelo: "Intrepid",
  descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  precio: 24000,
  url: `9`,
  stock: 18,
  categoria: "Moderno"
}];


const carFind = autos.find((autos) => autos.id == elemento);


let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${carFind.url}.jpg" height="400px" alt="Zenbook Pro 14" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
                <h1 class="producto-h1">${carFind.modelo}</h1>
                <p class="description">${carFind.descripcion}</p>
                <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                <p class="original-price">${carFind.precio}</p>
                <p class="discounted-price">$25.000 <span class="discount">(5% OFF)</span></p>
                <p class="installments">In 6 installments of $673,799.78</p>
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Free Standard International Shipping.</h3>
                <p>Estimated between Tue, Oct 22 and Wed, Nov 6.</p>
                <b class="bold">Stock: ${carFind.stock}</b>
            
        </div>
    </div>

    ${localStorage.getItem("email") ? 
        `
        <div class="input-group">
        <button class="btn btn-danger" type="button" onclick="increaseItem()">+</button>
        <input type="number" class="form-control text-center" value="1">
        <button class="btn btn-danger" type="button" onclick="decreaseItem()">-</button>
        </div>
        <button type="button" class="btn btn-primary btn-lg" onclick="addItems()">Agregar al carrito</button>
        `
        : 
        `<a href="login.html"><button type="button" class="btn btn-primary btn-lg">Iniciar sesión para comprar</button></a>`
      }
      </div>;`
      
main.innerHTML = etiquetas;


const counter = document.querySelector("input")

const increaseItem = () => {
  const idProduct = Number(window.location.search.split("=")[1]);

  const product = autos.find(car => car.id === idProduct)

  if (product.stock > counter.value) {
    counter.value = Number(counter.value) + 1
  }
}

const decreaseItem = () => {
  if  (Number(counter.value) > 1){
    counter.value = Number(counter.value) - 1
  }
}


const addItems = () => {
  const add = () => {
  let cart = JSON.parse(localStorage.getItem("cart"))

  const idProduct = Number(window.location.search.split("=")[1]);
  const product = autos.find(car => car.id == idProduct)
  const existeIdEnCart = cart.some(item => item.product.id == idProduct)

  if (existeIdEnCart) {
    cart = cart.map(item => {
        if (item.product.id === idProduct) {
          return {...item, quantity: item.quantity + Number(counter.value)}
        } else {
          return item
        }
    })
  } else {
    cart.push({product: product, quantity: Number(counter.value)})
  }

  console.log(cart)
  localStorage.setItem("cart", JSON.stringify(cart))
  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity
  counter.value = "1"

  Toastify({

    text: "Producto añadido al carrito",
    duration: 1000
    
  }).showToast();
}
add()
  Swal.fire({
    text: "¿Estás seguro de añadir al carrito?",
    confirmButtonText: "Sí"
    })
  
}
