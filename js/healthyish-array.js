let healthArray = [
  {index: 15,
   category: "FOOD",
   title: "We'll Be Drinking Co-Fermented Wines All Summer Long",
   blurb: "Made by fermenting multiple grape varieties in one vessel, co-fermented wines are this summer's most delicious drink.",
   image: "img/BA060119unfiltered.jpg",
   alt: "wine and veggies"
  },
  {index: 14,
   category: "CHEF",
   title: "I Moved From Tokyo to the U.S. for Love But Became a Chef Instead",
   blurb: "How Kuniko Yagi went from banker to udon waitress to owning her own restaurant in L.A.",
   image: "img/PIKUNICO_KunikoYagi_0024.jpg",
   alt: "Kuniko Yagi"
  },
  {index: 13,
   category: "PROFILE",
   title: "Adrienne Maree Brown on Why Joy Is a Form of Resistance",
   blurb: "The author and social justice activist finds pleasure in slightly melted ice cream and a good solo dance party.",
   image: "img/adrienne-maree1.jpg",
   alt: "Adrienne Maree"
  },
  {index: 12,
   category: "Chef",
   title: "Inside the Mad-Science World of a Professional Fermentation Chef",
   blurb: "How Caitlin Hata, the fermentation chef at The Manufactory, turns food waste into kimchi and more.",
   image: "img/Caitlin-Tartine-lede.jpg",
   alt: "Caitlin Tartine"
  },
  {index: 11,
   category: "PROFILE",
   title: "Lauren Friel Is Making Boston Drinking Culture a Little Less Bro-y",
   blurb: "Her natural wine bar Rebel Rebel is unabashedly feminist and reliably good.",
   image: "img/Healthyish-Lauren-Friel-Lede.jpg",
   alt: "Lauren Friel"
  },
  {index: 10,
   category: "TRENDS",
   title: "Mānuka Honey Is a Wellness Wonder—But Your Jar Could Be a Fake",
   blurb: "Here's how to make sure you're buying the real thing.",
   image: "img/Manuka-Honey-2.jpg",
   alt: "manuka honey"
  } 
]

document.getElementById("mainContainer").addEventListener("load", loadHTML())

function loadHTML() {
  for (var i = 0; i < 6; i++) {
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


