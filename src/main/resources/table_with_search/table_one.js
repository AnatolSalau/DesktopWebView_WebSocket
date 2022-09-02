
$('.table td').resizable({
    resize: function(event,ui) {
        var col = $(this).index()+1;
        $(this).closest('table').find('tr td:nth-child('+col+')').width(ui.size.width);
        $(this).parent().find('td').height(ui.size.height);
    }
});
