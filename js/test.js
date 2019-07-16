const carouselSlideUp = document.querySelector(".carousel-slideUp")
const carouselSlideDown = document.querySelector(".carousel-slideDown")

const carouselImagesUp = document.querySelectorAll(".carousel-slideUp div")
const carouselImagesDown = document.querySelectorAll(".carousel-slideDown div")

const next = document.querySelector(".next")
let counter = 0
let counterDown =  4
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
    counterDown = 4
    carouselSlideDown.style.transform = "translateY(" + (size * counter) + "px)"
  }
})
