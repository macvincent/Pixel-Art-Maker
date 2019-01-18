//for color selection
let color = $('#colorPicker').val();
$('#colorPicker').on('change',function(){
	color = $('#colorPicker').val();
});
//manages the making of the grid
function makeGrid(evt){
	evt.preventDefault();
	let td;
    let tr;
	td = $('#inputHeight').val();
	tr = $("#inputWidth").val();
	let row = "<tr>";
	for(let i = 0; i < tr; i++){
		row+="<td></td>";
	}
	row+="</tr>";
	let height = "";
	for(let i = 0; i<td; i++){
		$('table').append(row);
	}
}
//changes color of a grid
let change = function(evt) {
	console.log(color);
	$(evt.target).css('background-color',color);
};

$('#tab').on('click',makeGrid);

$('table').on('click',change);