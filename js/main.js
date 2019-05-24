function closeMenu() {
  let closed = document.querySelector(".aside-window")
  closed.style.left = '-150vw'
  //closed.style.left = -320;  changes to this at 768pixels wide
  
}

function openMenu() {
  let open = document.querySelector(".aside-window")
  open.style.left = 0
}