$('#answer-buttons').hide();
$(document).ready(function(){

var triviaQuestions = {
	firstQ: {
		Q: "What part of the cow does the Sirloin cut come from?",
		Answer: ["Flank", "Ribs","Hindquarter", "Shank"],	
	},
	secondQ: {
		Q: "What is the minimum safe internal temperature (F) of Chicken to eat at?",
		Answer: ["150", "190","210", "165"],
	},
	thirdQ: {
		Q: "What is better than a slow cooked smoked brisket?",
		Answer: ["Nothing", "Pork Ribs","Fried Chicken", "Smoked Salmon"],
	},
	fourthQ: {
		Q: "At what degree of doneness should you NOT eat steak at?",
		Answer: ["Medium Rare", "Well Done","Rare", "Medium"],
	},
};


var firstQuestion = triviaQuestions.firstQ.Q	
var firstQAnswer = triviaQuestions.firstQ.Answer

var secondQuestion = triviaQuestions.secondQ.Q
var secondQAnswer = triviaQuestions.secondQ.Answer

var thirdQuestion = triviaQuestions.thirdQ.Q
var thirdQAnswer = triviaQuestions.thirdQ.Answer

var fourthQuestion = triviaQuestions.fourthQ.Q
var fourthQAnswer = triviaQuestions.fourthQ.Answer

var button1 = $('#answer1')
var button2 = $('#answer2')
var button3 = $('#answer3')
var button4 = $('#answer4')

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];
var qArrayNum = 0

var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];
var questionId = $('#question').text()

var score = 0
var badscore = 0


// TIMER STUFF ///////////////////////////////////////////

var time = 30
function resetTimer () {
	time = 30
	$('#timer').html("Time Left: " + time)
}
function setTimer () {
	$('#timer').html("Time left: " + time)
	thirtyIntervalId = setInterval(startQuestionTimer, 1000)

}
// Change question function
function startQuestionTimer() {
	time--
	$('#timer').html("Time left: " + time)
	console.log(time)

	if (time === 23) {
		qArrayNum++
		if (qArrayNum == triviaQArray.length) {
			console.log('done')
		}
		console.log('out of time')
		clearInterval(thirtyIntervalId)
		resetTimer()
		generateButtons()
	}
	return qArrayNum
}

// //////////////////////////////////////////////////////////////////////////



function hideQuestion() {
	$('#answer-buttons').hide()
}

function preAnswersCorrect() {
	qArrayNum++;
	score++;
	console.log(qArrayNum)
	generateButtons()
}

function preAnswersWrong() {
	qArrayNum++;
	badscore++;
	console.log(qArrayNum)
	generateButtons()
}
function generateButtons() {
	console.log(qArrayNum)
	$('#answer-buttons').show();
	resetTimer();
	startQuestionTimer();

	// Question 0///////////////////////////
	if (qArrayNum === 0) {
	$('#question').html(firstQuestion);
	$(button1).text(firstQAnswer[0])
	$(button2).text(firstQAnswer[1])
	$(button3).text(firstQAnswer[2])
	$(button4).text(firstQAnswer[3])

	$('#answer3').click(function() {
		console.log('first button clicked');
		preAnswersCorrect();
	})
	$("#answer1, #answer2, #answer4").click(function() {
		console.log('first wrong button clicked')
		preAnswersWrong();
	})	
	}

// Question 2///////////////////////////

	else if (qArrayNum === 1) {
	$('#question').html(secondQuestion);
	$(button1).text(secondQAnswer[0])
	$(button2).text(secondQAnswer[1])
	$(button3).text(secondQAnswer[2])
	$(button4).text(secondQAnswer[3])

	$('#button4').click(function() {
		console.log('first button clicked');
		preAnswersCorrect();
	})
	$('#button1, #button2, #button3').click(function() {
		console.log('first wrong button clicked')
		preAnswersWrong()
	})
	} 

// Question 3///////////////////////////

	else if (qArrayNum === 2) {
		$('#question').html(thirdQuestion);
	$(button1).text(thirdQAnswer[0])
	$(button2).text(thirdQAnswer[1])
	$(button3).text(thirdQAnswer[2])
	$(button4).text(thirdQAnswer[3])

	$('#button1').click(function() {
		console.log('first button clicked');
		$('.answerbtn, #question').empty()
		preAnswersCorrect();
	})
	$('#button4, #button2, #button3').click(function() {
		console.log('first wrong button clicked')
		preAnswersWrong();
	})
	}
	else if (qArrayNum === 3) {
	$('#question').html(fourthQuestion);
	$(button1).text(fourthQAnswer[0])
	$(button2).text(fourthQAnswer[1])
	$(button3).text(fourthQAnswer[2])
	$(button4).text(fourthQAnswer[3])

	$('#button2').click(function() {
		console.log('first button clicked');
		preAnswersCorrect();
	})
	$('#button4, #button1, #button3').click(function() {
		console.log('first wrong button clicked')
		preAnswersWrong();
	})
	}
	else if (qArrayNum == 4) {
		console.log('game over')
	} 
}

// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
	$('#start').hide();
	setTimer()
	generateButtons()
})




	// firstButton.click(function () {
	// 	console.log('hey i was clicked')
	// 	console.log(firstButton.text())
	// 	if (questionId == thirdQuestion) {
	// 		console.log("correct")
	// 	} else {
	// 		console.log(false)
			
	// 	}
	// })

	// secondButton.click(function () {
	// 	if (questionId == fourthQuestion) {
	// 	console.log('correct')
	// } else {
	// 	console.log('no')
	// }
	// })

	// thirdButton.click(function () {
	// 	if (questionId == firstQuestion) {
	// 		console.log('correct')
	// 	} else {
	// 		console.log('no')
	// 	}
	// })

	// fourthButton.click(function () {
	// 	if (questionId == secondQuestion) {
	// 		console.log('correct')
	// 	} else {
	// 		console.log('no')
	// 	}
	// })

	// /////////////////////////////////////////////////////


	// firstButton.text(triviaQuestions.firstQ.Answer[0]);
	// secondButton.text(triviaQuestions.firstQ.Answer[1]);
	// thirdButton.text(triviaQuestions.firstQ.Answer[2]);
	// fourthButton.text(triviaQuestions.firstQ.Answer[3]);


// FIRST QUESTION ///////////////////// changed the DOM. why can click function work on id
// JQUERY EVENT DELEGATION PUT CLOSE TO END
// use each() to delegate based on array. triviaQuestions.firstQ.Answer[i]
})