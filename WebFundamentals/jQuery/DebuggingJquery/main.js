$('p, h3, li').hoverfunction(){
    $(this).css('color', 'white');
}, function(){
    $(this).css('color', 'black');
});

$('a').click(function(){
    alert("we don't actually serve pizza...");
});

$('img').click(function(){
    $(this).slideUp();
);

$('h5').click(function(){
    $('img').slide Down();
});

$('button').click(function(){
    var result = $('input:checked').value()  
    alert("Thank you for your input, we like " + result + " too!");
});