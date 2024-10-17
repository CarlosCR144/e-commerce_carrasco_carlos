let botones = [
    {texto: "Inicio", href: "index.html"},
    {texto: "Contacto", href: "https://youtube.com/@juniorpride?si=0ut_XnT0zsTmxR4b"}
]

const header = document.querySelector("header");

let menu = []

for (let boton of botones) {
    if (boton.texto === "Contacto") {
        menu.push(`<a class="nav-item" href=${boton.href} target=_blank>${boton.texto}</a>`)
    } else {
        menu.push(`<a class="nav-item" href=${boton.href}>${boton.texto}</a>`)
    }
}

header.innerHTML = menu.join().replaceAll(",", "");

