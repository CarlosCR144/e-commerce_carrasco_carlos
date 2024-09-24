class Producto {
    constructor (titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
};

let objeto = new Producto ("Escoba", "Nuevo", 5000, 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");



const etiquetas = `
            <div class="card m-3">
                        <img src="${objeto.imagen}" class="card-img-top"  alt="Car 1">
                        <div class="card-body">
                            <h5 class="card-title">${objeto.titulo}</h5>
                            <p class="${objeto.detalle}</p>
                            <p class="card-price">${objeto.precio}</p>
                            <p class="card-text">Quedan disponibles ${objeto.stock}</p>
                        </div>`;



const main = document.querySelector("main");
main.innerHTML = etiquetas;