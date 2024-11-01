////////////
//  GSAP  //
////////////
gsap.registerPlugin(ScrollTrigger);


//  ---SCROLL SNAP---  //
ScrollTrigger.defaults({
    toggleActions: "start none reverse none",
    scroller: ".scroll",
    scrub: 1,
    markers: false,
});


// ---MOVE COVER--- //
let cover = gsap.timeline({
    scrollTrigger: {
        trigger: "#cover",
        start: "90% 90%",
        end: "110% 10%",
        scrub: 1,
        markers: false,
    }
});
cover.to([".record", ".record-cover", ".record-cover-back"], { x: '-53vw', duration: 20 });
cover.to([".record-cover", ".record-cover-back"], { x: '-110vw', duration: 20 });


//  ---ROTATE RECORD---  //
let record = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "10vh top",
        end: () => window.innerHeight*4 + ' bottom',
        scrub: 1,
        markers: false,
    }
})
record.to(".record", { rotation: 270, duration: 2, ease: 'none' });


// ---SHOW COVER BACK---  //
let coverBack = gsap.timeline({
    scrollTrigger: {
        trigger: "#cover-back",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        markers: false,
    }
});
coverBack.to([".record-cover-back", ".record"], { x: 0, duration: 20 });
