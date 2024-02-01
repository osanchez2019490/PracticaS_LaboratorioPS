document.addEventListener("DOMContentLoaded", function(){
    var headerHeight = document.querySelector("header.hero").offsetHeight;
    var nav = document.querySelector('nav.nav');

    document.body.addEventListener ("click", function(){
        window.scrollTo({ top: 0, behavior:'smooth'});
        return false;
    });

    window.addEventListener("scroll", function(){
        console.log("scrollTop: "+ window.scrollY);
        console.log("headerHeight: " + headerHeight);
        if (window.scrollY > headerHeight) {
            document.body.classList.add('nav-fixed-top');
            nav.classList.add('nav-fixed-top');
        }else{
            document.body.classList.remove('nav-fixed-top');
            nav.classList.remove('nav-fixed-top');
        }
    });

});
