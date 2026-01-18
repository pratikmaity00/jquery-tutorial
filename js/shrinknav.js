$(()=>{

    // const navHeight = $('nav').offset().top;
    const navHeight = 100;
    console.log(navHeight);
    
    function stickyNav() {
        const scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if(scrollTop > navHeight) {
            $('nav').css({padding:'15px',backgroundColor:'black',boxShadow:'0 0 8px black'})
        }else {
            $('nav').css({padding:'40px',backgroundColor:'rgba(82, 80, 80, 0.331)'})
        }
        
        
    }
    stickyNav();

    $(window).scroll(()=> {
        stickyNav();
    });
});