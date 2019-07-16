document.getElementById("mainContainer").addEventListener("load", loadHTML())

function loadHTML() {
  for (var i = 0; i < 1; i++) {
    let image1 = document.querySelector("#card" + (i + 1) + "Image1") 
    image1.setAttribute("src", healthArray[i].image)
    image1.setAttribute("alt", healthArray[i].alt)
  }
}


const carouselSlideUp = document.querySelector(".carousel-slideUp")
const carouselSlideDown = document.querySelector(".carousel-slideDown")

const carouselImagesUp = document.querySelectorAll(".carousel-slideUp div")
const carouselImagesDown = document.querySelectorAll(".carousel-slideDown div")

const next = document.querySelector(".next")
let counter = 0
let counterDown =  15
const size = carouselImagesUp[0].clientHeight


//Next Button Click Action
next.addEventListener('click',()=>{
  if (counter >= carouselImagesUp.length -1) {
    return
  }
  carouselSlideUp.style.transition = 'transform 0.4s linear'
  carouselSlideDown.style.transition = 'transform 0.4s linear'
  counter++
  counterDown--
  carouselSlideUp.style.transform = "translateY(" + (-size * counter) + "px)"
  carouselSlideDown.style.transform = "translateY(" + (size * counter) + "px)"
})


//Looping slideshow around to first slide
carouselSlideUp.addEventListener("transitionend", ()=>{
  if(carouselImagesUp[counter].id === "lastClone"){
    carouselSlideUp.style.transition = "none"
    counter = 0
    carouselSlideUp.style.transform = "translateY(" + (-size * counter) + "px)"
  }
})

carouselSlideDown.addEventListener("transitionend", ()=>{
  if(carouselImagesDown[counterDown].id === "lastClone"){
    carouselSlideDown.style.transition = "none"
    counterDown = 15  //this number should change to however many slides there are
    carouselSlideDown.style.transform = "translateY(" + (size * counter) + "px)"
  }
})
