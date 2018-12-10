$("button").click(function(){
	$(this).css("background", "pink");
	var text = $(this).text();
	console.log("You Clicked " + text );
});

/*
$("input").keypress(function (event) { 
	console.log(event);
	if(event.which === 13){
		alert("You hit enter");
	}
});
*/

$("h1").on("click", function () {
	$("h1").css("color", "purple");
});

$("input").on("keypress", function () {
	console.log("keypress!");
});

$("button").on("mouseenter", function () {
	console.log("mouse enter!");
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function () {
	console.log("mouse leave!");
	$(this).css("font-weight", "normal");
});

