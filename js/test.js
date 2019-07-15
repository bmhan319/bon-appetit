const carouselSlide = document.querySelector(".carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide div")
const next = document.querySelector(".next")
let counter = 0;
const size = carouselImages[0].clientWidth

next.addEventListener('click',()=>{
  carouselSlide.style.transition = 'transform 0.4s linear'
  counter++
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"
})

carouselSlide.addEventListener("transitionend", ()=>{
  if(carouselImages[counter].id === "lastClone"){
    carouselSlide.style.transition = "none"
    counter = 0
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"
  }
})
