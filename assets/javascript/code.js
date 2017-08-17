$(document).ready(function(){

var triviaQuestions = {
	firstQ: {
		Q: "First Question?",
		Answer: ["Answer One", "Answer Two","Answer Three", "Answer Four"],
	},
	secondQ: {
		Q: "Second Question?",
		Answer: ["Answer One", "Answer Two","Answer Three", "Answer Four"],
	},
	thirdQ: {
		Q: "Third Question?",
		Answer: ["Answer One", "Answer Two","Answer Three", "Answer Four"],
	},
};
var firstQuestion = triviaQuestions.firstQ.Q	
var firstQuestionAnswer = triviaQuestions.firstQ.Answer[0]

var secondQuestion = triviaQuestions.secondQ.Q
var secondQuestionAnswer = triviaQuestions.secondQ.Answer[1]

var thirdQuestion = triviaQuestions.thirdQ.Q
var thirdQuestionAnswer = triviaQuestions.thirdQ.Answer[2]

// var fourthQuestion = triviaQuestions.fourthQ.Q
// var fourthQuestionAnswer = triviaQuestions.fourthQ.Answer[3]

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];

var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];

// Change question function
function changeQuestion() {
	$('#answer-buttons').hide()
	$('#questionanswer').append('<div class=jumbotron>Works!</div>')
}

// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
	$('#question').html(randomTriviaQuestion);
	$('#start').hide();
	// make answers
	for (var i = 1; i < 5; i++) {
		var buttons = '<button type=button class="btn btn-default btn-lg btn-block"></button>';
		$('#answers' + i).append(buttons);
	}
	var firstButton = $('#answer-buttons').children().eq(0).children().eq(0);
	var secondButton = $('#answer-buttons').children().eq(1).children().eq(0);
	var thirdButton = $('#answer-buttons').children().eq(2).children().eq(0);
	var fourthButton = $('#answer-buttons').children().eq(3).children().eq(0);

	var questionId = $('#question').text()
	var answersId = $('')
	firstButton.click(function () {
		console.log('hey i was clicked')
		console.log(firstButton.text())
		if (questionId == firstQuestion && firstButton.text() == firstQuestionAnswer) {
			changeQuestion()
		} else {
			console.log(false)
		}
	})

	secondButton.click(function () {
		console.log('hey i was clicked2')
	})

	thirdButton.click(function () {
		console.log('hey i was clicked3')
	})

	fourthButton.click(function () {
		console.log('hey i was clicked4')
	})
	firstButton.text(triviaQuestions.firstQ.Answer[0]).attr('id', 'first-button');
	secondButton.text(triviaQuestions.firstQ.Answer[1]).attr('id', 'second-button');
	thirdButton.text(triviaQuestions.firstQ.Answer[2]).attr('id', 'third-button');
	fourthButton.text(triviaQuestions.firstQ.Answer[3]).attr('id', 'fourth-button');
	
})

// FIRST QUESTION ///////////////////// changed the DOM. why can click function work on id

})