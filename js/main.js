$(window).ready(function() {
    

    gsap.to(".s1 .img-wrap", {
        scrollTrigger : {
            trigger : ".s1 .img-wrap",
            start : "top top",
            end : "100% top",
            pin: true,
            pinSpacing : false,
        }
    })

    var expandEnd = $(".s1 .img-wrap .img").offset().top;
    gsap.to(".s1 .img-wrap .img", {
        scrollTrigger : {
            trigger : ".s1",
            start : "top top",
            end : `${expandEnd} top`,
            scrub : true,
        },
        width : "100%",
    });

    gsap.to(".s1 .img-wrap .img .img-alpha-cover", {
        scrollTrigger : {
            trigger : ".s1",
            start : "top top",
            end : `${expandEnd} top`,
            scrub : true,
        },
        alpha: 0.5
    });

    
    AOS.init();

    
})