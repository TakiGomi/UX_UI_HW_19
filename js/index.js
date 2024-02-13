/* test console below */

console.log("Your index.js file is loaded correctly, Taki great job!");

/* Nabigation Hover 
$(".navAbout").mouseover(function(){
    $(".navAbout").css("scale", 200%);
}); 


$(".navAbout").on("click", function(){
    $(".fadeMe").fadeToggle("slow");
});


// Step 2: Change a color
$('#button2').on("click", function(){
  $('.cssChange').css("background-color","red");
});

$(document).ready(function(){
    $(".myName").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });

$("#navAbout").on("mouseenter", function(){
$("#navAbout").css("color", "#136D5D" ),
});

$("#navAbout").on("mouseleave", function(){
  $("#navAbout").css("color", "#C3F5E4" );
  });
  

 
    $("a[target='navAbout']").on("mouseenter", function(){
      $("a[target='navAbout']").css("color", "black");
    });
    */

  $(".resume").on("mouseover", function(){
    $(".resume").css("color", "yellow");
    $(".resume").css("background-color", "black");
  });
  $(".resume").on("mouseleave", function(){
    $(".resume").css("color", "black");
    $(".resume").css("background-color", "pink");
  });
