///// Challenge 1: Your Age in Days /////

function ageInDays(){
    var birthYear = prompt('Your birth year?');
    var ageInDays = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDays);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

///// Challenge 2: Cat Generator /////

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

///// Challenge 3: Rock Paper Scissors /////

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randRPS());
    //console.log('Computer Choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); // array 1,0 0.5,0.5 0,1
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randRPS() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice (number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, compChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'scissors': 0, 'rock': 1, 'paper':0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper':1},
    }
    var yourScore = rpsDatabase[yourChoice][compChoice];
    var compScore = rpsDatabase[compChoice][yourChoice];

    return [yourScore, compScore];
}

function finalMessage([yourScore, compScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'You tie!', 'color': 'yellow'};
    }
    else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    // remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// function repeat(yourChoice){
//     return rpsGame();
// }
