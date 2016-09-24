$('#dot').on("click", function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#dot'),
        divWidth = $div.width(),
        divHeight = $div.height();

    $div.css({
        left: Math.floor( Math.random() * docWidth ),
        top: Math.floor( Math.random() * docHeight )
    });
});
