$(document).ready(function(){
    var delay=1000, setTimeoutConst;
    var changeImg = function(){
        var $this = $(this);
        var funnyImg = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', funnyImg);
    };
    $(function(){
        $('img.change').hover(changeImg, changeImg);
        clearTimeout(setTimeoutConst);
    });
});