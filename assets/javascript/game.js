$(document).ready(function() {

	var turn = true;

	var key = 'franken';
	var key2 = 'mitch';

	let frankenPolicy = ['Space Exploration', 'Nuclear Energy', 'Gay Marriage', 'Women in Combat', 'Planned Parenthood Funding', 'Transgender Soldiers', 'First Amendment','In-State Tuition', 'Immigration', 'Immigration Healthcare', 'Gun Control', 'Term Limits', 'Affirmative Action', 'Whistleblower Protection', 'Campaign Finance', 'Candidate Transparency', 'Obamacare', 'Mental Health', 'Marijuana', 'Medicaid', 'Medicare Drug Prices', 'Drug Price Regulation', 'Student Loans', 'Common Core', 'Syrian Refugees', 'Foreign Aid', 'Equal Pay', 'Minimum Wage', 'Corporate Tax', 'Universal Basic Income', 'Taxes', 'Paid Sick Leave', 'Labor Unions', 'Bitcoin', 'Climate Change', 'Alternative Energy', 'Public Transportation']
	let mitchPolicy = ['Abortion', 'Religious Freedom', 'Government Mandates', 'Death Penalty', 'Confederate Flag', 'Euthanasia', 'Border Wall', 'Immigration Ban', 'Border Security', 'Immigrant Laborers', 'Pay Raise', 'Drug Policy', 'Net Neutrality', 'Eminent Domain', 'Electoral College', 'Voter Fraud', 'Campaign Finance', 'Lobbyist', 'Single-Payer Healthcare', 'Drug Price Regulation', 'Medicaid', 'Medicare Drug Prices', 'VA Privatization', 'Syrian Refugees', 'North Korea Military Strikes', 'Military Spending', 'Counter Terrorism', 'Drones', 'War on ISIS', 'Cuba', 'NSA Surveillance', 'Taxes Reduction', 'Trans-Pacific Partnership', 'NAFTA', 'Domestic Jobs', 'Offshore Banking', 'Government Pensions', 'Bitcoin', 'Oil Drilling', 'Fracking', 'Public Transportation']

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

let characters = {
		franken: {
					name: 'Franken',
					image: 'assets/images/candidates/franken.jpg',
					button1: 'assets/images/buttonsfranken/hand.png',
					button2: 'assets/images/buttonsfranken/vote.png',
					button3: 'assets/images/buttonsfranken/legislation.png',
					button4: 'assets/images/buttonsfranken/speech.png'
		},
		bernie: {
					name: 'Bernie',
					image: 'assets/images/candidates/bernie.jpg',
					button1: 'assets/images/buttonsbernie/legislation.png',
					button2: 'assets/images/buttonsbernie/vote.png',
					button3: 'assets/images/buttonsbernie/book.png',
					button4: 'assets/images/buttonsbernie/debate.png'
		},
		colbert: {
					name: 'Colbert',
					image: 'assets/images/candidates/colbert.jpg',
					button1: 'assets/images/buttonscolbert/dancer.png',
					button2: 'assets/images/buttonscolbert/viewer.png',
					button3: 'assets/images/buttonscolbert/glasses.png',
					button4: 'assets/images/buttonscolbert/television.png'
		},
		mitch: {
					name: 'Mitch',
					image: 'assets/images/candidates/mitch.jpg',
		},
		cruz: {
					name: 'Cruz',
					image: 'assets/images/candidates/cruz.jpg',	
		},
		trump: {
					name: 'Trump',
					image: 'assets/images/candidates/trump.jpg',
		}
}

function characterChoice() {
		var choice = characters[key].name;
		var image = $('<img id="senators" >').attr("src", characters[key].image)
		var button1 = $('<img class="politicalattack" >').attr("src", characters[key].button1);
		var button2 = $('<img class="politicalattack" >').attr("src", characters[key].button2);
		var button3 = $('<img class="politicalattack" >').attr("src", characters[key].button3);
		var button4 = $('<img class="politicalattack" >').attr("src", characters[key].button4);
		
		$('#player1').html("");
		$('#player1area').html("");
		$('#button-1').html("");
		$('#button-2').html("");
		$('#button-3').html("");
		$('#button-4').html("");

		$('#player1').html(choice);
		$('#player1area').append(image);
		$('#button-1').append(button1);
		$('#button-2').append(button2);
		$('#button-3').append(button3);
		$('#button-4').append(button4);

		reset();
		$('#player1hideshow').hide();
};

function characterChoice2() {
		var choice2 = characters[key2].name;
		var image2 = $('<img id="senators" >').attr("src", characters[key2].image)

		$('#player2').html("")
		$('#player2area').html("");
		$('#player2').append(choice2);
		$('#player2area').append(image2);

		reset();
		$('#player2hideshow').hide();
}

characterChoice()
characterChoice2()



$('#choiceContainer').on("click", "button", function() {
    var value = $(this).val();
    if (value === 'franken') {
			key = 'franken';  
    }  
    else if (value === "bernie") {
		  key = 'bernie';
    }
    else if (value === "colbert") {
			key = 'colbert';
    }

    characterChoice();
});

$('#choiceContainer2').on("click", "button", function() {
    var value = $(this).val();
    if (value === 'mitch') {
			key2 = 'mitch'; 
    }  
    else if (value === 'cruz') {
			key2 = 'cruz';
    }
    else if (value === 'trump') {
			key2 = 'trump';
    }

    characterChoice2();
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
		    $('#losses').html(losses);
		    reset();
		    showChoices();
		    }
else if (h2 <= 0) {
		    wins++;
		    $('#wins').html(wins);
		    reset();
		    showChoices();
		    turn = !turn;
		    }
};

function rules() {
	execute();
	// if (h2 >= 30) {
	// 		setTimeout(execute, 1000);
	// 	}
	// else if (h2 < 30) {
	// 		setTimeout(func2, 2000);
	// 	}
}

var checker;

// handles turn change, news feed updates, health updates

function updatePlayer(number, saying) {
	if (!turn) return;
	refresh();
	switch(checker) {
          case 'h2minus': 
              h2 = h2 - number;
							$('#player2healthcounter').html(h2);
              break;
          case 'h1plus':
              h1 = h1 + number;
							$('#player1healthcounter').html(h1);
              break;
          case 'h1minus': 
	            h1 = h1 - number;
							$('#player1healthcounter').html(h1);
	            break;
          case 'h2plus':
              h2 = h2 + number;
							$('#player2healthcounter').html(h2);
              break;    
					default:
              break;
      };
	$('#div3').prepend(saying.replace('{number}', number).replace('{computerFranken}', computerFranken).replace('{computerMitch}', computerMitch).replace('{player1}', characters[key].name).replace('{player2}', characters[key2].name));
	setTimeout(tally, 3000);	
	turn = !turn;
};

// if (this or this)

// player on click events, and rules for excute random response function

$('#button-1').on('click', function() {
		checker = 'h2minus';
		if (key == 'franken') {
			updatePlayer(number1, "<p><b>{player1}</b> just had a debate on {computerFranken}, reducing {player2}'s status by {number}</p>" )
		}
		else if (key == 'bernie') {
			updatePlayer(number1, "<p><b>{player1}</b> just passed legislation {computerFranken}, reducing {player2}'s status by {number}</p>" )
		}
		else if (key == 'colbert') {
			updatePlayer(number1, "<p><b>{player1}</b> just danced, reducing {player2}'s status by {number}</p>" )
		};	
		func3();
});

$('#button-2').on('click', function() {
		checker = 'h1plus';
		if (key == 'franken') {
			updatePlayer(number2, "<p><b>{player1}</b> just got {number} Votes!!!</p>");
		}
		else if (key == 'bernie') {
			updatePlayer(number2, "<p><b>{player1}</b> just got {number} Votes!!!</p>");
		}
		else if (key == 'colbert') {
			updatePlayer(number2, "<p><b>{player1}</b> just got {number} more Viewers!!!</p>");
		};
		rules();
});

$('#button-3').on('click', function() {
		checker = 'h2minus';
		if (key == 'franken') {
			updatePlayer(number3, "<p><b>{player1}</b> just passed legislation on {computerFranken}, reducing {player2}'s status by {number}</p>" );
		}
		else if (key == 'bernie') {
			updatePlayer(number3, "<p><b>{player1}</b> just wrote a book on {computerFranken}, reducing {player2}'s status by {number}</p>" );
		}
		else if (key == 'colbert') {
			updatePlayer(number3, "<p><b>{player1}</b> just found new material on {computerFranken}, reducing {player2}'s status by {number}</p>" );
		}
		rules();
});

$('#button-4').on('click', function() {
		checker = 'h2minus';
		if (key == 'franken') {
			updatePlayer(number4, "<p><b>{player1}</b> just gave a speech on {computerFranken}, reducing {player2}'s status by {number}</p>" );
		}
		else if (key == 'bernie') {
			updatePlayer(number4, "<p><b>{player1}</b> had a debate on {computerFranken}, reducing {player2}'s status by {number}</p>" );
		}
		else if (key == 'colbert') {
			updatePlayer(number4, "<p><b>{player1}</b> just aired a show, reducing {player2}'s status by {number}</p>" );
		}
		rules();
});


// functions similar to the on click events for player one

function func1() {
  checker = 'h1minus';
  if (key2 == 'mitch') {
		updatePlayer(number1, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'cruz') {
 		updatePlayer(number1, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'trump') {
 		updatePlayer(number1, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
};

function func2() {
 	checker = 'h2plus';
	if (key2 == 'mitch') {
		updatePlayer(number2, "<p><b>{player2}</b> just got {number} Votes!!!</p>");
	}
	else if (key2 == 'cruz') {
		updatePlayer(number2, "<p><b>{player2}</b> just got {number} Votes!!!</p>");
	}
	else if (key2 == 'trump') {
		updatePlayer(number2, "<p><b>{player2}</b> just got {number} Votes!!!</p>");
	}
};

function func3() {
	checker = 'h1minus';
	if (key2 == 'mitch') {
    updatePlayer(number3, "<p><b>{player2}</b> just passed legislation on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'cruz') {
 		updatePlayer(number3, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'trump') {
 		updatePlayer(number3, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
};

function func4() {
	checker = 'h1minus';
	if (key2 == 'mitch') {
    updatePlayer(number4, "<p><b>{player2}</b> just gave a speech on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'cruz') {
 		updatePlayer(number4, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
  else if (key2 == 'trump') {
 		updatePlayer(number4, "<p><b>{player2}</b> just had a debate on {computerMitch}, reducing {player1}'s status by {number}</p>" );
  }
};

// randomizes which function get executed from stackoverflow

function random(){
  var functionNumber  = [1,2,3,4];
  var i = functionNumber[Math.floor(Math.random() * functionNumber.length)];
  if(i<=0) return random();
  return i;
};
function execute(){
  var i = random();
  eval('func'+i+'()');
  console.log("this")
};



})



