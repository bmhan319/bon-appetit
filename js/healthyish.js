//Column Slide Animation
let cardNum = 0

function runSlide(){ 
  cardNum++
  let card = document.querySelector(".card" + cardNum)
  let col1 = document.querySelector(".card" + cardNum + "-col1")
  let col2 = document.querySelector(".card" + cardNum + "-col2")
  
  if (cardNum < 4) {
    col1.classList.add("card" + cardNum + "-col1-slide-down")
    col2.classList.add("card" + cardNum + "-col2-slide-up")
    document.querySelector(".card1-col1").style.transition = "all .2s linear"
    document.querySelector(".card1-col2").style.transition = "all .2s linear"
    console.log(card)
  } else if (cardNum == 4) {
      for (var i = 1; i < 4; i++) {
        let cardCol1 = document.querySelector(".card" + i + "-col1")
        let cardCol2 = document.querySelector(".card" + i + "-col2")
        cardCol1.classList.remove("card" + i + "-col1-slide-down")
        cardCol2.classList.remove("card" + i + "-col2-slide-up")
      }
      cardNum = 0
      document.querySelector(".card1-col1").style.transition = "none"
      document.querySelector(".card1-col2").style.transition = "none"
      console.log(card)
  }
}


