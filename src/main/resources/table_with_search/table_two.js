$(document).ready(function() {
/*    $('[data-toggle="tooltip"]').tooltip();*/
    $('table.resizable').resizableColumns();
})

function toggleProfile() {
    if ($('#profile').height() == 0) {
        $('#profile').height(285);
    } else {
        $('#profile').height(0);
    }
}