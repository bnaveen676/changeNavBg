//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader
class changeNavBg {
    changeColor(navigationData) {
        let scrollPostion = $(window).scrollTop();
        if (scrollPostion > navigationData.postionValue) {
            $(navigationData.navigationEle).css('backgroundColor', '#000');
        } else {
            $(navigationData.navigationEle).css('backgroundColor', 'green');
        }
    }

}
//start navigation bar color on scroll
$(window).scroll(() => {
    const changeBg = new changeNavBg;
    changeBg.changeColor({
        postionValue: 100,
        navigationEle: '.navChange'
    });

});
// end navigation bar color on scroll