//buy products
var cart = [];
var client = {};

// iphones products 
var iphoneProducts = [];
var iphone13 = {};
var iphone12 = {};
var iphone11 = {};
var iphone10 = {};

iphone13.id = 0;
iphone13.url = "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/apple-iphone-13-frandroid-2021.png";
iphone13.name = "iphone13";
iphone13.note = 9;
iphone13.prix = 859;
iphone13.stock = 30;
iphone13.details = "iphone 13 details";
iphoneProducts.push(iphone13);

iphone12.id = 1;
iphone12.url = "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/iphone-12-frandroid-2020.png";
iphone12.name = "iphone12";
iphone12.note = 9;
iphone12.prix = 799;
iphone12.stock = 30;
iphone12.details = "iphone 12 details";
iphoneProducts.push(iphone12);

iphone11.id = 2;
iphone11.url = "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png";
iphone11.name = "iphone11";
iphone11.note = 9;
iphone11.prix = 759;
iphone11.stock = 30;
iphone11.details = "iphone 11 details";
iphoneProducts.push(iphone11);

iphone10.id = 3;
iphone10.url = "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/iphone-x-final.png";
iphone10.name = "iphone10";
iphone10.note = 9;
iphone10.prix = 599;
iphone10.stock = 30;
iphone10.details = "iphone 10 details";
iphoneProducts.push(iphone10);
window.iphoneProducts;

// samsung products 
var samsungProducts = [];
var samsungS21 = {
     id: 0,
     url: "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/12/samsung-galaxy-s21-frandroid-2021-leak.png",
     name: "samsungS21",
     note: 9,
     prix: 699,
     stock: 45,
     details: "samsung details",
};
var samsungS10 = {
     id: 1,
     url: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-s10-2019-frandroid.png",
     name: "samsungS10",
     note: 9,
     prix: 499,
     stock: 55,
     details: "samsung details",
};
var samsungA52 = {
     id: 2,
     url: "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/08/samsung-galaxy-a52s-5g-frandroid-2021.png",
     name: "samsungA52",
     note: 8,
     prix: 399,
     stock: 25,
     details: "samsung details",
};
var samsungA12 = {
     id: 3,
     url: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/01/samsung-galaxy-a12-frandroid-2021.png",
     name: "samsungA12",
     note: 8,
     prix: 320,
     stock: 15,
     details: "samsung details",
};
samsungProducts.push(samsungS21);
samsungProducts.push(samsungS10);
samsungProducts.push(samsungA52);
samsungProducts.push(samsungA12);

window.samsungProducts;

// huawei products 
var huaweiProducts = [];
var huaweiP50 = {
     id: 0,
     url: "https://cdn-files.kimovil.com/default/0006/33/thumb_532239_default_big.jpeg",
     name: "huaweiP50",
     note: 9,
     prix: 520,
     stock: 15,
     details: "huawei details",
};
var huaweiP40 = {
     id: 1,
     url: "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/03/huawei-p40-pro-frandroid-2020.png",
     name: "huaweiP40",
     note: 9,
     prix: 450,
     stock: 15,
     details: "huawei details",
};
var huaweiP30 = {
     id: 2,
     url: "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-p30-2019-frandroid.png",
     name: "huaweiP30",
     note: 8,
     prix: 400,
     stock: 15,
     details: "huawei details",
};
var huaweiP20 = {
     id: 3,
     url: "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-p20.png",
     name: "huaweiP20",
     note: 9,
     prix: 320,
     stock: 15,
     details: "huawei details",
};
huaweiProducts.push(huaweiP50);
huaweiProducts.push(huaweiP40);
huaweiProducts.push(huaweiP30);
huaweiProducts.push(huaweiP20);

window.huaweiProducts;

// others product 

var othersProducts = [
     {
          "id": 1,
          "url": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/iphone-12-frandroid-2020.png",
          "name": "iphone12",
          "note": 9,
          "prix": 9,
          "stock": 30,
          "details": "iphone 12 details"
     },
     {
          "id": 2,
          "url": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png",
          "name": "iphone11",
          "note": 9,
          "prix": 9,
          "stock": 30,
          "details": "iphone 11 details"
     },
     {
          "id": 0,
          "url": "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/12/samsung-galaxy-s21-frandroid-2021-leak.png",
          "name": "samsungS21",
          "note": 9,
          "prix": 699,
          "stock": 45,
          "details": "samsung details"
     },
     {
          "id": 1,
          "url": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-s10-2019-frandroid.png",
          "name": "samsungS10",
          "note": 9,
          "prix": 499,
          "stock": 55,
          "details": "samsung details"
     },
     {
          "id": 3,
          "url": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/01/samsung-galaxy-a12-frandroid-2021.png",
          "name": "samsungA12",
          "note": 8,
          "prix": 320,
          "stock": 15,
          "details": "samsung details"
     }
];

window.othersProducts;

