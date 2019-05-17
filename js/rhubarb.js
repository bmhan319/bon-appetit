//Making Default Video Volume low
document.querySelector('.article-video').volume = 0.1;

//Close Bottom Card
function closePopUp() {
  let bottomCard = document.querySelector(".section-bottom-card")
  bottomCard.classList.add("invisible")
  bottomCard.classList.remove("visible")

}

/*
//Slide Bottom Card up at specific scrollbar height
function openSlide() {
  let body = document.querySelector("body")
  let bottomCard = document.querySelector(".section-bottom-card")
  if (body.scrollTop >= 2000) {
    bottomCard.classList.add("visible")
    bottomCard.classList.remove("invisible")
  } else {
    bottomCard.classList.remove("visible")
    bottomCard.classList.add("invisible")
  }
}
*/
//Slide bottom Card down once you get  to the recipes section
// get the element to animate
var element = document.getElementById('section-readmore');
var elementHeight = element.clientHeight;

// listen for scroll event and call slide down function
document.addEventListener('scroll', slideDown);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the top of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

// slide popup into view at certain scroll height, hide it when readmore section comes into view and when it is at a certain height
function slideDown() {
  let bottomCard = document.querySelector(".section-bottom-card")
  let body = document.querySelector("body").scrollTop
  let inview = inView()
  console.log(body)
  console.log(inview)
  // is element in view?
  if ( (inview == false) && (body >= 2000) ) {
    // element is in view, add class to element
    bottomCard.classList.add("visible")
    bottomCard.classList.remove("invisible")
  } else if ( (inview == true) && (body >= 2000) ) {
    bottomCard.classList.add("invisible")
    bottomCard.classList.remove("visible")
  } else {
    bottomCard.classList.add("invisible")
    bottomCard.classList.remove("visible")
  }
} 

