const sessionAccount = {
    email: "qpdjhon@gmail.com",
    password: "jhonvuelve"
}

const form = document.querySelector("form")
const message = document.querySelector("p")


const emailItem = localStorage.getItem("email")

ifLogged()

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = form.elements.email.value
    let pwd = form.elements.password.value

    if (sessionAccount.email === email && sessionAccount.password === pwd) {
        localStorage.setItem("email", email)
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        location.href = "./index.html";
    } else {
        form.elements.email.value = ""
        form.elements.password.value = ""
        message.innerText = "Datos incorrectos."
    }
})


