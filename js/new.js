$(function(){
    $('.fadeOut').on('click',function() {
        $('.para').fadeOut(2000);
    });
    $('.fadeIn').on('click',function() {
        $('.para').fadeIn(2000);
    });
    $('.fadeToggle').on('click',function() {
        $('.para').fadeToggle(2000);
    });

    $('img').on({
        mouseover: function() {
            $(this).fadeTo(1000,0.5);
        },
        mouseleave: function() {
            $(this).fadeTo(1000,1);
        }
    });

    // slide
    $('.para1').hide();
    $('.slideDown').on('click',function(){
        $('.para1').slideDown(2000);
    });
    $('.slideUp').on('click',function(){
        $('.para1').slideUp(2000);
    });
    $('.slideToggle').on('click',function(){
        $('.para1').slideToggle(2000);
    });

    $('.content').hide();
    $('.item1 .off').hide();
    $('.item2 .off').hide();

    $('.item1').on('click',function(){
        $('.content1').slideToggle(2000);
        
        
        $('.item1 .off').show();
        $('.item1 .on').hide();
    })
    $('.item2').on('click',function(){
        $('.content2').slideToggle(2000);
        $('.item2 .off').toggle();
        $('.item2 .on').toggle()
    })
});