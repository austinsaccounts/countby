







$(document).ready(function() {
  $("#formInputs").submit(function(event){
    event.preventDefault();
    // THIS IS THE COUNTS BY //
// var countTo = parseInt($("#countsTo").val());
// var countBy = parseInt($("#countsBy").val());
// var runningCount=0;
// console.log(countTo + " " + countBy + " " + runningCount);

// for (i=0; i < countTo ; i += countBy) {
//   runningCount += countBy;
//   $("#output").append("<li> " + runningCount + "</li>");
// };
// ================================


//This is devoweler
var sentenceInputted = $("#sentenceInput").val();
console.log(sentenceInputted);

var vowels = ["a", "e", "i", "o", "u"];
var res = sentenceInputted;

for(var i=0; i < vowels.length; i ++){
  var resArray = res.split(vowels[i]);
  res = resArray.join(" ");

  console.log(res);
}
alert(res);


  })
})
