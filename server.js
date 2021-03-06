//http://35.226.13.39/cis329/Phase2/HomePage.html

const http = require('http'),
        url = require('url'),
        util = require('util');
 
function reqHandler(req, res){
    let path = url.parse(req.url).pathname;
    console.log(path);
    if(path=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html>'+
           ' <head>'+
                '<title>'+
                '    FlowersForSale'+
                '</title>'+
               ' <link rel="stylesheet" type="text/css" media="screen" href="main.css">'+
                '<script src="shoppingCode.js" async></script>'+
            
            +'</head>'+
            '<wrapper>'+
                '<div class="dropdown">'+
                   '<button class="dropbtn">OTHER STUFF</button>'+
                    '<div class="dropdown-content">'+
                      '<a href="AboutPage.html">About/Contact</a>'+
                      '<a href="services.html">Services</a>'+
                   ' </div>'+
                 ' </div>'+
                  '<div class=checkout>'+
                      '<a href="ConfirmOrder.html">'+
                        '<button class="cartButton">'+
                           ' <img src="/ProjectPictures/shoppingCart.png" height="60px" width="60px">'+
                      '</button></a>'+
                        
                     ' </div>'+
                  '</div>'+
               ' <header>'+
                    '<h1 class="opening">Our Selection</h1>'+
                '</header>'+
                '<div id="shoppingList">'+
               '<ul>'+
                   '<li>'+
                        '<div class="cartItem">'+
                            '<a href="/phase.html">'+
                                '<h1><img src="/ProjectPictures/rose.png" alt="/C:/Users/16787/RichInternetApplications/VsCode/WebTechReviewProject/WebTechReview/ProjectPictures/HeadTagEx.png" class="prodImage"></a></h1>'+
                           '<p class="description">Single Red Rose</p>'+
                            '<p class="priceTag">$18.99</p>'+
                        '</div>'+
                    
                    '</li>'+
                    '<li>'+
                       ' <div class="cartItem">'+
                            '<a href="/phase.html">'+
                                '<img src="/ProjectPictures/Lillies.jpg" class="prodImage"></a>'+
                                '<p class="description">Some Lillies</p>'+
                                '<p class="priceTag">$18.99</p>'+
                        '</div>'+
                        
                   '</li>'+
                    '<li class>'+
                        '<div class="cartItem">'+
                            '<a href="/prod2.html">'+
                                '<img src="/ProjectPictures/Sunflower.jpg" class="prodImage"></a>'+
                                '<p class="description">Flower</p>'+
                                '<p class="priceTag">$18.99</p>'+
                        '</div>'+
                       
                   '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod3.html">'+
                            '<img src="/ProjectPictures/Tulips.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
            
                    '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod4.html">'+
                            '<img src="/ProjectPictures/Sunflower.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
                    '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod5.html">'+
                            '<img src="/ProjectPictures/Azaleas.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
                    '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod6.html">'+
                            '<img src="/ProjectPictures/violets.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
                   '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod7.html">'+
                            '<img src="/ProjectPictures/Tulips.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
                   '</li>'+
                    '<li class="cartItem">'+
                        '<a href="/prod8.html">'+
                            '<img src="/ProjectPictures/violets.jpg" class="prodImage"></a>'+
                            '<p class="description">Flower</p>'+
                            '<p class="priceTag">$18.99</p>'+
                   '</li>'+
                    '<li class="cartItem">'+
                        <a href="/prod9.html">
                            <img src="/ProjectPictures/Sunflower.jpg" class="prodImage"></a>
                            <p class="description">Flower</p>
                            <p class="priceTag">$18.99</p>
                    </li>
                </ul>
                
                </div>
                </body>
            </wrapper>
            
            
            </html>);                    
    }
    else if(path == '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('about page');
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write("404 Error Page");
    }
    res.end();
};
 
 
 
const server = http.createServer(reqHandler);
server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})