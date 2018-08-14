

$(document).ready(function() {
  $("button#open-sentenceProject").click(function(){
    $(".projectOptions").hide();
    $("#sentenceProject").show();
  });
  $("button#open-countingProject").click(function(){
    $(".projectOptions").hide();
    $("#countingProject").show();
  });
  $("button#open-stressQuizProject").click(function(){
    $(".projectOptions").hide();
    $("#stressQuizProject").show();
  });
// <!-- Stess Quiz - combining checke boxes with if branching -->
    $("form#stress_quiz").submit(function(event) {
      event.preventDefault ();
      var count = 0;
      $("#stress-responses").show();
      $("input:checkbox[name=stress-symptom]:checked").each(function(){
        var workTransportationMode = $(this).val();
        count ++;
        console.log("this is howmany stres sso far " + count +".")
        $('.scored').text(count);
      });
      $('#stress_quiz').hide();
      if (count > 7){
        $('#high-stress').show();
      } else if (count > 4){
        $('#medium-stress').show();
      } else if (count > 0){
        $('#low-stress').show();
      };
     });

// <!-- Counting: Count by i and cout to i and then total everything. -->
    $("#formCountingProject").submit(function(event){
        event.preventDefault();
    // THIS IS THE COUNTS BY //
var countTo = parseInt($("#countsTo").val());
var countBy = parseInt($("#countsBy").val());
var runningCount=0;
console.log(countTo + " " + countBy + " " + runningCount);

for (i=0; i < countTo ; i += countBy) {
  runningCount += countBy;
  $("#outputCount").append("<li> " + runningCount + "</li>");
};
});

 //<-- SENTENCE devoweller -->
// $("#formSentenceProject").submit(function(event){
//       event.preventDefault();
//
//
//       words.forEach(function(word)
//       {
//         var wordLength = parseInt(word.length);
//         console.log();
//         if (wordLength >= 4 )
//         {
//           bigWords.push(word);
//         }
//       });
//       // bigWords.reverse();
//       // console.log(bigWords);
//       // answer = bigWords.join(" ");
//       // console.log(answer);
//
//       $("#outputSentence").append("<li> " + bigwords + " </li>")
//     });
  });

// End
