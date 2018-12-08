$("h1").click(function(){
	alert("h1 Clicked")
});

$("button").click(function(){
	$(this).css("background", "pink");
	var text = $(this).text();
	console.log("You Clicked " + text );
});

  