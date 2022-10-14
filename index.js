window.addEventListener("load",function(){
    const slider = this.document.querySelector(".slider-wrapper");
    const sliderMain = this.document.querySelector(".slider");
    const sliderItems = this.document.querySelectorAll(".slider1");
    const nextBtn = this.document.querySelector(".next")
    const preBtn = this.document.querySelector(".prev")
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidersLength = sliderItems.length;
    
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
});

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

setInterval(toggle, 2000);

function toggle() {
 $('.content').toggleClass('visible');   
}