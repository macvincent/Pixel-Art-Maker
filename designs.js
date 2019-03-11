//for color selection
let color = $('#colorPicker').val();
$('#colorPicker').on('change', function() {
    color = $(this).val();
});
//manages the making of the grid
let makeGrid = (evt) => {
    // fix: remove all child nodes of table element before appending row
    $('.active > div > table').empty();
    evt.preventDefault();
    let height = $('#inputHeight').val(); // td = height
    let width = $('#inputWidth').val(); // tr = width
    let row = `<tr>${'<td></td>'.repeat(width)}</tr>`;

    for (let i = 0; i < height; i++) {
        $('.active > div > table').append(row);
    }
}

//changes color of a grid
let change = (evt) => {
    $(evt.target).css('background-color', color);
};

//Move to a different slide
$("#oneb").click(function() {
    $('.active').toggleClass('active');
    $('#one').toggleClass('active');
    let loc = document.getElementById("one").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});
$("#twob").click(function() {
    $('.active').toggleClass('active');
    $('#two').toggleClass('active');
    let loc = document.getElementById("two").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});
$("#threeb").click(function() {
    $('.active').toggleClass('active');
    $('#three').toggleClass('active');
    let loc = document.getElementById("three").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});

$('#tab').on('click', makeGrid);

$('table').on('click', change);