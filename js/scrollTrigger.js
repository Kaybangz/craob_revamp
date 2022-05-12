gsap.registerPlugin(ScrollTrigger);


// SECTION TWO SCROLL TRIGGER
document.addEventListener("mousemove", (e) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  positionX = e.clientX / width - 0.8;
  positionY = e.clientY / height - 0.8;

  gsap.to(".section_two_image", {
    rotationY: positionX * 50,
    rotationX: -positionY * 50,
    ease: "none",
  });
});

