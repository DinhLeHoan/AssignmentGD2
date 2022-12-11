window.addEventListener("load",function(){
    var slider = this.document.querySelector(".slider-wrapper");
    var sliderMain = this.document.querySelector(".slider");
    var sliderItems = this.document.querySelectorAll(".slider1");
    var nextBtn = this.document.querySelector(".next")
    var preBtn = this.document.querySelector(".prev")
    var sliderItemWidth = sliderItems[0].offsetWidth;
    var slidersLength = sliderItems.length;
    
    let positionX = 0;
    let index = 1;

    function index_slider(index){
      document.getElementsByClassName("index_slider1")[0].style.backgroundColor ='rgba(255, 255, 255, 0.3)';
      document.getElementsByClassName("index_slider2")[0].style.backgroundColor ='rgba(255, 255, 255, 0.3)';
      document.getElementsByClassName("index_slider3")[0].style.backgroundColor ='rgba(255, 255, 255, 0.3)';
      
      document.getElementsByClassName("index_slider"+index)[0].style.backgroundColor ='#fff';

    }

    var click_index1 = document.getElementsByClassName("index_slider1")[0];
    var click_index2 = document.getElementsByClassName("index_slider2")[0];
    var click_index3 = document.getElementsByClassName("index_slider3")[0];

    

    nextBtn.addEventListener("click",function(){
        changeSlide(1);
    })

    preBtn.addEventListener("click",function(){
        changeSlide(-1);
    })
    index_slider(index);
    function changeSlide(direction){
        if(direction == 1){
            
            if(index == 2){toggleVisibility('slogan2')}
            else if(index == 3){toggleVisibility('slogan3')}
            else{toggleVisibility('slogan1')};
            if(index >= slidersLength){
                console.log(positionX);
                positionX += 2*sliderItemWidth;
                console.log(positionX);
                sliderMain.style = `transform: translateX(${positionX}px)`;
                positionX =0;
                index=1;
            }
            else{
                console.log(positionX);
                positionX -= sliderItemWidth;
                console.log(positionX);
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index++;
            }
            index_slider(index)
            console.log("next slide")
          
        }else if(direction == - 1)
        {   
            if(index == 2){toggleVisibility('slogan2')}
            else if(index == 3){toggleVisibility('slogan3')}
            else{toggleVisibility('slogan1')};
            if(index < 2){
                positionX -=  2*sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index = 3;
            }
            else{
                positionX += sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index--;

            }
            
            index_slider(index);
            console.log("prev slide")
        }
       
        click_index1.addEventListener("click",function(){
          
          if(index==2){
            changeSlide(-1);
          }
          if(index==3){
            changeSlide(1);
          }
      })
      click_index2.addEventListener("click",function(){
          
        if(index==1){
          changeSlide(1);
          
        }
        if(index==3){
          changeSlide(1);
          changeSlide(1);

        }
    }) 
    click_index3.addEventListener("click",function(){
          
      if(index==2){
        changeSlide(1);
      }
      if(index==1){
        changeSlide(-1);
      }
  })

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



  var quotes = document.getElementsByClassName("content");
  function quotes_hay(){

          quotes[0].classList.toggle("visible")
        setTimeout(() => {
          quotes[0].classList.toggle("visible")
          
          }, 2000);
        setTimeout(() => {
          quotes[1].classList.toggle("visible")
            
          }, 2000);
          setTimeout(() => {
            quotes[1].classList.toggle("visible")
              
            }, 4000);
    
  }
  quotes_hay();
  setInterval(quotes_hay,4000)
//''''''''''''''''''''

// shoping
function shoping(){

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
  
  

}
  shoping() 

});



function checkMyCart(){
  // appear and disappear number above cart
  var number_above_cart = document.getElementById("amount_in_your_cart");
  if(number_above_cart.innerHTML !="0"){
    number_above_cart.classList.add("displayBlock")
  }
  else{
    number_above_cart.classList.remove("displayBlock")
  }
}

setInterval(checkMyCart,1000)

var sumMoney = 0;
var product_1_amount = 0,
    product_2_amount = 0,
    product_3_amount = 0,
    product_4_amount = 0,
    product_5_amount = 0,
    product_6_amount = 0,
    product_7_amount = 0;
    product_all_amount = 0;





function print_pay(sumMoney){
  document.getElementById("tong").innerHTML = sumMoney/1;
  document.getElementById("pay_sum").innerHTML = sumMoney/1;

}

function buying(price){
  var number_above_cart = document.getElementById("amount_in_your_cart");

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
    product_all_amount++;
    number_above_cart.innerHTML = product_all_amount;
    product.classList.add("displayBlock");

  }

  function sum_your_money(price){
    sumMoney = sumMoney/1 + price/1;
    return sumMoney;
  }

  if(price==1000){
    sum_your_money(price);
    appearProInCart(pro1);
    product_1_amount++;
    print_pay(sumMoney);
    price_text_1.innerHTML ="Nhìn về xa xăm - 1000$ - SL : " +product_1_amount;
    setCookie("product_1_amount_C", product_1_amount, 1);
  }
  else if(price==2000){
    sum_your_money(price)
    appearProInCart(pro2);
    product_2_amount++;
    print_pay(sumMoney);
    price_text_2.innerHTML ="Cô gái Galalin - 2000$ - SL : " +product_2_amount;
    setCookie("product_2_amount_C", product_2_amount, 1);
    
  }
  else if(price==3000){
    sum_your_money(price)
    appearProInCart(pro3);
    product_3_amount++;
    print_pay(sumMoney);
    price_text_3.innerHTML ="Thanh âm tôi - 3000$ - SL : " +product_3_amount;
    setCookie("product_3_amount_C", product_3_amount, 1);
    
  }
  else if(price==4000){
    sum_your_money(price)
    appearProInCart(pro4);
    product_4_amount++;
    print_pay(sumMoney);
    price_text_4.innerHTML ="Hanoi morning - 4000$ - SL : " +product_4_amount;
    setCookie("product_4_amount_C", product_4_amount, 1);
    
  }
  else if(price==5000){
    sum_your_money(price)
    appearProInCart(pro5);
    product_5_amount++;
    print_pay(sumMoney);
    price_text_5.innerHTML ="My house - 5000$ - SL : " +product_5_amount;
    setCookie("product_5_amount_C", product_5_amount, 1);
  
  }
  else if(price==6000){
    sum_your_money(price)
    appearProInCart(pro6);
    product_6_amount++;
    print_pay(sumMoney);
    price_text_6.innerHTML ="Hole in goal - 6000$ - SL : " +product_6_amount;
    setCookie("product_6_amount_C", product_6_amount, 1);
  
  }
  else if(price==7000){
    sum_your_money(price)
    appearProInCart(pro7);
    product_7_amount++;
    print_pay(sumMoney);
    price_text_7.innerHTML ="Chiều chiều - 7000$ - SL : " +product_7_amount;
    setCookie("product_7_amount_C", product_7_amount, 1);
  
  }

}

function remove_pro_out(price){
var number_above_cart = document.getElementById("amount_in_your_cart");

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
    product_all_amount = product_all_amount - product_1_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_1_amount = 0; 
    setCookie("product_1_amount_C", product_1_amount, 1);

  }
  else if(price==2000){
    removeProInCart(pro2);
    print_pay( minus_your_money(price*product_2_amount));   
    product_all_amount = product_all_amount - product_2_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_2_amount = 0; 
    setCookie("product_2_amount_C", product_2_amount, 1);

  }
  else if(price==3000){
    removeProInCart(pro3);
    print_pay( minus_your_money(price*product_3_amount)); 
    product_all_amount = product_all_amount - product_3_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_3_amount = 0; 
    setCookie("product_3_amount_C", product_3_amount, 1);

  }
  else if(price==4000){
    removeProInCart(pro4);
    print_pay( minus_your_money(price*product_4_amount)); 
    product_all_amount = product_all_amount - product_4_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_4_amount = 0; 
    setCookie("product_4_amount_C", product_4_amount, 1);

  }
  else if(price==5000){
    removeProInCart(pro5);
    print_pay( minus_your_money(price*product_5_amount)); 
    product_all_amount = product_all_amount - product_5_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_5_amount = 0; 
    setCookie("product_5_amount_C", product_5_amount, 1);

  }
  else if(price==6000){
    removeProInCart(pro6);
    print_pay( minus_your_money(price*product_6_amount)); 
    product_all_amount = product_all_amount - product_6_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_6_amount = 0; 
    setCookie("product_6_amount_C", product_6_amount, 1);

  }
  else if(price==7000){
    removeProInCart(pro7);
    print_pay( minus_your_money(price*product_7_amount)); 
    product_all_amount = product_all_amount - product_7_amount;
    number_above_cart.innerHTML = product_all_amount;
    product_7_amount = 0; 
    setCookie("product_7_amount_C", product_7_amount, 1);

  }

}

function appearInfor(get_pro_infor){
  var products = document.getElementById("des_products_contain");

  var ver_1 = document.getElementById("ver_1")
  var ver_2 = document.getElementById("ver_2")
  var ver_3 = document.getElementById("ver_3")
  var ver_4 = document.getElementById("ver_4")
  var ver_5 = document.getElementById("ver_5")
  var ver_6 = document.getElementById("ver_6")
  var ver_7 = document.getElementById("ver_7")

  var close1 = document.getElementsByClassName("js-modal-close")[0];
  var close2 = document.getElementsByClassName("js-modal-close")[1];
  var close3 = document.getElementsByClassName("js-modal-close")[2];
  var close4 = document.getElementsByClassName("js-modal-close")[3];
  var close5 = document.getElementsByClassName("js-modal-close")[4];
  var close6 = document.getElementsByClassName("js-modal-close")[5];
  var close7 = document.getElementsByClassName("js-modal-close")[6];

  products.classList.add('appear');

  function appear(ver_want){
    ver_want.classList.add("hienRa");
  }
  
  if(get_pro_infor==1){
    appear(ver_1);
  }
  else if(get_pro_infor==2){
    appear(ver_2);
  }
  else if(get_pro_infor==3){
    appear(ver_3);
  }
  else if(get_pro_infor==4){
    appear(ver_4);
  }
  else if(get_pro_infor==5){
    appear(ver_5);
  }
  else if(get_pro_infor==6){
    appear(ver_6);
  }
  else if(get_pro_infor==7){
    appear(ver_7);
  }

  function closeInfor(){
    products.classList.remove("appear");
    ver_1.classList.remove("hienRa");
    ver_2.classList.remove("hienRa");
    ver_3.classList.remove("hienRa");
    ver_4.classList.remove("hienRa");
    ver_5.classList.remove("hienRa");
    ver_6.classList.remove("hienRa");
    ver_7.classList.remove("hienRa");

  }

  close1.addEventListener("click",closeInfor);
  close2.addEventListener("click",closeInfor);
  close3.addEventListener("click",closeInfor);
  close4.addEventListener("click",closeInfor);
  close5.addEventListener("click",closeInfor);
  close6.addEventListener("click",closeInfor);
  close7.addEventListener("click",closeInfor);


}

function minus_more_pro(price){
  var number_above_cart = document.getElementById("amount_in_your_cart");
  

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

  
  function removeProInCart(product){
    product.classList.remove("displayBlock");
  }

  function minus_your_money(price){
    sumMoney = sumMoney/1 - price/1;
    return sumMoney;
  }
  if(price==1000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_1_amount--;
    if(product_1_amount == 0){
      removeProInCart(pro1)
    }
    price_text_1.innerHTML ="Nhìn về xa xăm - 1000$ - SL : " +product_1_amount;
    setCookie("product_1_amount_C", product_1_amount, 1);
  
  }
  else if(price==2000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_2_amount--;
    if(product_2_amount == 0){
      removeProInCart(pro2)
    }
    price_text_2.innerHTML ="Cô gái Galalin - 2000$ - SL : " +product_2_amount;
    setCookie("product_2_amount_C", product_2_amount, 1);
  
  }
  else if(price==3000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_3_amount--;
    if(product_3_amount == 0){
      removeProInCart(pro3)
    }
    price_text_3.innerHTML ="Thanh âm tôi - 3000$ - SL : " +product_3_amount;
    setCookie("product_3_amount_C", product_3_amount, 1);
  
  }
  else if(price==4000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_4_amount--;
    if(product_4_amount == 0){
      removeProInCart(pro4)
    }
    price_text_4.innerHTML ="Hanoi morning - 4000$ - SL : " +product_4_amount;
    setCookie("product_4_amount_C", product_4_amount, 1);
  
  }
  else if(price==5000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_5_amount--;
    if(product_5_amount == 0){
      removeProInCart(pro5)
    }
    price_text_5.innerHTML ="My house - 5000$ - SL : " +product_5_amount;
    setCookie("product_5_amount_C", product_5_amount, 1);
  
  }
  else if(price==6000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_6_amount--;
    if(product_6_amount == 0){
      removeProInCart(pro6)
    }
    price_text_6.innerHTML ="Hole in goal - 6000$ - SL : " +product_6_amount;
    setCookie("product_6_amount_C", product_6_amount, 1);
  
  }
  else if(price==7000){
    minus_your_money(price);
    print_pay(sumMoney);
    product_all_amount--;
    number_above_cart.innerHTML = product_all_amount;
    product_7_amount--;
    if(product_7_amount == 0){
      removeProInCart(pro7)
    }
    price_text_7.innerHTML ="Chiều chiều - 7000$ - SL : " +product_7_amount;
  }
  setCookie("product_7_amount_C", product_7_amount, 1);

}

function hide_error(){
  document.getElementsByClassName("span_form")[0].style.display = 'none';
  document.getElementsByClassName("span_form")[1].style.display = 'none';
  document.getElementsByClassName("span_form")[2].style.display = 'none';

}

  function KiemTra(){

        var ten = document.getElementById('ten');
        if(ten.value == ""){
          hide_error()
          document.getElementsByClassName("span_form")[0].style.display = 'block';
          ten.focus();
          return false;
        }

        var gmail = document.getElementById('gmail')
        if(gmail.value ==""){
          hide_error()
          document.getElementsByClassName("span_form")[1].style.display = 'block';
          document.getElementsByClassName("span_form")[1].innerHTML = 'Mail không được bỏ trống';
          gmail.focus();
          return false;

        }
        var email_patterm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!gmail.value.match(email_patterm)){
          hide_error()
          document.getElementsByClassName("span_form")[1].style.display = 'block';
          document.getElementsByClassName("span_form")[1].style.width = '400px';
          document.getElementsByClassName("span_form")[1].innerHTML = 'Mail đã nhập nhưng sai định dạng email.'
          gmail.focus();
          return false;
        }

        var mess = document.getElementById('mess')
        // console.log(mess.value);
        if(mess.value == ""){
          hide_error()
          document.getElementsByClassName("span_form")[2].style.display = 'block';
          mess.focus();
          return false;

        }

        
        document.getElementById("succes_sent").style.display = "block";
       
        return true;
  }



  var countDownDate = new Date();
	countDownDate.setMinutes(countDownDate.getMinutes() + 1);
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("clock_count").innerHTML =  seconds + " Giây";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock_count").innerHTML = "Hết hạn";
    document.getElementById("clock_count").style.animation ="none";
    document.getElementById("clock_count").style.fontSize = '15px';
    document.getElementsByClassName("tilte_of_sale")[0].style.display ="none";
    print_pay(sumMoney)
    console.log(sumMoney);
  }
  if(distance > 0){
    print_pay(sumMoney/2)
  }
}, 1000);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') {
      c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
  }
}
return "";
}


function checkCookie() {
  var username=getCookie("username");
  var product_1_amount_C = getCookie("product_1_amount_C")
  var product_2_amount_C = getCookie("product_2_amount_C")
  var product_3_amount_C = getCookie("product_3_amount_C")
  var product_4_amount_C = getCookie("product_4_amount_C")
  var product_5_amount_C = getCookie("product_5_amount_C")
  var product_6_amount_C = getCookie("product_6_amount_C")
  var product_7_amount_C = getCookie("product_7_amount_C")

  if (username!="") {
    // alert("Tôi nhớ bạn rồi " + username+" à, cookie này tồn tại trong 1 ngày");
  } else {
    username = prompt("Xin chào bạn đã xâm nhập vào web tôi, xin để lại quý danh:", "Nhập tên");
    alert("reload trang để thấy điều kì diệu.")
    if (username != "" && username != null) {
        setCookie("username", username, 1);
    }
  }
  
  if(product_1_amount_C!=0){
    for(let i = 0; i< product_1_amount_C;i++){
      buying(1000);
    }
  }
  if(product_2_amount_C!=0){
    for(let i = 0; i< product_2_amount_C;i++){
      buying(2000);
    }
  }
  if(product_3_amount_C!=0){
    for(let i = 0; i< product_3_amount_C;i++){
      buying(3000);
    }
  } if(product_4_amount_C!=0){
    for(let i = 0; i< product_4_amount_C;i++){
      buying(4000);
    }
  } if(product_5_amount_C!=0){
    for(let i = 0; i< product_5_amount_C;i++){
      buying(5000);
    }
  }
  if(product_6_amount_C!=0){
    for(let i = 0; i< product_6_amount_C;i++){
      buying(6000);
    }
  }
  if(product_7_amount_C!=0){
    for(let i = 0; i< product_7_amount_C;i++){
      buying(7000);
    }
  }
}

function close_payment()
 { document.getElementById("payment").classList.remove("appearent");
}

function payment(){
  // var payContain = document.getElementById("payment_cart");
  document.getElementById("payment").classList.add("appearent");
  document.getElementById("cart_contain").classList.remove("appearent");

}

function hidePay(){
  document.getElementsByClassName("span_form_payment")[0].style.display = 'none';
  document.getElementsByClassName("span_form_payment")[1].style.display = 'none';
  document.getElementsByClassName("span_form_payment")[2].style.display = 'none';
  document.getElementsByClassName("span_form_payment")[3].style.display = 'none';


}

function check_payment(){

  let name_pay = document.getElementById("form_payment_name");

  if(name_pay.value ==""){
    hidePay();
    document.getElementsByClassName("span_form_payment")[0].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[0].style.width = '150px';
    name_pay.focus();
    return false;
  }
  let gmail_pay = document.getElementById("form_payment_gmail");
  if(gmail_pay.value ==""){
    hidePay();
    document.getElementsByClassName("span_form_payment")[1].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[1].style.width = '150px';
    document.getElementsByClassName("span_form_payment")[1].innerHTML = 'Nhập gmail';
    gmail_pay.focus();
    
    return false;
  }
  var email_patterm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!gmail_pay.value.match(email_patterm)){
    hidePay();
    document.getElementsByClassName("span_form_payment")[1].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[1].style.width = '190px';
    document.getElementsByClassName("span_form_payment")[1].innerHTML = 'Sai định dạng mail';
    gmail_pay.focus();
    return false;
  }
  let address_pay = document.getElementById("form_payment_address");
  if(address_pay.value ==""){
    hidePay();
    document.getElementsByClassName("span_form_payment")[2].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[2].style.width = '150px';
    document.getElementsByClassName("span_form_payment")[2].innerHTML = 'Nhập địa chỉ';
    address_pay.focus();
    
    return false;
  }
  let phone_pay = document.getElementById("form_payment_phone");
  if(phone_pay.value ==""){
    hidePay();
    document.getElementsByClassName("span_form_payment")[3].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[3].style.width = '200px';
    document.getElementsByClassName("span_form_payment")[3].innerHTML = 'Nhập số điện thoại';
    phone_pay.focus();
    
    return false;
  }
  if(phone_pay.value.length >12|phone_pay.value.length <10){
    hidePay();
    document.getElementsByClassName("span_form_payment")[3].style.display = 'block';
    document.getElementsByClassName("span_form_payment")[3].style.width = '200px';
    document.getElementsByClassName("span_form_payment")[3].innerHTML = 'Sai định dạng số đt';
    phone_pay.focus();
    
    return false;
  }
  setCookie("product_1_amount_C", 0, 1);
  setCookie("product_2_amount_C", 0, 1);
  setCookie("product_3_amount_C", 0, 1);
  setCookie("product_4_amount_C", 0, 1);
  setCookie("product_5_amount_C", 0, 1);
  setCookie("product_6_amount_C", 0, 1);
  setCookie("product_7_amount_C", 0, 1);

}
