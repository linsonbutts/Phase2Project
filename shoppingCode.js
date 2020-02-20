if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}
else{
    ready()
}

function ready(){
    var removecartItemButtons = document.getElementsByClassName("dangerBtn");

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
    function updateCartTotal(){
        var cartItemContainer = document.getElementsByClassName("cartItem")[a]
        var cartRows = cartItemContainer.getElementsByClassName("cartRow")
        total =0;
        for (var i=0; i<cartRows.length; i++){
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName("priceTag")[0]
            var quantityElement = cartRow.getElementsByClassName("quantityInput")[0]
            var price = parseFloat(priceElement.innerText.replace("$",""))
            var quantity = quantityElement.Value
            total = total (price*quantity)
        }
        total = Math.round(total * 100)/100
        document.getElementsByClassName("totalPrice")[0].innerText = "$" + total
    }

    var addToCartButtons = document.getElementsByClassName("shopButton")
    for (var i=0; i<cartRows.length; i++)
    {
        var button = addToCartButtons[i]
        button.addEventListener("click", addToCartClicked)
    }

    function addToCartClicked(event){
        var button = event.target
        var shopItem = button.parentElement
        var title = shopItem.getElementsByClassName("shopItem")[0].innerText
        var price = shopItem.getElementsByClassName("priceTag")[0].innerText
        var imageSrc = shopItem.getElementsByClassName("itemImage")[0].imageSrc
        console.log(title,price,imageSrc)
        addItemToCart(title,price,imageSrc)
        updateCartTotal()
    }

    function addItemToCart(title,price,imageSrc){
        cartRow.InnerText = title
        cartRow.classList.add("cartRow")
        var cartRow = document.getElementById('div')
        var cartItems = document.getElementsByClassName('cartItem')[0]
        var cartItemNames = cartItems.getElementsByClassName('itemTitle')
        for (var i=0; i<cartItemNames; i++){
            if (cartItemNames[i].innerText == title)
            alert('This is in your cart already')
            return
        }
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName("dangerBtn")[0].addEventListener('click',removeCartItem)
        cartRow.getElementsByClassName('quantityInput')[0].addEventListener
        ('change',quantityChanged)

        document.getElementsByClassName('purchaseBtn')[0].addEventListener('click',purchaseClicked)

        function purchaseClicked(){
            alert('Thank you for your purchase')
            var cartItems = document.getElementsByClassName('cartItems')[0]
            while(cartItems.hasChildren){
                cartItems.removeChild(cartItems.firstChild)
            }
            updateCartTotal()
        }
    }