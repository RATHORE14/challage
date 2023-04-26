

gsap.to("#vd",{
    width : "80%",
    scrollTrigger :{
        trigger : "#page1 #vd",
        scroller : "body",
        // markers : true,
        start: "top 65%",
        // pin: true,/
        scrub : true,
    }
})
gsap.to("#page2 #txt .move",{
    transform : "translateX(-20%)",
    scrollTrigger :{
        trigger : "#page2 #txt",
        scroller : "body",
        // markers : true,
        start: "top 65%",
        // end : "top 80%",
        scrub : true,
    }
})

gsap.to(".vd2",{
    scrollTrigger:{
        trigger : ".vd2",
        start : " top 20%",
        end : "top 100%",
        markers : true,
        scrub : true,
        pin : true
    }
})