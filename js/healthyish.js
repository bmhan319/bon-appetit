document.getElementById("mainContainer").addEventListener("load", loadHTML());

function loadHTML() {
  for (var i = 0; i < 15; i++) {
    let image1 = document.querySelector("#card" + (i + 1) + "Image1");
    let title = document.querySelector("#card" + (i + 1) + "Title");
    let titleM = document.querySelector("#card" + (i + 1) + "TitleM");
    let blurb = document.querySelector("#card" + (i + 1) + "Blurb");
    let blurbM = document.querySelector("#card" + (i + 1) + "BlurbM");
    let category = document.querySelector("#card" + (i + 1) + "Category");
    let bgColor = document.querySelector("#card" + (i + 1) + "Color");
    let bgColorM = document.querySelector("#card" + (i + 1) + "ColorM");

    let card5 = document.querySelector(".card5-col1");
    let card6Triangle = document.querySelector(".triangle-up");

    if (image1.parentElement.parentElement.parentElement.id == "lastClone") {
      image1.setAttribute("src", healthArray[0].image);
      image1.setAttribute("alt", healthArray[0].alt);
      title.innerHTML = healthArray[0].title;
      blurb.innerHTML = healthArray[0].blurb;
      titleM.innerHTML = healthArray[0].title;
      blurbM.innerHTML = healthArray[0].blurb;
      category.innerHTML = healthArray[0].category;
    } else {
      image1.setAttribute("src", healthArray[i].image);
      image1.setAttribute("alt", healthArray[i].alt);
      title.innerHTML = healthArray[i].title;
      blurb.innerHTML = healthArray[i].blurb;
      titleM.innerHTML = healthArray[i].title;
      blurbM.innerHTML = healthArray[i].blurb;
      category.innerHTML = healthArray[i].category;
      bgColor.style.backgroundColor = healthArray[i].bgColor2;
      bgColorM.style.backgroundColor = healthArray[i].bgColor2;
    }
    card5.style.backgroundColor = healthArray[4].bgColor1;
    card6Triangle.style.borderBottom = "10px solid" + healthArray[4].bgColor1;
  }
}

//Slideshow
const carouselSlideUp = document.querySelector(".carousel-slideUp");
const carouselSlideDown = document.querySelector(".carousel-slideDown");

const carouselImagesUp = document.querySelectorAll(".carousel-slideUp .divs");
const carouselImagesDown = document.querySelectorAll(
  ".carousel-slideDown .divs"
);

const next = document.querySelector(".next");
let counter = 0;
let counterDown = 15;
let size = carouselImagesUp[0].clientHeight;

//Window Resize
window.addEventListener("resize", () => {
  size = carouselImagesUp[0].clientHeight;
  counter = counter;
  counterDown = counterDown;
  carouselSlideUp.style.transition = "none";
  carouselSlideDown.style.transition = "none";
  carouselSlideUp.style.transform = "translateY(" + -size * counter + "px)";
  carouselSlideDown.style.transform = "translateY(" + size * counter + "px)";
});

//Swipe Action
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
const swipeElement = document.querySelector(".carousel-slideUp");

swipeElement.addEventListener(
  "touchstart",
  function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

swipeElement.addEventListener(
  "touchend",
  function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchendY < touchstartY) {
    slide();
  }
}

//Next Button Click Action
next.addEventListener("click", slide);

function slide() {
  if (counter >= carouselImagesUp.length - 1) {
    return;
  }

  fade();

  carouselSlideUp.style.transition = "transform 0.4s linear";
  carouselSlideDown.style.transition = "transform 0.4s linear";

  counter++;
  counterDown--;

  carouselSlideUp.style.transform = "translateY(" + -size * counter + "px)";
  carouselSlideDown.style.transform = "translateY(" + size * counter + "px)";
}

// Divs Fade in during slideshow
function fade() {
  let card = document.querySelector(".opacity-change" + (counter + 1));
  let card2 = document.querySelector(".opacity2-change" + (counter + 1));
  let prevCard = document.querySelector(".opacity-change" + counter);
  let prevCard2 = document.querySelector(".opacity2-change" + counter);

  card.style.opacity = 1;
  card2.style.opacity = 1;

  if (card.parentElement.id == "lastClone") {
    document.querySelector(".opacity-change0").style.opacity = 1;
    document.querySelector(".opacity2-change0").style.opacity = 1;
    document.querySelector(".opacity-change15").style.opacity = 0;
    document.querySelector(".opacity2-change15").style.opacity = 0;
  }

  prevCard.style.opacity = 0;
  prevCard2.style.opacity = 0;
}

//Looping slideshow around to first slide
carouselSlideUp.addEventListener("transitionend", () => {
  if (carouselImagesUp[counter].id === "lastClone") {
    carouselSlideUp.style.transition = "none";
    counter = 0;
    carouselSlideUp.style.transform = "translateY(" + -size * counter + "px)";
  }
});

carouselSlideDown.addEventListener("transitionend", () => {
  if (carouselImagesDown[counterDown].id === "lastCloneDown") {
    carouselSlideDown.style.transition = "none";
    counterDown = 15; //this number should change to however many slides there are
    carouselSlideDown.style.transform = "translateY(" + size * counter + "px)";
  }
});
