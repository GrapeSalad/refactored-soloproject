//Business logic
var quizTotal = function(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer) {
  return (q1Answer + q2Answer + q3Answer + q4Answer + q5Answer + q6Answer + q7Answer + q8Answer);
};

//UI logic
$(document).ready(function() {
  $(document).submit(function(event) {
    event.preventDefault();
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();
    $("#result5").hide();

//INPUT
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
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


//OUTPUT
    $("span#personalOutput").text("Well, " + firstName + " " + lastName + ", it looks like you have to pursue: ");
    $("span#quizResult").text(result);

//ERROR CHECKING
    // console.log(firstName + " " + lastName, typeof(firstName));
    // console.log(q1Answer, typeof(q1Answer));
    // console.log(q2Answer, typeof(q2Answer));
    // console.log(q3Answer, typeof(q3Answer));
    // console.log(q4Answer, typeof(q4Answer));
    // console.log(q5Answer, typeof(q5Answer));
    // console.log(q6Answer, typeof(q6Answer));
    // console.log(q7Answer, typeof(q7Answer));
    // console.log(q8Answer, typeof(q8Answer));
    console.log("Total points from quiz: ", result, typeof(result));
  });
});
