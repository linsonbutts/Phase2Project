if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}
else{
    ready()
}

var globalCart= [];

function ready(){
    var removecartItemButtons = globalCart.getElementsByClassName("dangerBtn");

    for(var i=0; i<removecartItemButtons.length; i++){
        var button = removecartItemButtons[i];
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove()}
            ,updateCartTotal()
            )
            var quantityInputs = document.getElementsByClassName("quantityInput")
            for (var i=o; i<quantityInputs.length; i++)
            {
                var input = quantityInputs[i]
                input.addEventListener("change",quantityChanged)
                
            }
}

function quantity(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value =1
    }

    updateCartTotal()

}

function removeCartItem(event){
    var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove()
            ,updateCartTotal()
}

}
    function addItemToCart(){
        var cart = [];
        var i =0;
        if (addToCartClicked() == true)
        {
            cart[i]= document.getElementsByClassName('shopItem')[0];
            globalCart[i]=cart[i];
            i++;

            while(cart[i].getElementsByClassName('itemTitle').innerText == globalCart[i].getElementsByClassName('itemTitle').innerText)
            alert('This item is already in your cart')
            
        }
        total =   quantityInput.value()*  parseFloat(document.getElementsByClassName("priceTag")[0].innerText)
    }

    function addToCartClicked(event){
        var button = event.target
        var shopItem = getElementsByClassName("shopItem")[0]
        var title = document.getElementsByClassName("itemTitle")[0].innerText
        var price = document.getElementsByClassName("priceTag")[0].innerText
        console.log(title,price,imageSrc)
        addItemToCart(title,price,imageSrc)
        updateCartTotal()
    }
        function updateCartTotal(){
            var total = null;
            var quantity = null;
            for(i = 0; i<globalCart.length; i++){
                quantity = globalCart[i].getElementsByClassName('quantityInput').value()
                total = globalCart[i].price()*quantity
            }
        }
    