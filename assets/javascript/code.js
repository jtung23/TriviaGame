$(document).ready(function(){

var triviaQuestions = {
	firstQ: {
		Q: "First Question?",
		Answer: ["1Answer One", "Answer Two","Answer Three Correct", "Answer Four"],	
	},
	secondQ: {
		Q: "Second Question?",
		Answer: ["2Answer One", "Answer Two","Answer Three", "Answer Four Correct"],
	},
	thirdQ: {
		Q: "Third Question?",
		Answer: ["3Answer One Correct", "Answer Two","Answer Three", "Answer Four"],
	},
	fourthQ: {
		Q: "Fourth Question?",
		Answer: ["4Answer One", "Answer Two Correct","Answer Three", "Answer Four"],
	},
};
var firstQuestion = triviaQuestions.firstQ.Q	
var firstQuestionAnswer = triviaQuestions.firstQ.Answer[2]

var secondQuestion = triviaQuestions.secondQ.Q
var secondQuestionAnswer = triviaQuestions.secondQ.Answer[3]

var thirdQuestion = triviaQuestions.thirdQ.Q
var thirdQuestionAnswer = triviaQuestions.thirdQ.Answer[0]

var fourthQuestion = triviaQuestions.fourthQ.Q
var fourthQuestionAnswer = triviaQuestions.fourthQ.Answer[1]

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];

var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];

// Change question function
function changeQuestion() {
	$('#answer-buttons').hide()
	$('#questionanswer').append('<div class=jumbotron>Works!</div>')
}

// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
function startButton() {
	$('#start').click(function() {
	$('#question').html(randomTriviaQuestion);
	$('#start').hide();
	// make answers
	for (var i = 1; i < 5; i++) {
		var buttons = '<button id ="button" type=button class="btn btn-default btn-lg btn-block"></button>';
		$('#answer-buttons').append(buttons);
	}

	var firstButton = $('#answer-buttons').children().eq(0).children().eq(0);
	var secondButton = $('#answer-buttons').children().eq(1).children().eq(0);
	var thirdButton = $('#answer-buttons').children().eq(2).children().eq(0);
	var fourthButton = $('#answer-buttons').children().eq(3).children().eq(0);

	var questionId = $('#question').text()

	// Answer Button Functions //////////////////////////////////
	if (questionId == thirdQuestion) {
	function answerInput() {$('#answer-buttons button').each(function (i) {
		$(this).html(triviaQuestions.firstQ.Answer + '[' + i + ']')
		console.log('first answers created')
	})
	}
	answerInput()
	$(document).on("click", "#button", answerInput);
	console.log(firstButton.text())
	
	$(document).on("click", "#button", $(firstButton).click(function() {
		console.log('first button clicked')
	}))

	// if ($(secondButton).click() || $(thirdButton).click() || $(fourthButton).click()) {
	// 	console.log('wrong button clicked')

	} else if (questionId == fourthQuestion) {
	$('#answer-buttons button').each(function (i) {
		$(this).html(triviaQuestions.secondQ.Answer + i)
		console.log('second answers created')
	})
	} else if (questionId == firstQuestion) {
	$('#answer-buttons button').each(function (i) {
		$(this).html(triviaQuestions.thirdQ.Answer + i)
		console.log('third answers created')
	})
	} else if (questionId == secondQuestion) {
	$('#answer-buttons button').each(function (i) {
		$(this).html(triviaQuestions.fourthQ.Answer + i)
		console.log('fourth answers created')
	})
	}


})
}
$(document).on("click", "#start", startButton)
console.log(buttons)


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