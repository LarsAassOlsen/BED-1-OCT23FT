$(function() {
    $('#onButton').click(function() {
        $('p').css('font-size', '30px')
    });
    $('#offButton').click(function() {
        $('p').removeAttr('style')
    });

});