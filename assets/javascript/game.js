$(document).ready(function() {

	var turn = true;

	let player = ['Franken','Bernie','Colbert'];
	let playerRight = ['Mitch','Cruz', 'Trump'];

	var frankenPolicy = ['Space Exploration', 'Nuclear Energy', 'Gay Marriage', 'Women in Combat', 'Planned Parenthood Funding', 'Transgender Soldiers', 'First Amendment','In-State Tuition', 'Immigration', 'Immigration Healthcare', 'Gun Control', 'Term Limits', 'Affirmative Action', 'Whistleblower Protection', 'Campaign Finance', 'Candidate Transparency', 'Obamacare', 'Mental Health', 'Marijuana', 'Medicaid', 'Medicare Drug Prices', 'Drug Price Regulation', 'Student Loans', 'Common Core', 'Syrian Refugees', 'Foreign Aid', 'Equal Pay', 'Minimum Wage', 'Corporate Tax', 'Universal Basic Income', 'Taxes', 'Paid Sick Leave', 'Labor Unions', 'Bitcoin', 'Climate Change', 'Alternative Energy', 'Public Transportation']
	var mitchPolicy = ['Abortion', 'Religious Freedom', 'Government Mandates', 'Death Penalty', 'Confederate Flag', 'Euthanasia', 'Border Wall', 'Immigration Ban', 'Border Security', 'Immigrant Laborers', 'Pay Raise', 'Drug Policy', 'Net Neutrality', 'Eminent Domain', 'Electoral College', 'Voter Fraud', 'Campaign Finance', 'Lobbyist', 'Single-Payer Healthcare', 'Drug Price Regulation', 'Medicaid', 'Medicare Drug Prices', 'VA Privatization', 'Syrian Refugees', 'North Korea Military Strikes', 'Military Spending', 'Counter Terrorism', 'Drones', 'War on ISIS', 'Cuba', 'NSA Surveillance', 'Taxes Reduction', 'Trans-Pacific Partnership', 'NAFTA', 'Domestic Jobs', 'Offshore Banking', 'Government Pensions', 'Bitcoin', 'Oil Drilling', 'Fracking', 'Public Transportation']

	var computerFranken = frankenPolicy[Math.floor(Math.random() * frankenPolicy.length)];
	var computerMitch = mitchPolicy[Math.floor(Math.random() * mitchPolicy.length)];

	var wins = 0;
	var losses = 0;

	var h1 = Math.floor(Math.random() * 200 ) + 150;
	var h2 = Math.floor(Math.random() * 200 ) + 150;
	var number1 = Math.floor(Math.random()* 30) + 10;
	var number2 = Math.floor(Math.random()* 30) + 10;
	var number3 = Math.floor(Math.random()* 30) + 10;
	var number4 = Math.floor(Math.random()* 30) + 10;

	$('#player1healthcounter').html(h1);
	$('#player2healthcounter').html(h2);

	$('#wins').html(wins);
	$('#losses').html(losses);

	// $('#senator2clickarea').hide();

	$('#refresh').on('click', function() {
		reset();
		showChoices()
	});

player = 'Franken';
playerRight = 'Mitch'

$('#player1area').append("<img id='senators' src='assets/images/candidates/franken.jpg'>");
$('#player2area').append("<img id='senators' src='assets/images/candidates/mitch.jpg'>");

$('#player1').text('Franken');
$('#player2').text('Mitch');

$('#button-1').append("<img class='politicalattack' src='assets/images/buttonsfranken/hand.png'>");
$('#button-2').append("<img class='politicalattack' src='assets/images/buttonsfranken/vote.png'>");
$('#button-3').append("<img class='politicalattack' src='assets/images/buttonsfranken/legislation.png'>");
$('#button-4').append("<img class='politicalattack' src='assets/images/buttonsfranken/speech.png'>");


// al franken

$('#button-9').on('click', function() {
	player = 'Franken';

	$('#player1area').html("")

	$('#player1').html('');
	$('#player1').text('Franken');

	$('#button-1').html("");
	$('#button-2').html("");
	$('#button-3').html("");
	$('#button-4').html("");

	$('#player1area').append("<img id='senators' src='assets/images/candidates/franken.jpg'>");
	
	

	$('#button-1').append("<img class='politicalattack' src='assets/images/buttonsfranken/hand.png'>");
	$('#button-2').append("<img class='politicalattack' src='assets/images/buttonsfranken/vote.png'>");
	$('#button-3').append("<img class='politicalattack' src='assets/images/buttonsfranken/legislation.png'>");
	$('#button-4').append("<img class='politicalattack' src='assets/images/buttonsfranken/speech.png'>");
	reset();
	$('#player1hideshow').hide();

});

// bernie

$('#button-10').on('click', function() {
	player = 'Bernie';

	$('#player1area').html("");

	$('#player1').html('');
	$('#player1').text('Bernie');

	$('#button-1').html("");
	$('#button-2').html("");
	$('#button-3').html("");
	$('#button-4').html("");

	$('#player1area').append("<img id='senators' src='assets/images/candidates/bernie.jpg'>");
	$('#button-1').append("<img class='politicalattack' src='assets/images/buttonsbernie/legislation.png'>");
	$('#button-2').append("<img class='politicalattack' src='assets/images/buttonsbernie/vote.png'>");
	$('#button-3').append("<img class='politicalattack' src='assets/images/buttonsbernie/book.png'>");
	$('#button-4').append("<img class='politicalattack' src='assets/images/buttonsbernie/debate.png'>");
	reset();
	$('#player1hideshow').hide();
});

// colbert

$('#button-11').on('click', function() {
	player = 'Colbert';

	$('#player1area').html("");

	$('#player1').html('');
	$('#player1').text('Colbert');

	$('#button-1').html("");
	$('#button-2').html("");
	$('#button-3').html("");
	$('#button-4').html("");

	$('#player1area').append("<img id='senators' src='assets/images/candidates/colbert.jpg'>");
	$('#button-1').append("<img class='politicalattack' src='assets/images/buttonscolbert/dancer.png'>");
	$('#button-2').append("<img class='politicalattack' src='assets/images/buttonscolbert/viewer.png'>");
	$('#button-3').append("<img class='politicalattack' src='assets/images/buttonscolbert/glasses.png'>");
	$('#button-4').append("<img class='politicalattack' src='assets/images/buttonscolbert/television.png'>");
	reset();
	$('#player1hideshow').hide();
});

// mitch 

$('#button-12').on('click', function() {
	playerRight = 'Mitch';

	$('#player2area').html("");

	$('#player2').html('');
	$('#player2').text('Mitch');

	$('#player2area').append("<img id='senators' src='assets/images/candidates/mitch.jpg'>");
	reset();
	$('#player2hideshow').hide();
});

// cruz

$('#button-13').on('click', function() {
	playerRight = 'Cruz';

	$('#player2area').html("");

	$('#player2').html('');
	$('#player2').text('Cruz');

	$('#player2area').append("<img id='senators' src='assets/images/candidates/cruz.jpg'>");
	reset();
	$('#player2hideshow').hide();
});

// trump

$('#button-14').on('click', function() {
	playerRight = 'Trump';

	$('#player2area').html("");

	$('#player2').html('');
	$('#player2').text('Trump');

	$('#player2area').append("<img id='senators' src='assets/images/candidates/trump.jpg'>");
	reset();
	$('#player2hideshow').hide();
});



// refreshes all the numbers between turns and policy add ins

function refresh () {
	computerFranken = frankenPolicy[Math.floor(Math.random() * frankenPolicy.length)];
	computerMitch = mitchPolicy[Math.floor(Math.random() * mitchPolicy.length)];
	number1 = Math.floor(Math.random()* 30) + 10;
	number2 = Math.floor(Math.random()* 30) + 10;
	number3 = Math.floor(Math.random()* 30) + 10;
	number4 = Math.floor(Math.random()* 30) + 10;
};


// resets each players health and the news feed

function reset() {
  h1 = Math.floor(Math.random() * 200 ) + 150;
	h2 = Math.floor(Math.random() * 200 ) + 150;

	$('#player1healthcounter').html(h1);
	$('#player2healthcounter').html(h2);
	$('#div3').html("");
};

function showChoices() {
	$('#player1hideshow').show();
	$('#player2hideshow').show();
}


// records wins and losses

function tally() {
if (h1 <= 0) {
		    losses++;
		    $('#losses').html(losses)
		    reset()
		    showChoices()
		    }
else if (h2 <= 0) {
		    wins++;
		    $('#wins').html(wins)
		    reset()
		    showChoices()
		    }
};


// handles turn change, news feed updates, health updates

function updateFranken(number, saying) {
	if (!turn) return;
	h2 = h2 - number;
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerFranken}', computerFranken));
	$('#player2healthcounter').html(h2);
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};

function updateBernie(number, saying) {
	if (!turn) return;
	h2 = h2 - number;
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerBernie}', computerFranken));
	$('#player2healthcounter').html(h2);
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};

function updateColbert(number, saying) {
	if (!turn) return;
	h2 = h2 - number;
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerBernie}', computerFranken));
	$('#player2healthcounter').html(h2);
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};


function updateMitch(number, saying) {
	if (turn) return;
	h1 = h1 - number;
	$('#player1healthcounter').html(h1);
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerMitch}', computerMitch));
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};

function updateCruz(number, saying) {
	if (turn) return;
	h1 = h1 - number;
	$('#player1healthcounter').html(h1);
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerMitch}', computerMitch));
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};

function updateTrump(number, saying) {
	if (turn) return;
	h1 = h1 - number;
	$('#player1healthcounter').html(h1);
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerMitch}', computerMitch));
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
};


// player on click events, and rules for excute random response function

$('#button-1').on('click', function() {
		if (player == 'Franken') {
			updateFranken(number1, "<p><b>Al Franken</b> just had a debate on {computerFranken}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Bernie') {
			updateBernie(number1, "<p><b>Bernie</b> just had a debate on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Colbert') {
			updateColbert(number1, "<p><b>Colbert</b> just had a debate on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});

$('#button-2').on('click', function() {
		if (!turn) return;
		h1 = h1 + number2;
		$('#player1healthcounter').html(h1);
		if (player == 'Franken') {
			$('#div3').prepend("<p><b>Al Franken</b> just got " + number2 + " Votes!!!</p>");
		}
		else if (player == 'Bernie') {
			$('#div3').prepend("<p><b>Bernie</b> just got " + number2 + " Votes!!!</p>");
		}
		else if (player == 'Colbert') {
			$('#div3').prepend("<p><b>Colbert</b> just got " + number2 + " Votes!!!</p>");
		}
			
		refresh();
		tally();
		turn = !turn;
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});

$('#button-3').on('click', function() {
		if (player == 'Franken') {
			updateFranken(number3, "<p><b>Al Franken</b> just passed legislation on {computerFranken}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Bernie') {
			updateBernie(number1, "<p><b>Bernie</b> just passed legislation on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Colbert') {
			updateColbert(number1, "<p><b>Colbert</b> just passed legislation on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}

		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});

$('#button-4').on('click', function() {
		if (player == 'Franken') {
			updateFranken(number4, "<p><b>Al Franken</b> just gave a speech on {computerFranken}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Bernie') {
			updateBernie(number1, "<p><b>Bernie</b> just gave a speech on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		else if (player == 'Colbert') {
			updateColbert(number1, "<p><b>Colbert</b> just gave a speech on {computerBernie}, reducing " + playerRight + "'s status by {number}</p>" );
		}
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});


// functions similar to the on click events for player one

function func1() {
  if (playerRight == 'Mitch') {
		updateMitch(number1, "<p><b>Mitch</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Cruz') {
 		updateCruz(number1, "<p><b>Cruz</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Trump') {
 		updateTrump(number1, "<p><b>Trump</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
};

function func2() {
 	if (turn) return;
	h2 = h2 + number2;
	$('#player2healthcounter').html(h2);

	if (playerRight == 'Mitch') {
		$('#div3').prepend("<p><b>" + playerRight + "</b> just got " + number2 + " Votes!!!</p>");
	}
	else if (playerRight == 'Cruz') {
		$('#div3').prepend("<p><b>" + playerRight + "</b> just got " + number2 + " Votes!!!</p>");
	}
	else if (playerRight == 'Trump') {
		$('#div3').prepend("<p><b>" + playerRight + "</b> just got " + number2 + " Votes!!!</p>");
	}

	refresh();
	tally();
	turn = !turn;
};

function func3() {
	if (playerRight == 'Mitch') {
    updateMitch(number3, "<p><b>Mitch</b> just passed legislation on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Cruz') {
 		updateCruz(number1, "<p><b>Cruz</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Trump') {
 		updateTrump(number1, "<p><b>Trump</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
};

function func4() {
	if (playerRight == 'Mitch') {
    updateMitch(number4, "<p><b>Mitch</b> just gave a speech on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Cruz') {
 		updateCruz(number1, "<p><b>Cruz</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
  else if (playerRight == 'Trump') {
 		updateTrump(number1, "<p><b>Trump</b> just had a debate on {computerMitch}, reducing " + player + "'s status by {number}</p>" );
  }
};

// randomizes which function get executed

function random(){
  var functionNumber  = [1,2,3,4];
  var i = functionNumber[Math.floor(Math.random() * functionNumber.length)];
  if(i<=0) return random();
  return i;
};
function execute(){
  var i = random();
  eval('func'+i+'()');
};





})



