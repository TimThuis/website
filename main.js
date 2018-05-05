var introTl = new TimelineMax();

introTl.staggerFrom("#title span", 1, {
  opacity: 0,
}, 0.5, "start")
.from("#title span", 2, {
    textShadow: "0px 0px 0px #e8e8e8, 0 0 0 #000000",
}, "start+=2");
