(function () {

    focused = undefined

    $('.js-side-a').click(function () {
        focused = $(this);
    });
    $('.js-side-b').click(function () {
        focused = $(this);
    });

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

    $('.js-comma').click(function () {
        if (typeof focused !== "undefined" && (focused.attr('class') === 'side js-side-a' || focused.attr('class') === 'side js-side-b')) {
            var val = focused.val()
            focused.val(val + ".1");
            focused.focus();
        }
    });

    $('.js-side-a').on('keyup', updateResult);

    $('.js-side-b').on('keyup', updateResult);

})();