var introTl = new TimelineMax();
var mouseLocationX;
var mouseLocationY;
var docWidth = document.body.offsetWidth;
var docHeight = document.body.offsetHeight;
var titleElement = document.querySelector("#title h1");

introTl.staggerFrom("#title span", 1, {
  opacity: 0,
}, 0.5, "start")
.from("#title span", 2, {
    textShadow: "0px 0px 0px #e8e8e8, 0 0 0 #000000",
}, "start+=2");

document.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  mouseLocationX = Math.round((event.clientY - (docWidth / 2)) / docWidth * 15);
  mouseLocationY = Math.round((event.clientX - (docHeight / 2)) / docHeight * 15);
  // console.log(mouseLocationX);
  // console.log(mouseLocationY);
  titleElement.style.transform = `rotateX(${mouseLocationX}deg) rotateY(${mouseLocationY}deg) translateZ(0px)`;
}
