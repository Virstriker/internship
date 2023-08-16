let c = 1;
function menu(){
    let a = document.getElementById("menu1");
    let b = document.getElementById("menu");

    if(c%2 == 0){
        b.style.display = "none";
    }else if(c%2 == 1){
        b.style.display = "block";
    }
    c++;
    console.log(c);
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 4000,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})