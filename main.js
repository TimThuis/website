var introTl = new TimelineMax();
var mouseLocationX;
var mouseLocationY;
var xMovement;
var yMovement;
var velocity = 0.03;
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
  mouseLocationX = (event.clientX - (docWidth / 2)) / docWidth * 100;
  mouseLocationY = (event.clientY - (docHeight / 2)) / docHeight * 100;
  // console.log("x: " + -mouseLocationX + ",y: " + mouseLocationY);

  xMovement = mouseLocationX * velocity;
  yMovement = mouseLocationY * velocity;
  // console.log("x: " + xMovement + ",y: " + yMovement);
  titleElement.style.transform = "rotateX(" + -yMovement + "deg) rotateY(" + xMovement + "deg) translateZ(0px)";
}
