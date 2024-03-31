const menu = document.getElementById ("menu");
const cartBtn = document.getElementById ("cart-btn");
const cartModal = document.getElementById ("cart-modal");
const cartItemsContainer = document.getElementById ("cart-items");
const cartTotal = document.getElementById ("cart-total");
const checkoutBtn = document.getElementById ("checkout-btn");
const closeModalBtn = document.getElementById ("close-modal-btn"); 
const cartCounter = document.getElementById ("cart-count"); 
const addressInput = document.getElementById ("address");
const addressWarn = document.getElementById ("address-warn");

let cart = [];


// abrir carrinho modal
cartBtn.addEventListener ("click" , function() {
    cartModal.style.display = "flex"
});

// fechar modal ao clicar fora
cartModal.addEventListener ("click" ,function(event) {
   if(event.target === cartModal){
      cartModal.style.display = "none"
   }
});

// fechar modal no botão fechar
closeModalBtn.addEventListener("click"  ,function() {
   cartModal.style.display = "none"
}); 


// adicionando no carinho 

menu.addEventListener ("click" , function(event){
  let parentButton = event.target.closest(".add-to-cart-btn")
  if(parentButton) {
    const name = parentButton.getAttribute("data-name")
    const price = parseFloat (parentButton.getAttribute("data-price"))
    addToCartbtn ( name, price)

    // adicionar no carrinh0
    
  }
});

// função paraa adicionar no carrinho 
function addToCartbtn (name, price) {
    const existingItem = cart.find(item => item.name === name)
    if (existingItem){
        existingItem.quantity += 1 ;
    }
    cart.push({
        name,
        price,
        quantity: 1,
    })
}

