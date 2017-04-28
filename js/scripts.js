//BUSINESS LOGIC
var quizTotal = function(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer) {
  return (q1Answer + q2Answer + q3Answer + q4Answer + q5Answer + q6Answer + q7Answer + q8Answer);
};

//UI lOGIC
$(document).ready(function() {
  $("div#output").hide();
  $(document).submit(function(event) {
    event.preventDefault();
    $("div#output").slideDown();
    $(".result").hide();
    $("#submitBtn").hide();
    $("#output").addClass("strobe");

//INPUT
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var userHome = $("input#city").val().toLowerCase();
    var q1Answer = parseInt($("select#q1").val());
    var q2Answer = parseInt($("select#q2").val());
    var q3Answer = parseInt($("select#q3").val());
    var q4Answer = parseInt($("select#q4").val());
    var q5Answer = parseInt($("select#q5").val());
    var q6Answer = parseInt($("select#q6").val());
    var q7Answer = parseInt($("select#q7").val());
    var q8Answer = parseInt($("select#q8").val());

    var result = quizTotal(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer);

    var chosenPath = result;
//SHOW RESULT BASED ON USER POINTS
    if (chosenPath >= 8 && chosenPath <= 14) {
      $("#result1").show();
    }
    else if (chosenPath >= 15 && chosenPath <= 21){
      $("#result2").show();
    }
    else if (chosenPath >= 22 && chosenPath <= 28){
      $("#result3").show();
    }
    else if (chosenPath >= 29 && chosenPath <= 34){
      $("#result4").show();
    }
    else {
      $("#result5").show();
    }
//SHOW IF COURSES ARE AVAILABLE NEAR USER
    if (userHome === "portland" || userHome === "seattle") {
      $("span#cityOutput").text("You will not have to commute far!");
    }
    else {
      $("span#cityOutput").text("You may have to move or commute quite a ways in order to attend class.");
    }

//OUTPUT
    $("span#personalOutput").text(firstName + " " + lastName + ", it looks like you should pursue: ");
    $("span#quizResult").text(result);

//ERROR CHECKING
    // console.log(firstName + " " + lastName, typeof(firstName));
    // console.log(userHome, typeof(userHome));
    // console.log(q1Answer, typeof(q1Answer));
    // console.log("Total points from quiz: ", result, typeof(result));
//Trying something new with reloading page
    setTimeout(function() {
      location.reload();
    }, 15000);
  });

});
