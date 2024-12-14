// STEP 1: Since Locomotive and ScrollTrigger don't work together, thus to merge them coopy the JS code from https://codepen.io/GreenSock/pen/ExPdqKy
// STEP 2: From RedPanel to t1.from below (purple/green panel) delete the code, we don't need it
// STEP 3: Change the already written ".smooth-scroll" to "#main"
// Now put all the Code into a Function

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  // Change the already written ".smooth-scroll" to "#main"

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

/*
  From RedPanel to t1.from below (purple/green panel) delete the code, we don't need it

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: ".smooth-scroll",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});
// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});
// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });
tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);

  From RedPanel to t1.from below (purple/green panel) delete the code, we don't need it
*/

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

gsap.to("#page1>video", {
  scale: 1.8,
  duration: 10,
  scrollTrigger: {
    trigger: "#page1>video",
    scroller: "#main",
    start: "5% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page1>video").play();
  },
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    pin: true,
    //markers: true
  },
});

gsap.to("#page1-bottom", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page1-bottom",
    scroller: "#main",
    start: "0% top",
    end: "100% top",
    //markers: true,
    scrub: 2,
  },
  opacity: 0,
});

gsap.to("#page2", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page2>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page2>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page2>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page2>h1", {
  top: "-50%",
});

gsap.to("#page3", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page3>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page3>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page3>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page3>h1", {
  top: "-50%",
});

gsap.to("#page4", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page4>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page4>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page4>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page4>h1", {
  top: "-50%",
});

gsap.to("#page5", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page5>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page5>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page5>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page5>h1", {
  top: "-50%",
});

gsap.to("#page6", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page6>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page6>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page6>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page6>h1", {
  top: "-50%",
});

gsap.to("#page7", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page7>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page7>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page7>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page7>h1", {
  top: "-50%",
});

gsap.to("#page8", {
  scale: 0.9,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "50% top",
    end: "100% top",
    //markers: true,
    scrub: 1,
  },
});

gsap.to("#page8>video", {
  duration: 5,
  scrollTrigger: {
    trigger: "#page8>video",
    scroller: "#main",
    start: "2% top",
    end: "bottom top",
    //markers: true,
    scrub: 1,
  },
  onStart: () => {
    document.querySelector("#page8>video").play();
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "0% top",
    end: "50% top",
    //markers: true,
    pin: true,
    scrub: 1,
  },
});

t1.to("#page8>h1", {
  top: "-50%",
});

function canvas() {
  const canvas = document.querySelector("#page10>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0003.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0009.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0016.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0022.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0029.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0035.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0041.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0047.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0054.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0060.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0066.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0072.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0079.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0085.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0091.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0097.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0104.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0110.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0116.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0122.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0129.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0135.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0141.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0147.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0154.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0160.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0166.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0172.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0179.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0185.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0191.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/360/medium/0197.jpg
 `;
    return data.split("\n")[index];
  }

  const frameCount = 32;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    scale: 2,
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    scale: 2,
    trigger: "canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
}
canvas();

gsap.to("#page20>h4", {
  duration: "10",
  scrollTrigger: {
    trigger: "#page20",
    scroller: "#main",
    start: "10% top",
    end: "65% top",
    //markers: true,
    scrub: 1,
  },
  top: "-50%",
});

gsap.to("#page20>h1", {
  duration: "10",
  scrollTrigger: {
    trigger: "#page20",
    scroller: "#main",
    start: "10% top",
    end: "70% top",
    //markers: true,
    scrub: 1,
  },
  top: "-50%",
});

gsap.to("#page20>p", {
  duration: 10,
  scrollTrigger: {
    trigger: "#page20",
    scroller: "#main",
    start: "10% top",
    end: "90% top",
    //markers: true,
    scrub: 1,
  },
  top: "-50%",
  opacity: -1,
});

function canvas1() {
  const canvas = document.querySelector("#page20>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    images and videos/canvas01/Vision00001.png
    images and videos/canvas01/Vision00002.png
    images and videos/canvas01/Vision00003.png
    images and videos/canvas01/Vision00004.png
    images and videos/canvas01/Vision00005.png
    images and videos/canvas01/Vision00006.png
    images and videos/canvas01/Vision00007.png
    images and videos/canvas01/Vision00008.png
    images and videos/canvas01/Vision00009.png
    images and videos/canvas01/Vision00010.png
    images and videos/canvas01/Vision00011.png
    images and videos/canvas01/Vision00012.png
    images and videos/canvas01/Vision00013.png
    images and videos/canvas01/Vision00014.png
    images and videos/canvas01/Vision00015.png
    images and videos/canvas01/Vision00016.png
    images and videos/canvas01/Vision00017.png
    images and videos/canvas01/Vision00018.png
    images and videos/canvas01/Vision00019.png
    images and videos/canvas01/Vision00020.png
    images and videos/canvas01/Vision00021.png
    images and videos/canvas01/Vision00022.png
    images and videos/canvas01/Vision00023.png
    images and videos/canvas01/Vision00024.png
    images and videos/canvas01/Vision00025.png
    images and videos/canvas01/Vision00026.png
 `;
    return data.split("\n")[index];
  }

  const frameCount = 26;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page20`,
      //   set start end according to preference
      start: `top top`,
      end: `80% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page20",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `80% top`,
  });
}
canvas1();

gsap.to(".img-opacity>#eyeoff", {
  scrollTrigger: {
    trigger: ".img-opacity>#eyeon",
    scroller: "#main",
    start: "-30% top",
    end: "5% top",
    //markers: true,
    scrub: 1,
  },
  opacity: 0,
});

gsap.to(".img-opacity>#one", {
  scrollTrigger: {
    trigger: ".img-opacity>#two",
    scroller: "#main",
    start: "-70% top",
    end: "-50% top",
    //markers: true,
    scrub: 1,
  },
  opacity: 0,
});
gsap.to(".img-opacity>#two", {
  scrollTrigger: {
    trigger: ".img-opacity>#three",
    scroller: "#main",
    start: "-50% top",
    end: "-30% top",
    //markers: true,
    scrub: 1,
  },
  opacity: 0,
});
gsap.to(".img-opacity>#three", {
  scrollTrigger: {
    trigger: ".img-opacity>#four",
    scroller: "#main",
    start: "-30% top",
    end: "-10% top",
    //markers: true,
    scrub: 1,
  },
  opacity: 0,
});
gsap.to(".img-opacity>#four", {
  scrollTrigger: {
    trigger: ".img-opacity>#five",
    scroller: "#main",
    start: "-20% top",
    end: "10% top",
    //markers: true,
    scrub: 1,
  },
  opacity: 0,
});

gsap.to("#sensorchip>img", {
  duration: 5,
  scrollTrigger: {
    trigger: "#sensorchip",
    scroller: "#main",
    start: "-80% top",
    end: "-30% top",
    //markers: true,
    scrub: 0.5,
  },
  opacity: 1,
  scale: 1.4,
});