//for color selection
let color = $('#colorPicker').val();
$('#colorPicker').on('change', function() {
    color = $(this).val();
});
//manages the making of the grid
let makeGrid = (evt) => {
    // fix: remove all child nodes of table element before appending row
    $('table').empty();
    evt.preventDefault();
    let height = $('#inputHeight').val(); // td = height
    let width = $('#inputWidth').val(); // tr = width
    let row = `<tr>${'<td></td>'.repeat(width)}</tr>`;

    for (let i = 0; i < height; i++) {
        $('table').append(row);
    }
}

//changes color of a grid
let change = (evt) => {
    console.log(color);
    $(evt.target).css('background-color', color);
};

$('#tab').on('click', makeGrid);

$('table').on('click', change);