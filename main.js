var introTl = new TimelineMax();
var mouseLocationX;
var mouseLocationY;
var docWidth = document.body.offsetWidth;
var docHeight = document.body.offsetHeight;
var titleElement = document.querySelector("#title h1");

document.addEventListener("mousemove", mouseMove);

introTl.staggerFrom("h1 div", 1, {
  y: "-35%",
  opacity: 0,
}, 0.5, "start")
.from("h1 div", 2, {
    textShadow: "0px 0px 0px #e8e8e8, 0 0 0 #000000",
}, "start+=2");


function mouseMove(event) {
  mouseLocationX = Math.round((event.clientX - (docWidth / 2)) / docWidth * 100);
  mouseLocationY = Math.round((event.clientY - (docHeight / 2)) / docHeight * 100);
  // console.log(-mouseLocationX);
  // titleElement.style.transform = `rotateX(${mouseLocationY}deg) rotateY(${-mouseLocationX}deg) translateZ(0px)`;
  // titleElement.style.transform = `rotateY(${mouseLocationX}deg)`;
}
