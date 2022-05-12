gsap.registerPlugin(ScrollTrigger);

gsap.to('#section_two', {
    scrollTrigger: {
        trigger: '#section_two',
        pin: "#section_two",
    },
    
})

gsap.to('#section_three', {
    scrollTrigger: {
        trigger: '#section_three',
        pin: '#section_three',
    },
    
})

gsap.to('#section_four', {
    scrollTrigger: {
        trigger: '#section_four',
        pin: '#section_four',
    },
    
})
