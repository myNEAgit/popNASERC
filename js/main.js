$('.clickable').click(function() {
    var datatarget = $(this).data('target');
    $(datatarget).slideToggle();
    $('.cards').slideToggle();
});
$('.collapse').click(function() {
    $(this).slideToggle();
    $('.cards').slideToggle();
});