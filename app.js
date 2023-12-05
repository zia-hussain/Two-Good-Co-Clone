// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function locoMotiveAnimations(){
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
locoMotiveAnimations()


function navbarAnimation(){
   gsap.to('#nav-part1 svg',{
      transform:'translatey(-100%)',
      duration:1,
      scrollTrigger:{
         trigger:"page1",
         scroller:"#main",
         start:"top 0",
         end:"top -5%",
         scrub:1
      }
   })
   gsap.to('#nav-part2 #links',{
      transform:'translatey(-100%)',
      opacity:0,
      scrollTrigger:{
         trigger:"page1",
         scroller:"#main",
         start:"top 0",
         end:"top -5%",
         scrub:1
      }
   })
}
navbarAnimation()


function videoconAnimation(){
    let videoCon = document.querySelector("#video-container");
let playBtn = document.querySelector("#play");
videoCon.addEventListener('mouseenter',function(){
   gsap.to(playBtn,{
    scale:1,
    opacity:1
   });
   
});

videoCon.addEventListener('mouseleave',function(){
    gsap.to(playBtn,{
     scale:0,
     opacity:0
    });
    
 });

 videoCon.addEventListener('mousemove',function(dets){
    gsap.to(playBtn,{
    
    left:dets.x - 70 + "px",
    top:dets.y - 70 + "px",
    });
    
 })
}
videoconAnimation()


function loadingAnimation(){
   gsap.from("#nav-part1",{
      y:-100,
      opacity:0,
      // delay:0.2,
      duration:1,
      stagger:0.3
   })
   gsap.from("#nav-part2",{
      y:-100,
      opacity:0,
      delay:0.2,
      duration:1,
      stagger:0.3
   })
 gsap.from("#firsth1",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.5,
    stagger:0.3
 })
  gsap.from("#secondh1",{
    y:100,
    opacity:0,
    delay:0.8,
    duration:0.5,
    stagger:0.3
 }) 
 gsap.from("#page1 #video-container",{
    scale:1.2,
    y:100,
    opacity:0,
    delay:1.2,
    duration:0.5,
    stagger:0.3
 }) 


}
loadingAnimation()


function cursorAnimation(){
   document.addEventListener("mousemove",function(dets){

      gsap.to('#cursor',{
         left:dets.x,
         top:dets.y
      })
   
   })
   
   document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mousemove" ,function (){
         gsap.to("#cursor" , {
       transform: 'translate(-50%,-50%) scale(1)'
            
         })
      });
      elem.addEventListener("mouseleave" ,function (){
         gsap.to("#cursor" , {
       transform: 'translate(-50%,-50%) scale(0)'
            
         })
      });
   })
   
}
cursorAnimation()





 