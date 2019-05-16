//Making Default Video Volume low
document.querySelector('.article-video').volume = 0.1;

//Close Bottom Card
function closePopUp() {
  let bottomCard = document.querySelector(".visible")
  bottomCard.style.opacity = 0
}

//Slide Bottom Card up at specific scrollbar height
function openSlide() {
  let body = document.querySelector("body")
  let bottomCard = document.querySelector(".section-bottom-card")
  if (body.scrollTop >= 2000) {
    console.log(body.scrollTop)
    bottomCard.style.bottom = 0
  } else {
    bottomCard.style.bottom = -186
  }
}



