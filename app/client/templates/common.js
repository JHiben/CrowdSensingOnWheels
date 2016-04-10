Template.registerHelper('equals', function (a, b) {
    return a == b;
});

Template.registerHelper('momentjs', function (date, format) {
    if (!date || !format) return '';
    return moment(date).format(format);
});