gsap.to("#page1 h1",{
    scale : 1.5,
    scrollTrigger :{
        trigger :"#page1 h1",
        markers :  true,
        start : "top 25%",
        end : "top 0%",
        pin : true,scrub : 3
    }
})
gsap.to("#page2 .box",{
    scale :.5,
    scrollTrigger :{
        trigger : "#page2 .box",
        markers : true,
        start : "top 50%",scrub :3,
        end : "top -50%",
        pin : true
    }
})