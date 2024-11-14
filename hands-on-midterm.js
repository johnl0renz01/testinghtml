function openForm() {
	document.getElementById("feedbackForm").style.display = "block";
	document.getElementById("feedbackButton").style.display = "none";
}

function closeForm() {
	validFeedback = false;
	document.getElementById("feedbackForm").style.display = "none";
	document.getElementById("feedbackButton").style.display = "block";
	
	document.getElementById("red").style.opacity = "0";
	document.getElementById("orange").style.opacity = "0";
	document.getElementById("yellow").style.opacity = "0";
	document.getElementById("green-yellow").style.opacity = "0";
	document.getElementById("green").style.opacity = "0";
}

var validFeedback = false;

var cbtns = document.getElementsByClassName("close-button");
var sbtns = document.getElementsByClassName("submit-button");

for (var i = 0; i < cbtns.length; i++) {
	cbtns[i].addEventListener('click', function handleClick(event) {
		const inputs = document.querySelectorAll('#name,#age,#reason,#feedback');
		inputs.forEach(input => {
			input.value = '';
			
			document.getElementById("gender1").checked = false;
			document.getElementById("gender2").checked = false;
			document.getElementById("boolean1").checked = false;
			document.getElementById("boolean2").checked = false;
			document.getElementById("type").selectedIndex = 0;
		});
	});
}
			
for (var i = 0; i < sbtns.length; i++) {
	sbtns[i].addEventListener('click', function handleClick(event) {
		if (validFeedback) {
			alert('Your feedback have been submitted succesfully.');
			closeForm();
			
			const inputs = document.querySelectorAll('#name,#age,#reason,#feedback');
			inputs.forEach(input => {
			input.value = '';
			
			document.getElementById("gender1").checked = false;
			document.getElementById("gender2").checked = false;
			document.getElementById("boolean1").checked = false;
			document.getElementById("boolean2").checked = false;
			document.getElementById("type").selectedIndex = 0;
			
			validFeedback = false;
		});
		} else {
			alert("Please leave a rating before submitting.");
		}
	});
}

function colorRed() {
	validFeedback = true;
	document.getElementById("red").style.opacity = "0.5";
	document.getElementById("orange").style.opacity = "0";
	document.getElementById("yellow").style.opacity = "0";
	document.getElementById("green-yellow").style.opacity = "0";
	document.getElementById("green").style.opacity = "0";
}

function colorOrange() {
	validFeedback = true;
	document.getElementById("red").style.opacity = "0";
	document.getElementById("orange").style.opacity = "0.5";
	document.getElementById("yellow").style.opacity = "0";
	document.getElementById("green-yellow").style.opacity = "0";
	document.getElementById("green").style.opacity = "0";
}

function colorYellow() {
	validFeedback = true;
	document.getElementById("red").style.opacity = "0";
	document.getElementById("orange").style.opacity = "0";
	document.getElementById("yellow").style.opacity = "0.5";
	document.getElementById("green-yellow").style.opacity = "0";
	document.getElementById("green").style.opacity = "0";
}

function colorGreenYellow() {
	validFeedback = true;
	document.getElementById("red").style.opacity = "0";
	document.getElementById("orange").style.opacity = "0";
	document.getElementById("yellow").style.opacity = "0";
	document.getElementById("green-yellow").style.opacity = "0.5";
	document.getElementById("green").style.opacity = "0";
}

function colorGreen() {
	validFeedback = true;
	document.getElementById("red").style.opacity = "0";
	document.getElementById("orange").style.opacity = "0";
	document.getElementById("yellow").style.opacity = "0";
	document.getElementById("green-yellow").style.opacity = "0";
	document.getElementById("green").style.opacity = "0.5";
}

function onlyLetterKey(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) ||key == 8 || key == 32 || key == 45 || key == 39);
};

function onlyNumberKey(evt) {
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}


let area_1 = document.getElementById("area-1");
let area_2 = document.getElementById("area-2");
let area_3 = document.getElementById("area-3");
let area_4 = document.getElementById("area-4");
let area_5 = document.getElementById("area-5");
let area_6 = document.getElementById("area-6");

area_1.addEventListener("mouseover", function( event ) {
  document.getElementById("L").style.opacity = 1;
});

area_1.addEventListener("mouseout", function( event ) {
  document.getElementById("L").style.opacity = 0;
});

area_2.addEventListener("mouseover", function( event ) {
  document.getElementById("O").style.opacity = 1;
});

area_2.addEventListener("mouseout", function( event ) {
  document.getElementById("O").style.opacity = 0;
});

area_3.addEventListener("mouseover", function( event ) {
  document.getElementById("R").style.opacity = 1;
});

area_3.addEventListener("mouseout", function( event ) {
  document.getElementById("R").style.opacity = 0;
});

area_4.addEventListener("mouseover", function( event ) {
  document.getElementById("E").style.opacity = 1;
});

area_4.addEventListener("mouseout", function( event ) {
  document.getElementById("E").style.opacity = 0;
});

area_5.addEventListener("mouseover", function( event ) {
  document.getElementById("N").style.opacity = 1;
});

area_5.addEventListener("mouseout", function( event ) {
  document.getElementById("N").style.opacity = 0;
});

area_6.addEventListener("mouseover", function( event ) {
  document.getElementById("Z").style.opacity = 1;
});

area_6.addEventListener("mouseout", function( event ) {
  document.getElementById("Z").style.opacity = 0;
});