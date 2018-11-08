if (jQuery) {
	alert("jQuery Connected");
} else {
	alert("jQuery Not Connected");
}

//Returns text content of element
// Returns text in one string
$("h1").text()
$("ul").text()
$("li").text()

//Modifies text
$("h1").text("This new text")

//Gets html content
$("ul").html();

//Get html content of first element
$("ul").html("<li> I hacked your UL </li>");