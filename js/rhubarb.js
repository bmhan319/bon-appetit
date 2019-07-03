//Making Default Video Volume low
document.querySelector('.article-video').volume = 0.1;

//Close Bottom Card
function closePopUp() {
  let bottomCard = document.querySelector(".section-bottom-card")
  bottomCard.style.display = "none"

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

// slide popup into view at certain scroll height, hide it when readmore section comes into view and when it is at a certain height
function slideDown() {
  let bottomCard = document.querySelector(".section-bottom-card")
  let body = document.querySelector("body").scrollTop
  let inview = inView()
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

//open expanded nav menu
function openMenu() {
  let body = document.querySelector("body")
  let subscribe = document.querySelector(".subscribe-text")
  let search = document.querySelector(".search-fill")
  let menu = document.querySelector(".hamburger-container")
  let expand = document.querySelector(".section-nav-expanded")
  let list = document.querySelector(".expanded-nav-list-container")
  let social = document.querySelector(".expanded-nav-social")
  let blackout = document.querySelector(".blackout")  
  subscribe.style.color = "#000"
  search.style.fill = "#000"
  menu.innerHTML = '<svg class="icon-close" focusable="false" viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">  <title>Close</title><path d="M16 14.586l6.364-6.364 1.414 1.414L17.414 16l6.364 6.364-1.414 1.414L16 17.414l-6.364 6.364-1.414-1.414L14.586 16 8.222 9.636l1.414-1.414z" fill="#fff"></path></svg>'
  body.style.overflow = "hidden"
  blackout.classList.add("blackout-active")
  blackout.classList.remove("blackout-hidden")
  menu.classList.add("close-button-container")
  menu.classList.remove("hamburger-container")
  menu.setAttribute("onclick", "closeMenu()")
  expand.classList.add("nav-active")
  expand.classList.remove("nav-hidden")
  list.classList.add("menu-text-active")
  list.classList.remove("menu-text-hidden")
  social.classList.add("menu-text-active")
  social.classList.remove("menu-text-hidden")
}

//close expanded nav menu
function closeMenu() {
  let body = document.querySelector("body")
  let subscribe = document.querySelector(".subscribe-text")
  let search = document.querySelector(".search-fill")
  let menu = document.querySelector(".close-button-container")
  let expand = document.querySelector(".section-nav-expanded")
  let list = document.querySelector(".expanded-nav-list-container")
  let social = document.querySelector(".expanded-nav-social")                                  
  let blackout = document.querySelector(".blackout")                                  
  subscribe.style.color = "#fff"
  search.style.fill = "#fff"
  menu.innerHTML = '<div class="hamburger-row1"></div><div class="hamburger-row2"></div><div class="hamburger-row3"></div>'
  body.style.overflow = "visible"
  blackout.classList.add("blackout-hidden")
  blackout.classList.remove("blackout-active")
  menu.classList.add("hamburger-container")
  menu.classList.remove("close-button-container")
  menu.setAttribute("onclick", "openMenu()")
  expand.classList.add("nav-hidden")
  expand.classList.remove("nav-active")
  list.classList.add("menu-text-hidden")
  list.classList.remove("menu-text-active")
  social.classList.add("menu-text-hidden")
  social.classList.remove("menu-text-active")
}

// expand footer menu
function expandMenu(num) {
  let expand = document.querySelector(".expand-menu" + num)
  let triangle = document.querySelector(".triangle" + num)
  let list = document.querySelector(".foldable-list" + num)
  
  if (window.innerWidth <= 768) {
    expand.setAttribute("onclick","collapseMenu(" + num + ")")
    triangle.style.animation = "roll .25s 1";
    triangle.style.transform ="rotate(180deg)"
    list.style.display = "block"
  } else {
    list.style.display = "block"
  }
}

//collapse footer menu
function collapseMenu(num) {
  let expand = document.querySelector(".expand-menu" + num)
  let triangle = document.querySelector(".triangle" + num)
  let list = document.querySelector(".foldable-list" + num)
  
  if (window.innerWidth <= 768) {
    expand.setAttribute("onclick","expandMenu(" + num + ")")
    triangle.style.animation = "rollBack .25s 1";
    triangle.style.transform ="rotate(0)"
    list.style.display = "none"
  } else{
    list.style.display = "block"
  }
}