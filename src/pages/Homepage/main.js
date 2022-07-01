// Iraklis slider
const linez = document.querySelectorAll(".slide-buttons button");
linez.forEach(linez => {
	linez.addEventListener("click",() =>{
		document.querySelector(".active").classList.remove("active");
		linez.classList.add("active");
	})
})

// var currentslideNumb = 1;

// function moving(slideNumb){

//    if (currentslideNumb == slideNumb){
//       return;
//    }
//    else if {

//    }


// }




// // ------------------ Main/Helper Functions/Variables ------------------ Ioanes slider
var whiteList = [3]
var slideIndex = 0;
var old_slideIndex = 1;
var setAutoMoveTime;
var isAdded = true;

var autoButton = document.getElementById("autoButton");
var pausePos = "<i class=\"fa-solid fa-pause\"></i>";
var playPos = "<i class=\"fa-solid fa-play\"></i>";

var isAutoOff = function() {
   return autoButton.innerHTML == playPos ? true : false;
}

var isAutoOn = function() {
   return autoButton.innerHTML == pausePos ? true : false;
}

var animationPos = document.getElementsByClassName('line_design_2');
var animationPlay = function() {
   for(var i = 0; i < animationPos.length; i++){
      animationPos[i].style.animationPlayState = "running";
   }
}
var animationStop = function() {
   for(var i = 0; i < animationPos.length; i++){
      animationPos[i].style.animationPlayState = "paused";
   }
}

// ------------------ Auto Button Changer ------------------


function autoButtonAnimation() {
   if (isAutoOff()) {
      autoButton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
   } else {
      autoButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
   }
}


// // ------------------ Slide Change Functions ------------------


autoMove();
function autoMove() {
   if (isAutoOn()) {
      animationPlay();
      if (slideIndex < old_slideIndex) {
         slideIndex += 1;
      }
      chackOnWBM(slideIndex);
      showSlides(slideIndex);
      lineAnimation(slideIndex, true);
      old_slideIndex = slideIndex;
      slideIndex += 1;
      isAdded = true;
      setAutoMoveTime = setTimeout(autoMove, 8000);
   }

   if (isAutoOff()) {
      animationStop();
      lineAnimation(old_slideIndex, false);
      clearInterval(setAutoMoveTime);
      slideIndex -= 1;
   }
}

function plusSlides(n) {
   clearInterval(setAutoMoveTime);

   if (isAdded) {
      slideIndex -= 1;
      isAdded = false;
   }
   slideIndex += n;
   chackOnWBM(slideIndex);
   showSlides(slideIndex);

   if (isAutoOn()) {
      lineAnimation(old_slideIndex, false);
      lineAnimation(slideIndex);
   
      old_slideIndex = slideIndex;
      autoMove();
   }
}

function currentSlide(n) {
   slideIndex = n

   chackOnWBM(n);
   showSlides(slideIndex);
   lineAnimation(slideIndex);
   lineAnimation(old_slideIndex, false);
   clearInterval(setAutoMoveTime);
   setTimeout(autoMove, 0);

   old_slideIndex = slideIndex;
}

function showSlides(n) {
   let slides = document.getElementsByClassName("mySlides");
   let line_designs = document.getElementsByClassName("line_design");

   if (n > slides.length) {slideIndex = 1}

   if (n < 1) {slideIndex = slides.length}
   
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   
   for (i = 0; i < line_designs.length; i++) {
      line_designs[i].className = line_designs[i].className.replace(" activen", "");
   }

   slides[slideIndex-1].style.display = "block";
   line_designs[slideIndex-1].className += " activen";
}

// // ------------------ Clock ------------------
var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")

var clock = setInterval(function() {
   var now = new Date().getTime();
   var countDownDate = new Date("Jun 7, 2022 16:10:00").getTime();

   var distance = countDownDate - now;

   var d = Math.floor(distance / (1000 * 60 * 60 * 24));
   var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var s = Math.floor((distance % (1000 * 60)) / 1000);

   days.innerHTML = d < 10 ? "0" + d : d;
   hours.innerHTML = h < 10 ? "0" + h : h;
   minutes.innerHTML = m < 10 ? "0" + m : m;
   seconds.innerHTML = s < 10 ? "0" + s : s;

   if (distance < 0) {
      days.innerHTML = "00";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
   }
}, 1010);

// // ------------------ White Mode ------------------
function chackOnWBM (n) {
   if (whiteList.indexOf(n) > -1) {
      whiteBlackMode("white");
   } else {
      whiteBlackMode("black");
   }
}

function whiteBlackMode(BWcolor) {
   var css = '.line:hover {color: ' + BWcolor + ';}';
   var style = document.createElement('style');

   if (style.styleSheet) {
      style.styleSheet.cssText = css;
   } else {
      style.appendChild(document.createTextNode(css));
   }
   
   document.getElementsByTagName('head')[0].appendChild(style);
   autoButton.style.color = BWcolor;
   var elements = document.getElementsByClassName('line_design');
   for(var i = 0; i < elements.length; i++){
      elements[i].style.setProperty("--color", BWcolor);
   }
}

// // ------------------ Line Animation ------------------

function lineAnimation(n, b = true) {
   document.getElementById("b" + n).innerHTML = "<div class=\"line_design_2\">";

   if (b == false) {
      document.getElementById("b" + n).innerHTML = "";
   }
}

// ----------------------------------------------------











//ioanes filter
(function() {
   
    let products = document.querySelector('.items');
    let product = Array.from(products.children);
 
    function Filter() {
       let types = document.querySelector('.prd_types').children;
 
       for(let i of product) {
          const name = i.querySelector('strong');
          const x = name.textContent;
          i.setAttribute("data-category", x);
       }
 
       this.run = function() {
          for(let m = 0; m < types.length; m++) {
             types[m].onclick = function () {
                this.classList.add('active');
                const displayProducts = this.getAttribute('data-filter');
 
                for(let j = 0; j < types.length; j++) {
                   types[j].classList.remove('active');
                }
                
                for(let k = 0; k < product.length; k++) {
                   product[k].style.display = "none";
 
                   if ((product[k].getAttribute('data-category') == displayProducts) || displayProducts == "all") {
                      product[k].style.display = "block";
                   }
                }
             };
          }
       }
    }
 
    function Sorter() {
       let select = document.getElementById('select');
       let arr = [];
 
       for(let i of product) {
          const last = i.lastElementChild;
          const j = last.textContent.trim();
          const k = Number(j.substring(1));
          i.setAttribute("data-price", k);
          arr.push(i);
       }
 
       this.run = () => { addevent(); }
 
       function addevent() {
          select.onchange = sortingValue;
       }
       
       function sortingValue() {
          if (this.value === 'Default') {
             while (products.firstChild) {
                products.removeChild(products.firstChild);
             }
             products.append(...arr);	
          }
          if (this.value === 'LowToHigh') {
             SortElem(products, product, true);
          }
          if (this.value === 'HighToLow') {
             SortElem(products, product, false);
          }
       }
 
       function SortElem(products, product, bool) {
          let  x, sortprd;
          x = bool ? 1 : -1;
          sortprd = product.sort((a, b) => {
             const ax = a.getAttribute('data-price');
             const bx = b.getAttribute('data-price');
             return ax > bx ? (1 * x) : (-1 * x);
          });
          
          while (products.firstChild) {
             products.removeChild(products.firstChild);
          }
          
          products.append(...sortprd);	
       }
    }
 
    new Filter().run();
    new Sorter().run();
 })();





 let inputText = document.getElementById("textarea_1");
let result = document.getElementById("textarea_limit_id");
let limit = 1000;

inputText.addEventListener("input", function () {
    let textLength = inputText.value.length;
    result.innerHTML = textLength + "/" + limit;
});

