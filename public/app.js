$(document).ready(function($) {
    $(document).on('click', '.artist-row', function() {
        window.open($(this).data('href'), '_blank');
    });
});
