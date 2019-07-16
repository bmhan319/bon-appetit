document.getElementById("mainContainer").addEventListener("load", loadHTML())

function loadHTML() {
  for (var i = 0; i < 15; i++) {
    let image1 = document.querySelector("#card" + (i + 1) + "Image1") 
    let title = document.querySelector("#card" + (i + 1) + "Title") 
    let blurb = document.querySelector("#card" + (i + 1) + "Blurb")
    let category = document.querySelector("#card" + (i + 1) + "Category")
    
    image1.setAttribute("src", healthArray[i].image)
    image1.setAttribute("alt", healthArray[i].alt)
    title.innerHTML = healthArray[i].title
    blurb.innerHTML = healthArray[i].blurb
    category.innerHTML = healthArray[i].category
  }
}