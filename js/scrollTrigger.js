gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    start: "top top",
  },
});

// SECTION TWO SCROLL TRIGGER
document.addEventListener("mousemove", (e) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  positionX = e.clientX / width - 0.80;
  positionY = e.clientY / height - 0.80;

  gsap.to(".section_two_image", {
    rotationY: positionX * 50,
    rotationX: -positionY * 50,
    ease: "none",
  });
});


gsap.from(".section_two_image", {
  scrollTrigger: {
    trigger: "#section_two",
    toggleActions: "restart none none none",
    scrub: 0.1,
  },

  scale: 0.5,
  opacity: 0,
});

tl.to(".text_one_h1", {
  scrollTrigger: {
    trigger: ".text_one_h1",
    toggleActions: "restart none none none",
    scrub: 0.2,
  },

  opacity: 1,

})

  .to(".text_one_h4", {
    scrollTrigger: {
      trigger: ".text_one_h4",
      toggleActions: "restart none none none",
      scrub: 2.4,
    },
    opacity: 1,
  })

  .to(".text_two_h2", {
    scrollTrigger: {
      trigger: ".text_two_h2",
      toggleActions: "restart none none none",
      scrub: 2.6,
    },
    opacity: 1,
  })

  .to(".text_two_h3", {
    scrollTrigger: {
      trigger: ".text_two_h3",
      toggleActions: "restart none none none",
      scrub: 2.8,
    },
    opacity: 1,
    
  })

  .to(".text_two_p", {
    scrollTrigger: {
      trigger: ".text_two_p",
      toggleActions: "restart none none none",
      scrub: 3,
    },
    opacity: 1
  })

  //   SECTION THREE SCROLL TRIGGER
  .to(".s3_first_text_h1", {
    scrollTrigger: {
      trigger: ".s3_first_text",
      toggleActions: "restart none none none",
      scrub: 0.3,
    },

    opacity: 1,
  })

  .to(".s3_first_text_h3", {
    scrollTrigger: {
      trigger: ".s3_first_text_h3",
      toggleActions: "restart none none none",
      scrub: 0.4,
    },

    opacity: 1,
  })

  .to(".s3_first_text_p", {
    scrollTrigger: {
      trigger: ".s3_first_text_p",
      toggleActions: "restart none none none",
      scrub: 0.5,
    },

    opacity: 1,
  })

  .to(".s3_second_text_h1", {
    scrollTrigger: {
      trigger: ".s3_second_text_h1",
      toggleActions: "restart none none none",
      scrub: 0.6,
    },

    opacity: 1,
  })

  .to(".s3_icon", {
    scrollTrigger: {
      trigger: ".s3_icon",
      toggleActions: "restart none none none",
      scrub: 0.7,
    },

    stagger: 0.3,
    opacity: 1,
  })

  .to(".s3_second_text_p", {
    scrollTrigger: {
      trigger: ".s3_icon",
      toggleActions: "restart none none none",
      scrub: 0.8,
    },

    stagger: 1,
    opacity: 1,
  })

  //   SECTION FOUR SCROLL TRIGGER

  .to(".s4_text_h1", {
    scrollTrigger: {
        trigger: ".s4_li",
        toggleActions: "restart none none none",
        scrub: 0.5,
      },

      opacity: 1,
  })

  .to(".s4_li", {
    scrollTrigger: {
      trigger: ".s4_li",
      toggleActions: "restart none none none",
      scrub: 0.8,
    },

    stagger: 0.3,
    opacity: 1,
  })

   //   SECTION FIVE SCROLL TRIGGER

   .from(".s5_img", {
    scrollTrigger: {
        trigger: ".s5_img",
        toggleActions: "restart none none none",
        scrub: 0.5,
      },

      scale: 1.5,
      opacity: 1,
  })
