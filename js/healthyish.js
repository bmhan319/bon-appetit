//Column Slide Animation

function runSlide() {
  let col1 = document.querySelector(".card1-col1")
  let col2 = document.querySelector(".card1-col2")
  
  col1.classList.add("card1-col1-slide-down")
  col2.classList.add("card1-col2-slide-up")
}


//bounce button
$(document).ready(function() {
animationClick('.bounceOut1','bounceOut');
        
function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};     
        
        
});