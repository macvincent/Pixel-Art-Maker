//manages the making of the grid
let makeGrid = (evt) => {
    // fix: remove all child nodes of table element before appending row
    evt.preventDefault();
    $('.active table').empty();
    let height = $('.active #inputHeight').val(); // td = height
    let width = $('.active #inputWidth').val(); // tr = width
    let row = `<tr>${'<td></td>'.repeat(width)}</tr>`;

    for (let i = 0; i < height; i++) {
        $('.active table').append(row);
    }
}

//changes color of a grid
let change = (evt) => {
	//for color selection
	let color = $('.active #colorPicker').val();
	$('.active #colorPicker').on('change', function() {
	    color = $(this).val();
	});
    $(evt.target).css('background-color', color);
};

//Move to a different slide
$(".oneb").click(function() {
    $('.active').toggleClass();
    $('#one').toggleClass('active');
    window.scrollTo(0,0);
    let loc = document.getElementById("one").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});
$(".twob").click(function() {
    $('.active').toggleClass();
    $('#two').toggleClass('active');
    window.scrollTo(0,0);
    let loc = document.getElementById("two").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});
$(".threeb").click(function() {
    $('.active').toggleClass();
    $('#three').toggleClass('active');
    window.scrollTo(0,0);
    let loc = document.getElementById("three").getBoundingClientRect();
    window.scrollTo(loc.x,loc.y);
    return false;
});
$('.sizePicker').on('submit', makeGrid);

$('table').on('click', change);