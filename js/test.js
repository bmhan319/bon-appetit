const carouselSlide = document.querySelector(".carousel-slideUp")
const carouselImages = document.querySelectorAll(".carousel-slideUp div")
const next = document.querySelector(".next")
let counter = 0;
//const size = carouselImages[0].clientWidth
const size = carouselImages[0].clientHeight

next.addEventListener('click',()=>{
  if (counter >= carouselImages.length -1) {
    return
  }
  carouselSlide.style.transition = 'transform 0.4s linear'
  counter++
  carouselSlide.style.transform = "translateY(" + (-size * counter) + "px)"
})

carouselSlide.addEventListener("transitionend", ()=>{
  if(carouselImages[counter].id === "lastClone"){
    carouselSlide.style.transition = "none"
    counter = 0
    carouselSlide.style.transform = "translateY(" + (-size * counter) + "px)"
  }
})
