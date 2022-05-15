

gsap.to(".logo", {
  "clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
  duration: 2,
  ease: "power4.inOut",
});

gsap.to(".heading_text_h1", {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 3,
  delay: .8,
  ease: "power4.inOut",
});

gsap.to(".heading_text_h4", {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 3,
  delay: 1.1,
  ease: "power4.inOut",
});

gsap.to(".hide_mobile", {
  opacity: 1,
  duration: 1,
  stagger: 0.3,
  delay: 1.2,
  ease: "power4.inOut",
});

gsap.to(".hide_desktop", {
  opacity: 1,
  duration: 3,
  stagger: 1,
  delay: 1.2,
  ease: "power4.inOut",
});

gsap.to(".s1_p", {
  opacity: 1,
  duration: 3,
  stagger: 1,
  delay: 1.3,
  ease: "power4.inOut",
});
