$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.nav__left,.nav__right').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('.header__linck2, .header__linck3').hover(function (event) {
        $('.header__linck1').toggleClass('dont');
       });
});



