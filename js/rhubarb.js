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
  if (body.scrollTop <= 2000) {
    bottomCard.style.bottom = -190
  } else {
    bottomCard.style.bottom = -0
  }
}

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

// animate element when it is in view
function slideDown() {
  let bottomCard = document.querySelector(".section-bottom-card")
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      bottomCard.style.opacity = 0
  } else {
      bottomCard.style.opacity = 1
  }
}

