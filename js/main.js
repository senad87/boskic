(function () {

    var sideASel = '.js-side-a';
    var sideBSel = '.js-side-b';

    var bothSidesEntered = function (sideALength, sideBLength) {
        return sideALength !== '' && sideBLength !== '';
    };

    var updateResult = function () {
        var sideALength = $(sideASel).val();
        var sideBLength = $(sideBSel).val();

        if (bothSidesEntered(sideALength, sideBLength)) {

            var sideALength = parseFloat(sideALength, 10);
            var sideBLength = parseFloat(sideBLength, 10);

            var obim = sideALength * 2 + sideBLength * 2;
            var povrshina = sideALength * sideBLength;

            $('.content').css("margin-top", "0px");
            $('.result h1').html("Obim: " + obim.toFixed(2) + " Povrshina: " + povrshina.toFixed(2));
        }
    };

    $(sideASel).on('keyup', updateResult);
    $(sideBSel).on('keyup', updateResult);

})();