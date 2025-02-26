Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  
  Shery.imageMasker(".mask-target" /* Element to target.*/, {
      //Parameters are optional.
      mouseFollower: true,
      text: "Nexus",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    
      Shery.imageEffect(".images", {
        style: 4,
        slideStyle: (setScroll) => {
          window.addEventListener("scroll", () => {
            setScroll(window.scrollY / innerHeight); //Updating the scroll
          });
        },
      });

      Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });















  gsap.to("#pages", {
    scrollTrigger: {
      trigger: "#pages",
      pin: true, // This keeps the element fixed while scrolling
      start: "top top", // When the top of .box reaches the top of the viewport
      end: "+=2000",
      scrub: true,
    }
  });

  gsap.to(".images", {
  scale: 2,
  duration: 3,
  
  scrollTrigger: {
    trigger: "#pages",
    start: "top 60%",
    toggleActions: "play none none reverse",
    scrub:true,
  }
  });

  



  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".bg-zinc-300", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      scrollTrigger: {
          trigger: ".bg-zinc-300",
          start: "top 80%",
          toggleActions: "play none none reverse"
      }
  });


  gsap.to("#progress-bar", {
    scrollTrigger: {
        trigger: ".step",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true
    },
    height: "100%",
    ease: "none"
});

// Animate steps appearing
gsap.utils.toArray(".step").forEach((step, index) => {
    gsap.to(step, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            scrub: true
        }
    });
});

gsap.utils.toArray(".social-icon img").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
      gsap.to(icon, { scale: 1.3, duration: 0.3, ease: "power2.out" });
  });
  icon.addEventListener("mouseleave", () => {
      gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

gsap.to(".team-card", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".container",
      start: "top 85%",
      toggleActions: "play none none none"
  }
});


gsap.utils.toArray(".icon").forEach(icon => {
  gsap.to(icon, {
      y: "random(-30, 30)",
      x: "random(-30, 30)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
  });
});
