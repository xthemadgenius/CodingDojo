$(document).ready(function() {
    // .addClass and .click
    $('button.addClass').click(function () {
        $('p.addClass').addClass('red');
    })
    // .hide and .show
    $('button.hide').click(function() {
        $('p.hideShow').hide();
    })
    $('button.show').click(function() {
        $('p.hideShow').show();
    })
    // .toggle
    $('button.toggle').click(function() {
        $('p.toggle').toggle();
    })
    // .slideDown and .slideUp
    $('button.slideUp').click(function() {
        $('p.slideUpDown').slideUp();
    })
    $('button.slideDown').click(function() {
        $('p.slideUpDown').slideDown();
    })
    // .slideToggle
    $('button.slideToggle').click(function() {
        $('#sToggle').slideToggle('slow');
    })
    // .fadeIn and .fadeOut
    $('button.fadeOut').click(function() {
        $('p.fadeInOut').fadeOut(1800);
    })
    $('button.fadeIn').click(function() {
        $('p.fadeInOut').fadeIn(1800);
    })
    // .before
    $('button.before').click(function() {
        $('p.before').before('<i>I dont hate because youre fat, youre fat because I hate you....</i>\n')
    })
    // .after
    $('button.after').click(function() {
        $('p.after').after('\n<i>I AM IRON MAN!!!</i>\n')
    })
    // .append
    $('button.append').click(function() {
        $('p.append').append('\n<b>I dont code I google things!!!!!!!</b>\n')
    })
    // .html 
    $('button.html').click(function(){
        $('p.html').html('<b>I am <i>all the Code</i> that you need</b>')
    })
    // .attr
    $('button.attr').click(function() {
        $('img.attr').attr('alt', 'Bob-Ross');
    })
    // .val
    $('button.val').click(function() {
        $('input:text').val('Geeks Rule in Las Vegas');
    })
    // .text
    $('button.text').click(function() {
        $('p.text').text('I promise babe, I changed');
    })
});