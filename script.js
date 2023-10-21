// gsap.to("#box",{
//     x: 900,
//     y: 300
//     duration: 5,
//     delay: 2,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.2,

// })

// gsap.from("#box",{
//     x: 900,
//     y: 300,
//     duration: 5,
//     delay: 2,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale: 0.2,

// })

// gsap.to("h1",{
//     x: 1700,
//     color: "blue",
//     duration: 2,
//     delay: 1,
//     stagger: 1,
//     repeat: -1,
//     yoyo: true,
// })

var tl = gsap.timeline();

tl.to("h1",{
    x: 1200,
    color: "blue",
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
});
tl.to("h2",{
    x: 1200,
    color: "blue",
    duration: 2,
    delay: 1,
});
tl.to("h3",{
    x: 1200,
    color: "blue",
    duration: 2,
    delay: 1,
});