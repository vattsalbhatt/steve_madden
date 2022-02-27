document.querySelector("#check_delivery").addEventListener("click",info)
function info(event){
    document.querySelector("#days").textContent="Expected delivery on Sun, 23 Jan - Tue, 25 Jan"
}
var size=[5,6,7,8,9]
var x=0;
var arr=[];



document.querySelector(".pro_size").addEventListener("click",size_info)
function size_info(event){
    var a=document.querySelector("#size_show").textContent=size[0];
// console.log(a);
arr.push(a);

}

document.querySelector(".pro_size1").addEventListener("click",size_info1)
function size_info1(event){
    var b=document.querySelector("#size_show").textContent=size[1];
    
    console.log(b);
}
document.querySelector(".pro_size2").addEventListener("click",size_info2)
function size_info2(event){
    document.querySelector("#size_show").textContent=size[2];
}
document.querySelector(".pro_size3").addEventListener("click",size_info3)
function size_info3(event){
    document.querySelector("#size_show").textContent=size[3];
}
document.querySelector(".pro_size4").addEventListener("click",size_info4)
function size_info4(event){
    document.querySelector("#size_show").textContent=size[4];
    console.log(size_show);
}
console.log(x);
document.querySelector("#cart").addEventListener("click", addItem);
  var ProductList =JSON.parse(localStorage.getItem("ProductList")) || [];
  function addItem(event) {
    // var name = document.getElementById("product_name").value;

  }  
  console.log(arr[arr.length-1]);
  
  

  var cartlist =JSON.parse(localStorage.getItem("cartitems")) || [];
  console.log(cartlist);

var lastindex=cartlist.length-1;
console.log(cartlist[lastindex]);
// console.log(lastindex);

  var name=document.querySelector("#product_name").textContent=cartlist[lastindex].name 
  console.log(name);
  var mrp=document.querySelector(".mrp").textContent=cartlist[lastindex].Mrp 
  console.log(mrp);

  var price=document.querySelector(".price").textContent=cartlist[lastindex].price 
  console.log(price);
  var color=document.querySelector("#product_color").textContent=cartlist[lastindex].color 
  console.log(color);
  


  var image=document.getElementById("middel_img").src=cartlist[lastindex].url
  var image1=document.getElementById("middel_img1").src=cartlist[lastindex].url_2
  var image2=document.getElementById("middel_img2").src=cartlist[lastindex].url_3
  var image3=document.getElementById("middel_img3").src=cartlist[lastindex].url_4
  
  var side_image=document.getElementById("side_img").src=cartlist[lastindex].url
  var side_image1=document.getElementById("side_img1").src=cartlist[lastindex].url_2
  var side_image2=document.getElementById("side_img2").src=cartlist[lastindex].url_3
  var side_image3=document.getElementById("side_img3").src=cartlist[lastindex].url_4

  
//product Quantity local storage
var count = localStorage.getItem("counter")||0 // initially when page refreshes

  document.querySelector("#disable").innerHTML = count;
  document.getElementById("inc").addEventListener("click", incFun);

  function incFun() {
    console.log("inside inc");
    count++;
    localStorage.setItem("counter", count);
    document.querySelector("#disable").innerHTML = count;
  }

    document.getElementById("dec").addEventListener("click", decFun);

  function decFun(event) {
    console.log("inside dec");
    count--;
    localStorage.setItem("counter", count);
    document.querySelector("#disable").textContent = count;
  }

  console.log(1 || 0);

  // or is nothing but addition

  console.log(false || true);

  console.log(localStorage.getItem("counter") || 0);

//local Storage

var cartItems = {};
var items = []
cartItems.items = items;
var item = {
"name": name,
"price": price,
"size":arr.length



}
localStorage.setItem('productsInCart', JSON.stringify(item));

cartItems.items.push(item);


document.querySelector("#product_details").addEventListener("click",infom)
function infom(event){
    document.querySelector("#details").textContent="Groove in style in these black color denim material casual shoes. Perfect for everyday occasions, this pair of black casual shoes will enhance your style and take it to a new level. It features a slip-on fastening and a high-quality denim canvas material which makes it durable and easy to maintain, and the sole is of PVC. It can be worn with a wide variety of clothes; thus, making it all the more desirable."
}
document.querySelector("#shipping_return").addEventListener("click",infom1)
function infom1(event){
    document.querySelector("#return").textContent="RETURNS : Steve Madden follows a '30 day no questions' asked return policy Every return should contain the original packaging. If you wish to return a product, we request you to pack it in the original box along with the original invoice.FREE SHIPPING : Most items are available to ship in 1 - 2 business days unless otherwise noted For further details Click here to view our full Shipping Policy .."
}

document.querySelector("#cart").addEventListener("click",function(){
  window.location.href="CartIn.html"
})