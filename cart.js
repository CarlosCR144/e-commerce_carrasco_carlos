document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".cartProducts");
    const price = document.querySelector(".finalPrice");
    const navCart = document.querySelector("#quantity");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCards = (cart) => {
        const cartCard = cart.map((card) => `
            <div class="card row mb-3 ms-1 me-2">
                <div id="cardDiv" class="col-xl-8">
                    <div>
                        <div class="card-body">
                            <div class="d-flex align-items-start border-bottom pb-3">
                                <div class="me-4">
                                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${card.product.url}.jpg" height="200px" class="avatar-lg rounded" />
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="text-truncate font-size-18">${card.product.modelo}</h5>
                                </div>
                                </div>
                                <div class="row mt-3">
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Precio</p>
                                <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
                                </div>
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Cantidad</p>
                                <h5 class="mb-0 mt-2">${card.quantity}</h5>
                                </div>
                                <div class="col-md-4">
                                <p class="text-muted mb-2">Total a pagar</p>
                                <h5>$${(card.quantity * card.product.precio).toFixed(2)}</h5> 
                                <p onclick="removeCart(${card.product.id})">Eliminar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        div.innerHTML = cartCard.join('');
    };

    function total(cart) {
        const totalAmount = cart.reduce((ac, actual) => ac + actual.product.precio * actual.quantity, 0);
        price.innerText = "$" + totalAmount;
    }

    removeCart = function(id) {
        if (navCart) {
            cart = cart.filter(car => car.product.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCards(cart);
            total(cart);

            let quantity = cart.reduce((ac, actual) => ac + actual.quantity, 0);
            localStorage.setItem("quantity", quantity);
            navCart.innerText = quantity;
        } else {
            console.error("navCart no está definido");
        }
    };

    window.clearCart = () => {
        console.log("Clearing cart...");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("quantity", 0);
        navCart.innerText = "0";
        cartCards(cart);
        total(cart);
    }

    total(cart);
    cartCards(cart);
});


// const cardsSection = document.querySelector("#cart #cards")

// let cart = JSON.parse(localStorage.getItem("cart"))

// function getCart(cards) {
//     const list = cards.map(
//         card => `<div class="card border shadow-none mb-2">
//       <div class="card-body">
//        <div class="d-flex align-items-start">
//         <div class="me-4">
//          <img
//           src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${card.product.url}.jpg"
//           alt="${card.product.modelo}"
//           class="img-fluid rounded-start"
//          >
//         </div>
//         <div class="flex-grow-1 overflow-hidden">
//          <h5 class="text-truncate font-size-18">${card.product.modelo}</h5>
//          <div class="row">
//           <div class="col-md-3">
//            <div class="mt-3">
//             <p class="text-muted mb-2">Precio</p>
//             <h5 class="mb-0 mt-2">$${card.product.precio}</h5>
//            </div>
//           </div>
//           <div class="col-md-4">
//            <div class="mt-3">
//             <p class="text-muted mb-2">Cantidad</p>
//             <h5 class="mb-0 mt-2">${card.quantity}</h5>
//            </div>
//           </div>
//           <div class="col-md-3">
//            <div class="mt-3">
//             <p class="text-muted mb-2">Total</p>
//             <h5>$${card.product.precio * card.quantity}</h5>
//            </div>
//           </div>
//          </div>
//         </div>
//        </div>
//       </div>
//      </div>`
//     )
//     cardsSection.innerHTML = list.join("")
// }

// getCart(JSON.parse(localStorage.getItem("cart")))

// function total(cards) {
//     let cartTotal = document.querySelector("#cart-total")

//     let total = 
//         cards.length > 0
//             ? cards.reduce(
//                 (acumulado, actual) => acumulado + actual.auto.precio * actual.quantity,
//                 0
//             )
//         : 0
    
//     cartTotal.innerText = "$" + total
// }

// total(JSON.parse(localStorage.getItem("cart")))

// function clearCart() {
//     let quantityTag = document.querySelector("#quantity")
//     quantity.innerText = "0"
//     localStorage.setItem("cart", JSON.stringify([]))
//     getCart([])


// }

// function removeItem(id) {
    
// }