$(()=>{

    const navHeight = $('nav').offset().top;
    console.log(navHeight);
    
    function stickyNav() {
        const scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if(scrollTop > navHeight) {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
        
    }
    stickyNav();

    $(window).scroll(()=> {
        stickyNav();
    });
});