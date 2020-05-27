// $(document).ready(function() {
//     // .addClass and .click
//     $('button.addClass').click(function () {
//         $('p.addClass').addClass('red');
//     })
//     // .after
//     $('button.after').click(function() {
//         $('p.after').after('   <i>I am now after the paragraph!</i>')
//     })
//     // .append
//     $('button.append').click(function() {
//         $('p.append').append('   <b>...I am now appended. And another thing...!</b>')
//     })
//     // .attr
//     $('button.attr').click(function() {
//         $('img.attr').attr('alt', 'cat');
//     })
//     // .before
//     $('button.before').click(function() {
//         $('p.before').before('<i>I am now before the paragraph!</i>   ')
//     })
//     // .data
//     $('button.data1').click(function() {
//         $('div.data').data('greeting', 'Hello World!');
//     })
//     $('button.data2').click(function() {
//         alert($('div.data').data('greeting'));
//     })
//     // .fadeIn and .fadeOut
//     $('button.fadeout').click(function() {
//         $('p.fadeTarget').fadeOut(1800);
//     })
//     $('button.fadein').click(function() {
//         $('p.fadeTarget').fadeIn(1800);
//     })
//     // .hide and .show
//     $('button.hide').click(function() {
//         $('p.hideShowTarget').hide();
//     })
//     $('button.show').click(function() {
//         $('p.hideShowTarget').show();
//     })
//     // .html 
//     $('button.html').click(function(){
//         $('p.html').html('<b>I am <i>brand new</i> text</b>')
//     })
//     // .slideDown and .slideUp
//     $('button.slideUp').click(function() {
//         $('p.slideTarget').slideUp();
//     })
//     $('button.slideDown').click(function() {
//         $('p.slideTarget').slideDown();
//     })
//     // .slideToggle
//     $('button.slideToggle').click(function() {
//         $('#shrug').slideToggle('slow');
//     })
//     // .text
//     $('button.text').click(function() {
//         $('p.text').text('I am brand new text!');
//     })
//     // .toggle
//     $('button.toggle').click(function() {
//         $('p.toggle').toggle();
//     })
//     // .val
//     $('button.val').click(function() {
//         $('input:text').val('Tennessee Tuxedo');
//     })
// })