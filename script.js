
gsap.to("#vd",{
    scrollTrigger :{
        trigger : "#page1 #vd",
        scroller : "body",
        // markers : true,
        start: "top 65%",
        end :"top 25%",
        scrub : true,
    },
    width : "85%",
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

gsap.to("#page3 .vd2",{
   width : "430px",
   height: "430px",
    scrollTrigger :{
        trigger : "#page3 .vd2",
        scroller : "body",
        // markers : true,
        start: "top 55%",
        end : "top 30%",
        scrub : true,
    }
})
gsap.to("#page3 .vd2 video",{
    width : "300px",
    height : "300px",
    duration : .5,
     scrollTrigger :{
         trigger : "#page3 .vd2",
         scroller : "body",
        //  markers : true,
         start: "top 55%",
         end : "top 30%",
         scrub : true,
     }
 })