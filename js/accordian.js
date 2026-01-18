$(function() {
    $('.accordian-item').on('click',function() {
        $(this).next('.accordian-details').slideToggle();
        $(this).find('.open').toggle();
        $(this).find('.close').toggle();
    });
});