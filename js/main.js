(function () {

    var sideASel = '.js-side-a';
    var sideBSel = '.js-side-b';
    var ram = 'uski';

    var otpad = 3; //dodaje se na duzinu stranice prilikom izracunavanje povrshine stakla

    var bothSidesEntered = function (sideALength, sideBLength) {
        return sideALength !== '' && sideBLength !== '';
    };
    var setRam = function () {
        ram = $(this).val();
        updateResult();
    };

    var updateResult = function () {
        //localStorage.clear();
        //console.log(localStorage.getItem('time'));
        //localStorage.setItem("time", (new Date().getTime()));
        var sideALength = $(sideASel).val();
        var sideBLength = $(sideBSel).val();

        if (bothSidesEntered(sideALength, sideBLength)) {

            var cenaStaklaPoKvadratu = localStorage.getItem('cenaStakla') || cene.stakloPoKvadratu;
            var cenaRamaPoMetru = localStorage.getItem(ram) || cene.ramPoMetru[ram];

            var sideALength = parseFloat(sideALength, 10);
            var sideBLength = parseFloat(sideBLength, 10);

            var obim = sideALength * 2 + sideBLength * 2;
            var povrshina = (sideALength + 3) * (sideBLength + 3);

            var cenaStakla = povrshina * (cenaStaklaPoKvadratu / (100 * 100));
            var cenaRama = obim * (cenaRamaPoMetru / 100);

            //console.log("cena stakla", cenaStakla);
            //console.log("cena rama", cenaRama);

            var cena = cenaStakla + cenaRama;

            $('.content').css("margin-top", "0px");

            //var result =
            //    "Obim: " + obim.toFixed(2) +
            //    " Povrshina: " + povrshina.toFixed(2) +
            //    " Cena: " + cena + " din";

            var result = cena.toFixed(2) + " din";

            $('.result h2').html(result);
        }
    };

    var openPocetna = function (e) {
        e.preventDefault();
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        $(".navbar-toggle").click();
        $('.js-page-cene').addClass("hidden");
        $('.js-page-pocetna').removeClass("hidden");
    };

    var setCene = function() {
        $('.js-cena-stakla').val(localStorage.getItem('cenaStakla') || cene.stakloPoKvadratu);

        $('.js-cena-rama-uski').val(localStorage.getItem('uski') || cene.ramPoMetru.uski);
        $('.js-cena-rama-srednji').val(localStorage.getItem('srednji') || cene.ramPoMetru.srednji);
        $('.js-cena-rama-shiroki').val(localStorage.getItem('shiroki') || cene.ramPoMetru.shiroki);
    };

    var openCene = function (e) {
        setCene();

        e.preventDefault();
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        $(".navbar-toggle").click();
        $('.js-page-pocetna').addClass("hidden");
        $('.js-page-cene').removeClass("hidden");
    };


    var saveCena = function() {
        var cenaStakla = $('.js-cena-stakla').val();

        var cenaRama1 = $('.js-cena-rama-uski').val();
        var cenaRama2 = $('.js-cena-rama-srednji').val();
        var cenaRama3 = $('.js-cena-rama-shiroki').val();

        localStorage.setItem("cenaStakla", cenaStakla);

        localStorage.setItem("uski", cenaRama1);
        localStorage.setItem("srednji", cenaRama2);
        localStorage.setItem("shiroki", cenaRama3);

    };

    $(sideASel).on('input', updateResult);
    $(sideBSel).on('input', updateResult);
    $('.js-ram').on('change', setRam);

    $('.js-menu-item-pocetna').click(openPocetna);
    $('.js-menu-item-cene').click(openCene);

    $('.js-save-cena').click(saveCena);

})();
