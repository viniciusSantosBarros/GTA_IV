gsap.registerPlugin(ScrollTrigger);

/* Desktop */
const mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 2,
        }})

    tl.fromTo(".secao1", 
        {maskSize: "6230vw"},
        {maskSize: "25vw", duration:1})
    
    tl.to(".secaoBranca",
        {backgroundColor: "white"}, "<0.5")

    tl.fromTo(".secao3",
        {maskSize: "0vw", filter: "blur(2px)"},
        {maskSize: "125vw", filter: "blur(0px)"}, ">0.1")
})

/* Tablet e Mobile */
mm.add("(max-width: 991px)", () => {

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#hero",
            start: "top top",
            end: "+=2000",
            scrub: 2,
            pin: true,

        }});

    tl.fromTo(".secao1", 
        {maskSize: "6220vw"}, 
        {maskSize: "45vw", duration: 1})

    tl.to(".secaoBranca",
        {backgroundColor: "white"}, "<0.5")

    tl.fromTo(".secao3", 
        {maskSize: "0vw", filter: "blur(0.5x)"}, 
        {maskSize: "250vw", filter: "blur(0px)"}, ">0.1")
})
