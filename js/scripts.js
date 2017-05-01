//BUSINESS LOGIC

//UI lOGIC
$(document).ready(function() {
  $("div#output").hide();
  $(document).submit(function(event) {
    event.preventDefault();
    $("div#output").slideDown();
    $(".result").hide();
    // $("#submitBtn").hide();
    $("#output").addClass("strobe");

//INPUT
    // var firstName = $("input#firstName").val();
    // var lastName = $("input#lastName").val();
    // var userHome = $("input#city").val().toLowerCase();

    var quizResults = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];

    var userInfo = ["firstName", "lastName", "city"];

    console.log(userInfo[0]);

    var result = 0;
    quizResults.forEach(function(quizResult) {
      var userInput = parseInt($("select#" + quizResult).val());
      $(".quizResult").text(result);

      result += userInput;
      // console.log(result);
    });

    var userArray = [];

    userInfo.forEach(function(info){
      var user = $("input#" + info).val().toLowerCase();
      userArray.push(user);
    });

    $("span#personalOutput").text(userArray[0].substring(0,1).toUpperCase() + userArray[0].substring(1) + " " + userArray[1].substring(0,1).toUpperCase() + userArray[1].substring(1) + ", it looks like you should pursue: ");
    console.log(userArray[2]);
    if(userArray[2] === "portland" || userArray[2] === "seattle"){
      console.log("true")
        $("span#cityOutput").text("You will not have to commute far!");
    } else {
      console.log("false");
      $("span#cityOutput").text("You may have to move or commute quite a ways in order to attend class.");
    }

//
    var chosenPath = result;
//SHOW RESULT BASED ON USER POINTS
    if (chosenPath >= 7 && chosenPath <= 14) {
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


//OUTPUT



//ERROR CHECKING
    // console.log(firstName + " " + lastName, typeof(firstName));
    // console.log(userHome, typeof(userHome));
    // console.log(q1Answer, typeof(q1Answer));
    // console.log("Total points from quiz: ", result, typeof(result));
//Trying something new with reloading page
    // setTimeout(function() {
    //   location.reload();
    // }, 15000);
  });

});
