(function () {

    var updateResult = function () {
        var sideA = $('.js-side-a').val();
        var sideB = $('.js-side-b').val();

        if (sideA !== '' && sideB !== '') {

            var sideA = parseFloat(sideA, 10);
            var sideB = parseFloat(sideB, 10);

            var result = sideA * 2 + sideB * 2
            $('.result h1').html(result.toFixed(2));
        }
    };

    $('.js-side-a').on('keyup', updateResult);

    $('.js-side-b').on('keyup', updateResult);

})();