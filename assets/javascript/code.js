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
var firstQAnswer = triviaQuestions.firstQ.Answer

var secondQuestion = triviaQuestions.secondQ.Q
var secondQAnswer = triviaQuestions.secondQ.Answer[3]

var thirdQuestion = triviaQuestions.thirdQ.Q
var thirdQAnswer = triviaQuestions.thirdQ.Answer[0]

var fourthQuestion = triviaQuestions.fourthQ.Q
var fourthQAnswer = triviaQuestions.fourthQ.Answer[1]

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];

var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];
var questionId = $('#question').text()
// Change question function
function hideQuestion() {
	$('#answer-buttons').hide()
}

function firstAnswerButtons() {
	for (var i = 1; i < 5; i++) {
		var buttons = '<button type=button class="btn btn-default btn-lg btn-block"></button>';
		$('#answers' + i).append(buttons);
	}
	var firstButton = $('#answer-buttons').children().eq(0).children().eq(0);
	var secondButton = $('#answer-buttons').children().eq(1).children().eq(0);
	var thirdButton = $('#answer-buttons').children().eq(2).children().eq(0);
	var fourthButton = $('#answer-buttons').children().eq(3).children().eq(0);

	console.log(firstButton)
	console.log(firstQAnswer[0])
	$(firstButton).text(firstQAnswer[0]).attr("id", "button1")
	console.log(firstButton.text())
	$(secondButton).text(firstQAnswer[1]).attr("id", "button2")
	$(thirdButton).text(firstQAnswer[2]).attr("id", "button3")
	$(fourthButton).text(firstQAnswer[3]).attr("id", "button4")

	$('#button3').click(function() {
		console.log('first button clicked');
		hideQuestion();
		$('#questionanswer').append('<div class=jumbotron>Works!</div>')
		setTimeout(secondAnswerButtons, 1000 * 3);
	})
	$('#button1, #button2, #button4').click(function() {
		console.log('first wrong button clicked')
		hideQuestion();
	})

}

function secondAnswerButtons() {
	$('#questionanswer').empty();
	$('#question').html(firstQuestion);
		for (var i = 1; i < 5; i++) {
		var buttons = '<button type=button class="btn btn-default btn-lg btn-block"></button>';
		$('#answers' + i).append(buttons);
	}
	var firstButton = $('#answer-buttons').children().eq(0).children().eq(0);
	var secondButton = $('#answer-buttons').children().eq(1).children().eq(0);
	var thirdButton = $('#answer-buttons').children().eq(2).children().eq(0);
	var fourthButton = $('#answer-buttons').children().eq(3).children().eq(0);

	console.log(firstButton)
	console.log(secondQAnswer[0])
	$(firstButton).text(secondQAnswer[0]).attr("id", "button1")
	console.log(secondButton.text())
	$(secondButton).text(secondQAnswer[1]).attr("id", "button2")
	$(thirdButton).text(secondQAnswer[2]).attr("id", "button3")
	$(fourthButton).text(secondQAnswer[3]).attr("id", "button4")

	$('#button4').click(function() {
		console.log('first button clicked');
		hideQuestion();
		$('#questionanswer').append('<div class=jumbotron>Works!</div>')
		setTimeout(secondAnswerButtons, 1000 * 3);
	})
	$('#button1, #button2, #button3').click(function() {
		console.log('first wrong button clicked')
		hideQuestion();
	})
}

// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
	$('#question').html(firstQuestion);
	$('#start').hide();
	firstAnswerButtons()
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