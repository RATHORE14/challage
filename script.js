function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

document.querySelector("#page1 .t").addEventListener("mouseenter",function(){
    document.querySelector("#page1 .t h1").style.top = "-100%"
})

document.querySelector("#page1 .t").addEventListener("mouseleave",function(){
    document.querySelector("#page1 .t h1").style.top = "0%"
})

gsap.from("#page1 h3",{
    scrollTrigger : {
        trigger : "#page1 h3",
        start : "top 30%",
        // markers : true,
        scroller : "#main",
        scrub : 3
    },
    y : 70,
    opacity : 0,
    stagger : .2,
    duration : 1,
})

gsap.to("#vd",{
    scrollTrigger :{
        trigger : "#page1 #vd",
        scroller : "#main",
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
        scroller : "#main",
        // markers : true,
        start: "top 65%",
        scrub : true,
    }
})

gsap.to("#page3 .vd2",{
   width : "430px",
   height: "430px",
    scrollTrigger :{
        trigger : "#page3 .vd2",
        scroller : "#main",
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
         scroller : "#main",
        //  markers : true,
         start: "top 55%",
         end : "top 30%",
         scrub : true,
     }
 })
  gsap.to("#page5 img",{
    x : -200,
    scrollTrigger :{
        trigger : "#page5",
        scroller : "#main",
        // markers : true,
        start: "top 55%",
        scrub : true,
    }
  })


  gsap.to("#page6 .v .mover",{
    transform : "translateX(20%)",
    scrollTrigger :{
        trigger : "#page6 .v h1",
        scroller : "#main",
        // markers : true,
        start: "top 45%",
        scrub : true,
    }
})
gsap.to("#page6 .v .moverr",{
    transform : "translateX(-20%)",
    scrollTrigger :{
        trigger : "#page6 .v h1",
        scroller : "#main",
        // markers : true,
        start: "top 45%",
        scrub : true,
    }
})
