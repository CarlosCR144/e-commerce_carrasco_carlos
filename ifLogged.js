const ifLogged = () => {
    if (localStorage.getItem("email")) {
        location.href = "index.html"
    }
}

ifLogged()