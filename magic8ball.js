// randomizer using math random that chooses yes, no, maybe, not a chance, try harder
// parsint && || 
// use if elseif else within while loop
//displays it in the middle of 8 ball

//prompt welcome to magic 8 ball yay

// form to keep clicking the game



// object.addEventListener("click", myScript);

// object.onclick=function(){myScript};

// <button onclick="getElementById('demo').innerHTML=Date()">What is the time?</button>


// var question = document.getElementById("question");
// var output = document.getElementById("output");
// var show = question.value;
// output.value = question;

// function validateForm() {
//     var x = document.forms["myForm"]["question"].value;
//     if (x == null || x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

var clicker = function(){
	var question = document.getElementById("question");
	var output = document.getElementById("output");
	var show = question.value;
	// output.value = question;
	var output;
	var answerArray = ["Yes", "No", "Maybe", "Not a Chance", "Try Harder"];
	var randomizer = Math.random();
   var x = document.forms["myForm"]["question"].value;
	    if (x == null || x == "") {
	        output = "Please enter question";
	        
	    }
		else if (randomizer < 0.2) {
			output = answerArray[0];
		}
		else if (randomizer > 0.2 && randomizer <= 0.4) {
			output = answerArray[1];
		}
		else if (randomizer > 0.4 && randomizer <= 0.6) {
			output = answerArray[2];
		}
		else if (randomizer > 0.6 && randomizer <= 0.8) {
			output = answerArray[3];
		}
		else output = answerArray[4];
	
	
	console.log(output);
	$('#output').text(output);
	return output;
};




// $( "#output" ).click(function() {
//   $('#output').text(clicker());
// });

// $(document).ready(function() {
//     $("#question").validate({
//                 rules: {
//                     q: "required",
                   
//                     },
//                     messages: {
//                     	q: "Please enter your question"
//                     }});
// clicker();
// object.addEventListener("click", clicker());
// document.getElementById("innercircle").innerHTML = clicker();
// $('#innercircle').text(clicker());


//while( !(input = prompt('write something...')) ){