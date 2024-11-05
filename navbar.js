const header = document.querySelector("header")

let nav = [
    {texto: "Inicio", href: "index.html"},
    {texto: "Contacto", href: "https://youtube.com/@juniorpride?si=0ut_XnT0zsTmxR4b"}
];

menu = [];

for(item of nav){
    if (item.texto === "Contacto") {
        menu.push(`<a class="nav-link" href=${item.href} target=_blank>${item.texto}</a>`)
    } else {
        menu.push(`<a class="nav-link" href="${item.href}">${item.texto}</a>`)
    }
}


let navCode =    
        `<nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top" style="position: relative">
            <div class="container-fluid d-flex">
                <a class="navbar-brand" href="#">E-COMMERCE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${menu.join().replaceAll(",", "")}
                </div>
                <ul class="navbar-nav ms-auto me-3">
                    ${localStorage.getItem("email") ? 
                        `<li><span style='cursor: pointer'>${localStorage.getItem("email")}</span></li>
                        <span>|</span>
                        <li><a href="cart.html"><img height="25" src="cart.png" alt="Comprar"/><b id="quantity">${localStorage.getItem("quantity")}</b> </a></li>
                        <span>|</span><li><span style='cursor: pointer' onclick="logOut()">Cerrar Sesión</span></li>` 
                        : `<a href="login.html" class="text-decoration-none">Iniciar Sesión</a>`
                    }
                </ul>
            </div>
        </nav>`
header.innerHTML = navCode;

function logOut(){
    localStorage.clear()
    location.href = "./index.html"
}

