window.addEventListener("load",function(){
    var slider = this.document.querySelector(".slider-wrapper");
    var sliderMain = this.document.querySelector(".slider");
    var sliderItems = this.document.querySelectorAll(".slider1");
    var nextBtn = this.document.querySelector(".next")
    var preBtn = this.document.querySelector(".prev")
    var sliderItemWidth = sliderItems[0].offsetWidth;
    var slidersLength = sliderItems.length;
    
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener("click",function(){
        changeSlide(1);
    })

    preBtn.addEventListener("click",function(){
        changeSlide(-1);
    })

    function changeSlide(direction){
        if(direction == 1){
            index++;
            if(index == 1){toggleVisibility('slogan2')}
            else if(index == 2){toggleVisibility('slogan3')}
            else{toggleVisibility('slogan1')};
            if(index >= slidersLength){
                console.log(positionX);
                positionX += 2*sliderItemWidth;
                console.log(positionX);
                sliderMain.style = `transform: translateX(${positionX}px)`;
                positionX =0;
                index=0;
            }
            else{
                console.log(positionX);
                positionX -= sliderItemWidth;
                console.log(positionX);
                sliderMain.style = `transform: translateX(${positionX}px)`;
            }
            
            console.log("next slide")
          
        }else if(direction == - 1)
        {   
            index--;
            if(index == 1){toggleVisibility('slogan2')}
            else if(index == 2){toggleVisibility('slogan3')}
            else{toggleVisibility('slogan1')};
            if(index < 0){
                positionX -=  2*sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index = 2;
            }
            else{
                positionX += sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
            }
            
           
            console.log("prev slide")
        }
    }


// change text

var divs = ["slogan1", "slogan2", "slogan3"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// maintain...........
setInterval(toggle, 2000);

function toggle() {
  var quote = document.getElementsByClassName("content");
      quote[0].classList.add("visible");
      // setTimeout(quote[0].classList.remove("visible"),1900);
      // setTimeout(40,quote[1].classList.add("visible"))
      // setTimeout(1000,quote[1].classList.remove("visible"))
}
//''''''''''''''''''''

// shoping
function shoping(){

  var products = document.getElementById("des_products_contain")

  var shop = document.getElementById("shop")
  var productsCart = document.getElementById("cart_contain")
  var closeCart = document.querySelector(".as-modal-close")
  
  

  function appearCart(){
    productsCart.classList.add('appearent');
  }
  function closeCartMenu(){
    productsCart.classList.remove("appearent");
  }

  shop.addEventListener("click",appearCart);
  
  closeCart.addEventListener("click",closeCartMenu);

  // cart part---------------------------------------
  var carts = document.querySelectorAll('.your_cart');

  for(var cart of carts){
    cart.addEventListener("click",appearCart);
  }
  
  var infors = document.querySelectorAll('.btn2');
  var close = document.querySelector(".js-modal-close")
  function appearInfor(){
    products.classList.add('appear');
  }

  function closeInfor(){
    products.classList.remove("appear");
  }
  for(var infor of infors){
    infor.addEventListener("click",appearInfor);
  }
  close.addEventListener("click",closeInfor);

}
  shoping() 

});



var sumMoney = 0;
var product_1_amount = 0,
    product_2_amount = 0,
    product_3_amount = 0,
    product_4_amount = 0,
    product_5_amount = 0,
    product_6_amount = 0,
    product_7_amount = 0;


function print_pay(sumMoney){
  document.getElementById("tong").innerHTML = sumMoney/1;
}

function buying(price){
  var pro1 = document.getElementById("product_1")
  var pro2 = document.getElementById("product_2")
  var pro3 = document.getElementById("product_3")
  var pro4 = document.getElementById("product_4")
  var pro5 = document.getElementById("product_5")
  var pro6 = document.getElementById("product_6")
  var pro7 = document.getElementById("product_7")
  
  var price_text_1 = pro1.getElementsByTagName("h4")[0];
  var price_text_2 = pro2.getElementsByTagName("h4")[0];
  var price_text_3 = pro3.getElementsByTagName("h4")[0];
  var price_text_4 = pro4.getElementsByTagName("h4")[0];
  var price_text_5 = pro5.getElementsByTagName("h4")[0];
  var price_text_6 = pro6.getElementsByTagName("h4")[0];
  var price_text_7 = pro7.getElementsByTagName("h4")[0];


  function appearProInCart(product){
    product.classList.add("displayBlock");
  }

  function sum_your_money(price){
    sumMoney = sumMoney/1 + price/1;
    return sumMoney;
  }

  if(price==1000){
    sum_your_money(price)
    appearProInCart(pro1);
    product_1_amount++;
    print_pay(sumMoney);
    price_text_1.innerHTML ="Nhìn về xa xăm - 1000$ - SL : " +product_1_amount;
  }
  else if(price==2000){
    sum_your_money(price)
    appearProInCart(pro2);
    product_2_amount++;
    print_pay(sumMoney);
    price_text_2.innerHTML ="Cô gái Galalin - 2000$ - SL : " +product_2_amount;
    
  }
  else if(price==3000){
    sum_your_money(price)
    appearProInCart(pro3);
    product_3_amount++;
    print_pay(sumMoney);
    price_text_3.innerHTML ="Thanh âm tôi - 3000$ - SL : " +product_3_amount;
    
  }
  else if(price==4000){
    sum_your_money(price)
    appearProInCart(pro4);
    product_4_amount++;
    print_pay(sumMoney);
    price_text_4.innerHTML ="Hanoi morning - 4000$ - SL : " +product_4_amount;
    
  }
  else if(price==5000){
    sum_your_money(price)
    appearProInCart(pro5);
    product_5_amount++;
    print_pay(sumMoney);
    price_text_5.innerHTML ="My house - 5000$ - SL : " +product_5_amount;
  }
  else if(price==6000){
    sum_your_money(price)
    appearProInCart(pro6);
    product_6_amount++;
    print_pay(sumMoney);
    price_text_6.innerHTML ="Hole in goal - 6000$ - SL : " +product_6_amount;
  }
  else if(price==7000){
    sum_your_money(price)
    appearProInCart(pro7);
    product_7_amount++;
    print_pay(sumMoney);
    price_text_7.innerHTML ="Chiều chiều - 7000$ - SL : " +product_7_amount;
  }
  
}

// var remove_Pro_1 =  document.getElementById("product_1").lastElementChild.getElementsByClassName("close-pro"); 
// var remove_Pro_2 =  document.getElementById("product_3").lastElementChild.getElementsByClassName("close-pro");  
// var remove_Pro_3 =  document.getElementById("product_3").lastElementChild.getElementsByClassName("close-pro");
// var remove_Pro_4 =  document.getElementById("product_4").lastElementChild.getElementsByClassName("close-pro");
// var remove_Pro_5 =  document.getElementById("product_5").lastElementChild.getElementsByClassName("close-pro");
// var remove_Pro_6 =  document.getElementById("product_6").lastElementChild.getElementsByClassName("close-pro");
// var remove_Pro_7 =  document.getElementById("product_7").lastElementChild.getElementsByClassName("close-pro");

function remove_pro_out(price){

var pro1 = document.getElementById("product_1")
var pro2 = document.getElementById("product_2")
var pro3 = document.getElementById("product_3")
var pro4 = document.getElementById("product_4")
var pro5 = document.getElementById("product_5")
var pro6 = document.getElementById("product_6")
var pro7 = document.getElementById("product_7")

function removeProInCart(product){
  product.classList.remove("displayBlock");
}

function minus_your_money(price){
  sumMoney = sumMoney/1 - price/1;
  return sumMoney;
}
 
  if(price==1000){
    removeProInCart(pro1);
    print_pay( minus_your_money(price*product_1_amount));
    product_1_amount = 0; 
  }
  else if(price==2000){
    removeProInCart(pro2);
    print_pay( minus_your_money(price*product_2_amount));   
    product_2_amount = 0; 

  }
  else if(price==3000){
    removeProInCart(pro3);
    print_pay( minus_your_money(price*product_3_amount)); 
    product_3_amount = 0; 

  }
  else if(price==4000){
    removeProInCart(pro4);
    print_pay( minus_your_money(price*product_4_amount)); 
    product_4_amount = 0; 

  }
  else if(price==5000){
    removeProInCart(pro5);
    print_pay( minus_your_money(price*product_5_amount)); 
    product_5_amount = 0; 

  }
  else if(price==6000){
    removeProInCart(pro6);
    print_pay( minus_your_money(price*product_6_amount)); 
    product_6_amount = 0; 

  }
  else if(price==7000){
    removeProInCart(pro7);
    print_pay( minus_your_money(price*product_7_amount)); 
    product_7_amount = 0; 

  }
}

