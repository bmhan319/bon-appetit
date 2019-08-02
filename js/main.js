function closeMenu() {
  const closed = document.querySelector(".aside-window");
  closed.style.left = "-150vw";
}

function openMenu() {
  const open = document.querySelector(".aside-window");
  open.style.left = 0;
  open.style.opacity = 1;
}

function startVideo(num) {
  let video = document.querySelector(".video" + num);
  let videoBox = document.querySelector(".video" + num + "-box");
  let thumbNail = document.querySelector(".video" + num + "-tn");
  let playButton = document.querySelector(".play-button" + num);

  video.classList.add("video" + num + "-on");
  video.classList.remove("video" + num + "-off");
  videoBox.classList.add("video" + num + "-box-on");
  videoBox.classList.remove("video" + num + "-box-off");
  thumbNail.classList.add("video" + num + "-tn-off");
  thumbNail.classList.remove("video" + num + "-tn");
  playButton.classList.add("play-button" + num + "-off");
  playButton.classList.remove("play-button" + num);
}
