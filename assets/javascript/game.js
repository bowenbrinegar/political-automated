$(document).ready(function() {

	var turn = true;

	var frankenPolicy = ['Space Exploration', 'Nuclear Energy', 'Gay Marriage', 'Women in Combat', 'Planned Parenthood Funding', 'Transgender Soldiers', 'First Amendment','In-State Tuition', 'Immigration', 'Immigration Healthcare', 'Gun Control', 'Term Limits', 'Affirmative Action', 'Whistleblower Protection', 'Campaign Finance', 'Candidate Transparency', 'Obamacare', 'Mental Health', 'Marijuana', 'Medicaid', 'Medicare Drug Prices', 'Drug Price Regulation', 'Student Loans', 'Common Core', 'Syrian Refugees', 'Foreign Aid', 'Equal Pay', 'Minimum Wage', 'Corporate Tax', 'Universal Basic Income', 'Taxes', 'Paid Sick Leave', 'Labor Unions', 'Bitcoin', 'Climate Change', 'Alternative Energy', 'Public Transportation']
	var mitchPolicy = ['Abortion', 'Religious Freedom', 'Government Mandates', 'Death Penalty', 'Confederate Flag', 'Euthanasia', 'Border Wall', 'Immigration Ban', 'Border Security', 'Immigrant Laborers', 'Pay Raise', 'Drug Policy', 'Net Neutrality', 'Eminent Domain', 'Electoral College', 'Voter Fraud', 'Campaign Finance', 'Lobbyist', 'Single-Payer Healthcare', 'Drug Price Regulation', 'Medicaid', 'Medicare Drug Prices', 'VA Privatization', 'Syrian Refugees', 'North Korea Military Strikes', 'Military Spending', 'Counter Terrorism', 'Drones', 'War on ISIS', 'Cuba', 'NSA Surveillance', 'Taxes Reduction', 'Trans-Pacific Partnership', 'NAFTA', 'Domestic Jobs', 'Offshore Banking', 'Government Pensions', 'Bitcoin', 'Oil Drilling', 'Fracking', 'Public Transportation']

	var computerFranken = frankenPolicy[Math.floor(Math.random() * frankenPolicy.length)];
	var computerMitch = mitchPolicy[Math.floor(Math.random() * mitchPolicy.length)];

	var frankenWins = 0;
	var mitchWins = 0;

	var frankenLosses = 0;
	var mitchLosses = 0;

	var Franken = Math.floor(Math.random() * 200 ) + 150;
	var Mitch = Math.floor(Math.random() * 200 ) + 150;
	var number1 = Math.floor(Math.random()* 30) + 10;
	var number2 = Math.floor(Math.random()* 30) + 10;
	var number3 = Math.floor(Math.random()* 30) + 10;
	var number4 = Math.floor(Math.random()* 30) + 10;
	var number5 = Math.floor(Math.random()* 30) + 10;
	var number6 = Math.floor(Math.random()* 30) + 10;
	var number7 = Math.floor(Math.random()* 30) + 10;
	var number8 = Math.floor(Math.random()* 30) + 10;

	$('#frankenhealthcounter').html(Franken);
	$('#mitchhealthcounter').html(Mitch);

	$('#frankenwins').html(frankenWins);
	$('#frankenlosses').html(frankenLosses);

	$('#mitchwins').html(mitchWins);
	$('#mitchlosses').html(mitchLosses);

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
	number5 = Math.floor(Math.random()* 30) + 10;
	number6 = Math.floor(Math.random()* 30) + 10;
	number7 = Math.floor(Math.random()* 30) + 10;
	number8 = Math.floor(Math.random()* 30) + 10;
}

function reset() {
  Franken = Math.floor(Math.random() * 200 ) + 150;
	Mitch = Math.floor(Math.random() * 200 ) + 150;
	number1 = Math.floor(Math.random()* 30) + 10;
	number2 = Math.floor(Math.random()* 30) + 10;
	number3 = Math.floor(Math.random()* 30) + 10;
	number4 = Math.floor(Math.random()* 30) + 10;
	number5 = Math.floor(Math.random()* 30) + 10;
	number6 = Math.floor(Math.random()* 30) + 10;
	number7 = Math.floor(Math.random()* 30) + 10;
	number8 = Math.floor(Math.random()* 30) + 10;

	$('#frankenhealthcounter').html(Franken)
	$('#mitchhealthcounter').html(Mitch)
	$('#div3').html("")
}

function tally() {
if (Franken <= 0) {
		    frankenLosses++;
		    mitchWins++;
		    $('#frankenlosses').html(frankenLosses)
		    $('#mitchwins').html(mitchWins)
		    reset()
		    }
else if (Mitch <= 0) {
		    mitchLosses++;
		    frankenWins++;
		    $('#frankenwins').html(frankenWins)
		    $('#mitchlosses').html(mitchLosses)
		    reset()
		    }
}

function updateFranken(number, saying) {
	if (!turn) return;
	Mitch = Mitch - number;
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerFranken}', computerFranken));
	$('#mitchhealthcounter').html(Mitch);
	refresh();
	tally();
	turn = !turn;
}

function updateMitch(number, saying) {
	if (turn) return;
	Franken = Franken - number;
	$('#frankenhealthcounter').html(Franken);
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerMitch}', computerMitch));
	refresh();
	tally();
	turn = !turn;
}

$('#button-1').on('click', function() {
		updateFranken(number1, "<p><b>Al Franken</b> just had a debate on {computerFranken}, reducing Mitch's status by {number}</p>" );
});

$('#button-2').on('click', function() {
		if (!turn) return;
		Franken = Franken + number2;
		$('#frankenhealthcounter').html(Franken);
		$('#div3').prepend("<p><b>Al Franken</b> just got " + number2 + " Votes!!!</p>");
		refresh();
		turn = !turn;
});

$('#button-3').on('click', function() {
		updateFranken(number3, "<p><b>Al Franken</b> just passed legislation on {computerFranken}, reducing Mitch's status by {number}</p>" );
});

$('#button-4').on('click', function() {
		updateFranken(number4, "<p><b>Al Franken</b> just gave a speech on {computerFranken}, reducing Mitch's status by {number}</p>" );
});

$('#button-5').on('click', function() {
		updateMitch(number5, "<p><b>Mitch</b> just had a debate on {computerMitch}, reducing Franken's status by {number}</p>" );
});

$('#button-6').on('click', function() {
		if (turn) return;
		Mitch = Mitch + number6;
		$('#mitchhealthcounter').html(Mitch);
		$('#div3').prepend("<p><b>Mitch</b> just got " + number6 + " Votes!!!</p>");
		refresh();
		turn = !turn;
});

$('#button-7').on('click', function() {
		updateMitch(number7, "<p><b>Mitch</b> just passed legislation on {computerMitch}, reducing Franken's status by {number}</p>" );
});

$('#button-8').on('click', function() {
		updateMitch(number8, "<p><b>Mitch</b> just gave a speech on {computerMitch}, reducing Franken's status by {number}</p>" );
});



})