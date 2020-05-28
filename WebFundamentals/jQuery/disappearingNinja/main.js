$(document).ready(function(){
    $('.deWay img').click(function(){
        $(this).css('visibility', 'hidden');
    });
    $('button.restore').click(function(){
        $('.deWay img').css('visibility', 'visible');
    });
});