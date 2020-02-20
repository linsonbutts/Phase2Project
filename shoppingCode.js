(function($) {
    $.purchase = function(element){
        this.$element=$(element); //top element
        this.init();
    
};


$.purchase.prototype = {
    init: function() {
        //solely initializes properties and methods
        this.cartPrefix = "flowers-"; //prefix used in cart's storage
        this.cartName = this.cartPrefix + "cart";
        this.shippingRates = this.cartPrefix + "shipping-rates";
        this.total = this.cartPrefix + "total";
        this.storage = sessionStorage;
        this.$formAddCart = this.$element.find("form.addCart");
        this.$formCart = this.$element.find("#shoppingCart");
        this.$checkoutCart = this.$element.find("#checkoutCart");
        this.$shipping = this.$element.find("#sshipping");
        this.$subTotal = this.$element.find( "#stotal" ); // element that displays the subtotal charges
        this.$shoppingCartActions = this.$element.find( "#shopping-cart-actions" ); // cart actions links
        this.$updateCartBtn = this.$shoppingCartActions.find( "#update-cart" ); // update cart button
        this.$emptyCartBtn = this.$shoppingCartActions.find( "#empty-cart" ); // empty cart button
        this.$userDetails = this.$element.find( "#user-details-content" ); // element that displays the user's information
        this.$paypalForm = this.$element.find( "#paypal-form" ); // PayPal form

        this.currency = "&cash;"; // HTML entity of the currency to be displayed in layout
        this.currencyString = ""; // currency symbol as text string
        this.paypalCurrency = "USD"; // PayPal's currency code

        _emptycart: function() {
            this.storage.clear();
        }
        _extractPrice: function(element) {
            var self = this;
            var text = element.text();
            var price = text.replace(self.currencyString, "").replace(" "," ");
            return price;
        }
        _convertNumber: function(element){
            var str = element.toString();
            return str;
        }
        _addToCart: function( values ){
            var cart = this.storage.getItem( this.cartName);
            var cartObject = this.toJSONObject(cart);
        }
        

        }

    }


$(function() {
    var purchase = new.$.purchase("#site")
});

})(jQuery);