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
        `<nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
            <div class="container-fluid d-flex">
                <a class="navbar-brand" href="#">E-COMMERCE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${menu.join().replaceAll(",", "")}
                </div>
                <div class="navbar-nav ms-auto me-3">
                    ${localStorage.getItem("email") ? 
                        `<span style='cursor: pointer'>${localStorage.getItem("email")}</span> | <span style='cursor: pointer' onclick="logOut()">Cerrar Sesión</span>` 
                        : `<a href="login.html" class="text-decoration-none">Iniciar Sesión</a>`
                    }
                </div>
            </div>
        </nav>`
header.innerHTML = navCode;

function logOut(){
    localStorage.clear()
    location.href = "./index.html"
}

// let botones = [
//     {texto: "Inicio", href: "index.html"},
//     {texto: "Contacto", href: "https://youtube.com/@juniorpride?si=0ut_XnT0zsTmxR4b"}
// ]

// const header = document.querySelector("header");

// let menu = []

// for (let boton of botones) {
//     if (boton.texto === "Contacto") {
//         menu.push(`<a class="nav-item" href=${boton.href} target=_blank>${boton.texto}</a>`)
//     } else {
//         menu.push(`<a class="nav-item" href=${boton.href}>${boton.texto}</a>`)
//     }
// }

// header.innerHTML = menu.join().replaceAll(",", "");

