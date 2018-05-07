var introTl = new TimelineMax();
var mouseLocationX;
var mouseLocationY;
var docWidth = document.body.offsetWidth;
var docHeight = document.body.offsetHeight;
var titleElement = document.querySelector("#title h1");

document.addEventListener("mousemove", mouseMove);

introTl.from("#cube", 2, {
  scale: 0,
  ease: Elastic.easeOut.config(0.75, 0.5),
  opacity: 0,
}, "start")
.staggerFrom("h1 div", 1, {
  y: "-35%",
  opacity: 0,
}, 0.5, "start")
.from("h1 div", 0.75, {
    textShadow: "0px 0px 0px #e8e8e8, 0 0 0 #000000",
}, "start+=1.5");


function mouseMove(event) {
  mouseLocationX = Math.round((event.clientX - (docWidth / 2)) / docWidth * 20);
  mouseLocationY = Math.round((event.clientY - (docHeight / 2)) / docHeight * 20);
  // console.log(-mouseLocationX);
  // titleElement.style.transform = `rotateX(${mouseLocationY}deg) rotateY(${-mouseLocationX}deg) translateZ(0px)`;
  // titleElement.style.transform = `rotateY(${mouseLocationX}deg)`;
}
