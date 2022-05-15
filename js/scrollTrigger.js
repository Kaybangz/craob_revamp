gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

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

gsap.from(".s2_img", {
  scrollTrigger: {
    trigger: "#section_two",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  opacity: 0,
  scale: 0.6,
  ease: "power1.inOut",
  duration: 1.3,
});

gsap.to(".text_one_h1", {
  scrollTrigger: {
    trigger: "#section_two",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(66% 0, 100% 45%, 60% 100%, 0 100%, 0 0)",
  ease: "power1.inOut",
  delay: 0.1,
  duration: 1.3,
});

gsap.to(".text_one_h4", {
  scrollTrigger: {
    trigger: "#section_two",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(66% 0, 100% 45%, 60% 100%, 0 100%, 0 0)",
  ease: "power1.inOut",
  delay: 0.2,
  duration: 1.3,
});

gsap.to(".text_two_h2", {
  scrollTrigger: {
    trigger: ".text_one_h4",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  duration: 1,
});

gsap.to(".text_two_h3", {
  scrollTrigger: {
    trigger: ".text_one_h4",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  opacity: 1,
  delay: 0.1,
  duration: 1.3,
});

gsap.to(".text_two_p", {
  scrollTrigger: {
    trigger: ".text_one_h4",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  opacity: 1,
  delay: 0.3,
  duration: 1.5,
});

// SECTION THREE SCROLL TRIGGER
gsap.to(".s3_first_text_h1", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(66% 0, 100% 45%, 60% 100%, 0 100%, 0 0)",
  ease: "power1.inOut",
  duration: 1.3,
  opacity: 1,
});

gsap.to(".s3_first_text_h3", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.2,
  duration: 1.3,
  opacity: 1,
});

gsap.to(".s3_first_text_p", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.3,
  duration: 1.3,
  opacity: 1,
});

gsap.to(".s3_second_text_h1", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.3,
  duration: 1.3,
  opacity: 1,
});

gsap.to(".s3_icon", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.3,
  duration: 1.3,
  opacity: 1,
  stagger: 0.3,
});

gsap.to(".s3_icon", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.3,
  duration: 1.3,
  opacity: 1,
  stagger: 0.3,
});

gsap.to(".s3_second_text_p", {
  scrollTrigger: {
    trigger: "#section_three",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.5,
  duration: 1.3,
  opacity: 1,
  stagger: 0.3,
});

// SECTION FOUR SCROLL TRIGGER
gsap.to(".s4_text_h1", {
  scrollTrigger: {
    trigger: "#section_four",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  duration: 1.3,
  opacity: 1,
});

gsap.to(".s4_li", {
  scrollTrigger: {
    trigger: "#section_four",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  ease: "power1.inOut",
  delay: 0.3,
  duration: 1.3,
  opacity: 1,
  stagger: 0.3,
});

// SECTION FOUR SCROLL TRIGGER
gsap.from(".s5_img", {
  scrollTrigger: {
    trigger: "#section_five",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none reverse",
  },

  opacity: 0,
  scale: 0.6,
  ease: "power1.inOut",
  duration: 1.3,
});

gsap.to(".s5_h4", {
  scrollTrigger: {
    trigger: "#section_five",
    start: "top center",
    end: "bottom center",

    toggleActions: "restart none none reverse",
  },

  ease: "power1.inOut",
  delay: 0.6,
  duration: 1.3,
  opacity: 1,
});
