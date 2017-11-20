$('.demoMain').on('click', function (e) {
    ($(e.target)[0].tagName == 'H2' || $(e.target)[0].tagName == 'H3') ? $(e.target).next().toggle(500) : false;
})