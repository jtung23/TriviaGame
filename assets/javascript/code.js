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

	if (time === 0) {
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
function removeClick() {
	$('.answerbtn').off();
}


function hideQuestion() {
	$('#answer-buttons').hide()
}

function preAnswersCorrect() {
	qArrayNum++;
	score++;
	console.log(qArrayNum)
	removeClick()
	generateButtons()
}

function preAnswersWrong() {
	qArrayNum++;
	badscore++;
	console.log(qArrayNum)
	removeClick()
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

	$('#answer4').click(function() {
		console.log('first button clicked');
		preAnswersCorrect();
	})
	$('#answer1, #answer2, #answer3').click(function() {
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

	$('#answer1').click(function() {
		console.log('first answer clicked');
		preAnswersCorrect();
	})
	$('#answer4, #answer2, #answer3').click(function() {
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

	$('#answer2').click(function() {
		console.log('first answer clicked');
		preAnswersCorrect();
	})
	$('#answer4, #answer1, #answer3').click(function() {
		console.log('first wrong button clicked')
		preAnswersWrong();
	})
	}
	else if (qArrayNum == 4) {
		gameOver()
	} 
}

function gameOver() {
	var QAarea = $('#QAarea')
	QAarea.empty();
	clearInterval(thirtyIntervalId)
	$('#timer').empty();
	QAarea.html('<p>');
	QAarea.append('<h3>Score:');
	QAarea.append('<h3>' + score + ' / ' + '4');
	QAarea.css({

	})
	$('body').css('background-image', "url(assets/images/gameover.jpg)");

}
// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
	$('#start').hide();
	setTimer()
	generateButtons()
})

})