(function(){

    var updateResult = function() {
        var sideA = parseFloat($('.js-side-a').val(), 10);
        var sideB = parseFloat($('.js-side-b').val(), 10);

        var result = sideA * 2 + sideB * 2
        $('.result h1').html(result.toFixed(2));
    };

    $('.js-side-a').on('keyup', updateResult);

    $('.js-side-b').on('keyup', updateResult);

})();