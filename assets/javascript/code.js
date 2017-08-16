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

var triviaQArray = [triviaQuestions.firstQ.Q, triviaQuestions.secondQ.Q, triviaQuestions.thirdQ.Q];

var randomTriviaQuestion = triviaQArray[Math.floor(Math.random() * triviaQArray.length)];

// Change question function
function changeQuestion() {

}

// ON START CLICK, HIDE START BUTTON, MAKE FIRST QUESTION, MAKE 4 GUESSES
$('#start').click(function() {
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

	firstButton.text(triviaQuestions.firstQ.Answer[0]).attr('id', 'first-button');
	secondButton.text(triviaQuestions.firstQ.Answer[1]).attr('id', 'second-button');
	thirdButton.text(triviaQuestions.firstQ.Answer[2]).attr('id', 'third-button');
	fourthButton.text(triviaQuestions.firstQ.Answer[3]).attr('id', 'fourth-button');
	
})

// FIRST QUESTION ///////////////////// changed the DOM. why can click function work on id
$('button#second-button').click(function() {
	alert('yay?');
})
// click(function() {
	// if ($('#question').html(triviaQuestions.firstQ.Q)) {
	// 	console.log('yes')
	// } else {
	// 	console.log('no')
	// }