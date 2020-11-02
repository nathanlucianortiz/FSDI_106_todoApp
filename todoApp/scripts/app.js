// var that doesn't need from html can go outside of fn
//if needed something from html, place inside function
var exhangeRate = 21;

    //set the text on the input 
    //var input = document.getElementById("todoText");
    //input.value = "Hello there";

    // $("#todoText").val("Hello there!"); it wil write if you pass a parameter

    // console.log($("#todoText").val()); it will read if you don't


    // $("todoText").val(""); clears the text


function addTodo(){
    var text = $("#todoText").val(); // read the text
    $("#todoText").val(''); // clear

    // create an li w/the text
    var li = "<li>"+ text +"</li>";
    $("#pendingList").append(li);

    // trigger focus on the input (after entering li item)
    $("#todoText").focus();

}

function init(){
    // catch events
    $("#btnAdd").click(addTodo);

}


// event that gets executed only after the browser finishes rendering ALL html
// pass a fn name
window.onload = init;