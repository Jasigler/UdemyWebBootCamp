//Change the completedness of an item
$("ul").on("click", "li", function (e) { 
    
    $(this).toggleClass("completed");
    
});//End Li Click function


//Delete an itme
$("ul").on("click", "span", function(e) { 
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
      
    e.stopPropagation();//Prevents bubbling to parent items
    
});

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");  //clears the input after addition
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>");
    }
});

$("#toggle-form").toggleClass(function(){
    $("input[type='text']").fadeOut();
}); 

