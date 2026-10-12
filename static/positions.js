$(function () {
    let count = 64;

    $('#card').on('change', function () {
        $('#position').attr('src', '');

        if (!$('#card')[0].checked) {
            let num = Math.floor(Math.random() * count) + 1;
            let img = String(num).padStart(3, '0');

            $('#position').attr(
                'src',
                '/images/cards/' + img + '.jpg'
            );
        }
    });
});
