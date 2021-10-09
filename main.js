$(document).ready(function(){
     $("#iphone").on('click',()=>renderProducts(iphoneProducts));
     $("#samsung").on('click', () => renderProducts(samsungProducts));
     $("#huawei").on('click', () => renderProducts(huaweiProducts));
     $("#others").on('click', () => renderProducts(othersProducts));

     $(".main").html('');
     $("#iphone").ready(renderProducts(iphoneProducts));
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
                    <button onclick=buy(` + product + `)> + cart</button>
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
