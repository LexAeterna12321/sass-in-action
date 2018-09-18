let counter = 2;
let sliderCounter = document.querySelector(".slider span");
setInterval(function(){
    const slider = document.querySelector("header").style.backgroundImage = "url(img/headerImg"+counter+".jpg)";
    sliderCounter.innerHTML = counter;
    counter++;
    counter === 5 ? counter = 1 : counter=counter;
},5000);
