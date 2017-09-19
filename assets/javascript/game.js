$(document).ready(function() {

	var turn = true;

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

	$('#senator2clickarea').hide()

	$('#refresh').on('click', function() {
		reset()
	})

function refresh () {
	computerFranken = frankenPolicy[Math.floor(Math.random() * frankenPolicy.length)];
	computerMitch = mitchPolicy[Math.floor(Math.random() * mitchPolicy.length)];
	number1 = Math.floor(Math.random()* 30) + 10;
	number2 = Math.floor(Math.random()* 30) + 10;
	number3 = Math.floor(Math.random()* 30) + 10;
	number4 = Math.floor(Math.random()* 30) + 10;
}

function reset() {
  h1 = Math.floor(Math.random() * 200 ) + 150;
	h2 = Math.floor(Math.random() * 200 ) + 150;

	$('#player1healthcounter').html(h1)
	$('#player2healthcounter').html(h2)
	$('#div3').html("")
}

function tally() {
if (h1 <= 0) {
		    losses++;
		    $('#losses').html(losses)
		    reset()
		    }
else if (h2 <= 0) {
		    wins++;
		    $('#wins').html(wins)
		    reset()
		    }
}

function updateFranken(number, saying) {
	if (!turn) return;
	h2 = h2 - number;
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerFranken}', computerFranken));
	$('#player2healthcounter').html(h2);
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
	
}

function updateMitch(number, saying) {
	if (turn) return;
	h1 = h1 - number;
	$('#player1healthcounter').html(h1);
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerMitch}', computerMitch));
	refresh();
	setTimeout(tally, 3000);
	turn = !turn;
}


$('#button-1').on('click', function() {
		updateFranken(number1, "<p><b>Al Franken</b> just had a debate on {computerFranken}, reducing Mitch's status by {number}</p>" );
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
		$('#div3').prepend("<p><b>Al Franken</b> just got " + number2 + " Votes!!!</p>");
		refresh();
		turn = !turn;
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});

$('#button-3').on('click', function() {
		updateFranken(number3, "<p><b>Al Franken</b> just passed legislation on {computerFranken}, reducing Mitch's status by {number}</p>" );
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});

$('#button-4').on('click', function() {
		updateFranken(number4, "<p><b>Al Franken</b> just gave a speech on {computerFranken}, reducing Mitch's status by {number}</p>" );
		if (h2 > 30) {
			setTimeout(execute, 1000)
			}
		if (h2 < 30) {
			setTimeout(func2, 2000)
		}
});



function func1() {
   updateMitch(number1, "<p><b>Mitch</b> just had a debate on {computerMitch}, reducing Franken's status by {number}</p>" );
}

function func2() {
   	if (turn) return;
		h2 = h2 + number2;
		$('#player2healthcounter').html(h2);
		$('#div3').prepend("<p><b>Mitch</b> just got " + number2 + " Votes!!!</p>");
		refresh();
		turn = !turn;
}

function func3() {
   updateMitch(number3, "<p><b>Mitch</b> just passed legislation on {computerMitch}, reducing Franken's status by {number}</p>" );
}

function func4() {
   updateMitch(number4, "<p><b>Mitch</b> just gave a speech on {computerMitch}, reducing Franken's status by {number}</p>" );
}

function random(){
  var functionNumber  = [1,2,3,4];
  var i = functionNumber[Math.floor(Math.random() * functionNumber.length)];
  if(i<=0) return random();
  return i;
}
function execute(){
  var i = random();
  eval('func'+i+'()');
}





})



