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

console.log(triviaQuestions.firstQ.Answer[1])

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];

console.log(triviaQArray);
var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];
console.log(randomTriviaQuestion);


// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
	console.log("yes")
	$('#question').html(randomTriviaQuestion);
	$('#start').hide();
	// make answers
	for (var i = 1; i < 5; i++) {
		var buttons = '<button type=button class="btn btn-default"></button>';
		$('#answers' + i).append(buttons);
	}
	var firstButton = $('#answer-buttons').children().eq(0).children().eq(0);
	var secondButton = $('#answer-buttons').children().eq(1).children().eq(0);
	var thirdButton = $('#answer-buttons').children().eq(2).children().eq(0);
	var fourthButton = $('#answer-buttons').children().eq(3).children().eq(0);
	console.log(firstButton)

	firstButton.text(triviaQuestions.firstQ.Answer[0]).attr('id', 'first-button');
	secondButton.text(triviaQuestions.firstQ.Answer[1]).attr('id', 'second-button');
	thirdButton.text(triviaQuestions.firstQ.Answer[2]).attr('id', 'third-button');
	fourthButton.text(triviaQuestions.firstQ.Answer[3]).attr('id', 'fourth-button');
})

// FIRST QUESTION /////////////////////
