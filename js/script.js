$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

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