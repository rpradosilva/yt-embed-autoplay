const btn = document.getElementById("playbutton");
const box = document.getElementById("video");

function playVideo(src, command) {
  let container = document.querySelector(".video");
  let iframe = document.createElement("iframe");
  let closeButton = document.createElement("img");
  let url = `https://www.youtube.com/embed/${src}`;

  container.appendChild(iframe);
  container.appendChild(closeButton);

  if (command == "autoplay") {
    iframe.setAttribute("src", `${url}?autoplay=1&mute=1`);
  } else {
    iframe.setAttribute("src", url);
  }

  closeButton.setAttribute("class", "closebutton");
  closeButton.setAttribute("src", "assets/images/close.png");
  closeButton.setAttribute("onclick", "hideVideo()");

  btn.style.visibility = "hidden";
  btn.style.display = "none";
}

function hideVideo() {
  btn.style.visibility = "visible";
  btn.style.display = "flex";

  document.querySelector("iframe").remove();
  document.querySelector(".video img").remove();
}
