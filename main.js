$(document).ready(function(){
     $(".logo").on('click',()=>location.reload());
     $("#iphone").on('click',()=>renderProducts(iphoneProducts));
     $("#samsung").on('click', () => renderProducts(samsungProducts));
     $("#huawei").on('click', () => renderProducts(huaweiProducts));
     $("#others").on('click', () => renderProducts(othersProducts));
     $("#cart").on('click', () => renderBuy(cart));

     // delete this part to fix website
     // $(".main").hide();
     // $(".products").hide();
     // $(".cart-container").ready(renderBuy(cart));

});

function each(coll, f) {
     if (Array.isArray(coll)) {
          for (var i = 0; i < coll.length; i++) {
               f(coll[i], i);
          }
     } else {
          for (var key in coll) {
               f(coll[key], key);
          }
     }
}
function map(array, f) {
     var acc = [];
     each(array, function (element, i) {
          acc.push(f(element, i));
     });
     return acc;
}
function reduce(array, f, acc) {
     if (acc === undefined) {
          acc = array[0];
          array = array.slice(1);
     }
     each(array, function (element, i) {
          acc = f(acc, element, i);
     });
     return acc;
}

function renderProduct(product){

     return $(`<div id=` + product.id + ` class="product">
               <div class="pic-product">
                    <img src="` + product.url + `">
               </div>
               <div class="details-product">
                    <span>name     : ` + product.name + `      </span>
                    <span>note     : ` + product.note + ` / 10 </span>
                    <span>prix     : ` + product.prix + ` $    </span>
                    <span>in stock : ` + product.stock + `     </span>
                    <span>details... ` + product.details + `   </span>
               </div>
               <div class="buy-product">
                    <button id="buy-btn" onclick="buy(`+ product.name +`)"> + cart</button>
               </div>
          </div>`);
}

function renderProducts(products){
     var $products_container = $(".products").first();
     $products_container.empty();
     $(".main").empty();

     var $products = map(products, (product)=>{
          return renderProduct(product);
     });

     each($products,(product)=>{
          $products_container.append(product);
     });

}

function buy(p){
     cart.push(p);
     $("#count-cart").text(cart.length);
     console.log(cart);
}

function renderBuy(cart){
     var $cart = $(".cart-container").first();
     $(".main").empty();
     $(".products").empty();

     $cart.empty();

     if(cart.length === 0){
          $cart.append("you don't have any products ...");
     }else{
          var $phones =""; 
          each(cart, (phone) => {
               $phones += "<tr><td>" + phone.name + "</td> <td>" + phone.prix + "</td></tr>"
          });
          var $total = 0;
          each(cart, (phone) => $total += phone.prix);

          var $content = `<div class="form">
                              <label>full name</label><input id='full-name' type="text"> 
                              <label>location</label><input id='location' type="text"> 
                              <label>phone number</label><input id='phone' type="text"> 
                              <label>pay method </label>
                                   <select name="pay-methods" id="pay-methods">
                                        <option value="cash">Cash </option>
                                        <option value="Checks">Check </option>
                                        <option value="debit-card">Debit cards </option>
                                        <option value="credit-card">Credit cards </option>
                                        <option value="mobile-pay">Mobile payments </option>
                                        <option value="bank-transfert">Electronic bank transfers </option>
                                   </select>
                              <div class="buy-buttons">     
                                   <button onclick='facture()'> pay </button>
                                   <button> cancel </button>
                              </div>     
                         </div>
                         <div class="cart-content">
                              <table class="purchase">
                                   <tr>
                                        <th>model phones</th>
                                        <th>phones prix</th>
                                   </tr>
                                   `+ $phones +`
                                   <tr>
                                        <td>total</td>
                                        <td>`+$total+`</td>
                                   </tr>
                              </table>
                         </div>
               `;
          $cart.append($content);
     }
}

function send(){
     $('#result').text('email sended ...');
     $(".input").val('');
}

function facture(){
     var fullName = $('#full-name').val();
     var location = $('#location').val();
     var phone    = $('#phone').val();
     var payMethod = $('#pay-methods').find(':selected').val();

     client = {fullName, location, phone, payMethod};
     console.log(client);

     var $phones = "";
     each(cart, (phone) => {
          $phones += "<tr><td>" + phone.name + "</td> <td>" + phone.prix + "</td></tr>"
     });
     var $total = 0;
     each(cart, (phone) => $total += phone.prix);
     var $facture = (`<div class="facture">
                              <pre>
                              <div class="client-details">
                                   <span> client            : `+client.fullName+` </span> 
                                   <span> location          : `+client.location+` </span> 
                                   <span> phone number      : `+client.phone+` </span> 
                                   <span> pay method        : `+client.payMethod+` </span> 
                                   <span> total             : `+$total+` </span> 
                              </div>     
                              <table class="purchase">
                                   <tr>
                                        <th>model phones</th>
                                        <th>phones prix</th>
                                   </tr>
                                   `+ $phones + `
                                   <tr>
                                        <td>total</td>
                                        <td>`+ $total +`</td>
                                   </tr>
                              </table>
                              </pre>
                         </div>`);

     $('.cart-container').html('');                    
     $('.cart-container').append($facture);                    
}

