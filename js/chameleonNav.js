gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

gsap.to(".nav_menu_container", {
  scrollTrigger: {
    trigger: "#section_two",
    start: "top center",
    end: "bottom bottom",
    markers: true,
    toggleActions: "restart none none reverse",
  },

  "backgroundColor": "#f32aa3",
  ease: "power1.inOut",
  duration: 1.3,
});

gsap.to(".nav_menu_container", {
    scrollTrigger: {
      trigger: "#section_three",
      toggleActions: "restart none none reverse",
      markers: true,
    },
  
    "backgroundColor": "#08a9df",
    ease: "power1.inOut",
    duration: 1.3,
  });
