let prod = {
    title: "",
    author: "",
    genre: "",
    year: ,
};
const cart = []
function createCartObject(prod){
    const cartProduct = {...prod, quantity: 1 };
}

function checkCart(prod){
    if (!prod) {
        return;
    }
    const cartProduct = {...prod, quantity: 1 };
    const found =cart.find((cartItem)=> cartItem.title === cartProduct.title);
    if(found){
        found.quantity += 1;
    } else{
        cart.push(cartProduct);
    }
}

checkCart(prod);
console.log(cart);