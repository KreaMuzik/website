////////////
//  GSAP  //
////////////
gsap.registerPlugin(ScrollTrigger);


//  ---SCROLL SNAP---  //
ScrollTrigger.defaults({
    toggleActions: "start none reverse none",
    scroller: ".scroll",
    scrub: 1,
});


//  ---ROTATE RECORD---  //
var rotate = gsap.timeline({
    scrollTrigger:{
        trigger: "#scroll",
        pin: true,
        scrub: 1,
        start: '10vh top',
        end: () => window.innerHeight*4 + ' bottom',
        // markers: true,
    }
})
.to('.record', {
    rotation:270,
    duration:2,
    ease:'none',
})
