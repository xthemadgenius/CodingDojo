$(document).ready(function(){
    var changeImg = function(){
        var dis = $(this);
        var funImg = dis.data('alt-src');
        dis.data('alt-src', dis.attr('src'));
        dis.attr('src', funImg);
    };
    $(function(){
        $('img.change').hover(changeImg, changeImg);
    });
    //!!!! DE Second Way !!!!!\\
    
    // $('img').hover(function(){
    //     var src = $(this).attr("src");
    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", src);
    // },
    // function(){
    //     var src = $(this).attr("src");
    //     $(this).attr("src", $(this).attr("data-alt-src"));
    //     $(this).attr("data-alt-src", src);
    // });
});