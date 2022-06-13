// Burger
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// -----------------

// Tabs
let tabs = document.querySelectorAll('.tabs .tab-btn');
let tabContents = document.querySelectorAll('.tab-content .tab-option');

tabs.forEach((tab,index) => {
    tab.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.classList.remove('_tab-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('_tab-active');
        });
        tabContents[index].classList.add('_tab-active');
        tabs[index].classList.add('_tab-active');
    });
});
// ----------------

// Spoiler
$(document).ready(function() {
    $('.spoiler-block__title').click(function(event) {
        if($('.spoiler-block').hasClass('one')) {
            $('.spoiler-block__title').not($(this)).removeClass('active');
            $('.spoiler-block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
// ---------------