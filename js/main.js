(function () {

    var updateResult = function () {
        var sideA = $('.js-side-a').val();
        var sideB = $('.js-side-b').val();

        if (sideA !== '' && sideB !== '') {

            var sideA = parseFloat(sideA, 10);
            var sideB = parseFloat(sideB, 10);

            var obim = sideA * 2 + sideB * 2;
            var povrshina = sideA * sideB;

            $('.content').css("margin-top", "0px");
            $('.result h1').html("Obim: " + obim.toFixed(2) + " Povrshina: " + povrshina.toFixed(2));
        }
    };

    $('.js-side-a').on('keyup', updateResult);
    $('.js-side-b').on('keyup', updateResult);

})();