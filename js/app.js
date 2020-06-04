'use strict';

//console.log('it worked');
/*
 getting to know me
 5 questions

Let's play a game! I'll ask you a few yes or no questions about me and we'll see how many you can guess correctly! Here we go
 Have I ever been to Europe?
 A: No
 if correct "Correct! I was actually planning a trip there for later this year, but COVID 19 derailed that:("
 if false "Nope. "I was actually planning a trip there for later this year, but COVID 19 derailed that:("
 
 Do I know how to play an instrument?
 A Yes
 if correct "Correct! I can play the saxaphone and was in jazz band in high school"
 if false  "Wrong, I can actually play the saxaphone and was in jass band in high school"

 Have I ever ran a marathon?
 A No
 if correct " You guessed it! Though maybe some day I'll work up the endurance"
 if false " No, but thanks for believing in me!"

 Am I afraid of bears?
 a no
 if correct "Correct. Well, its not a phobia, they're actually my favorite animal, but if i came across one in the wild i'd be a little, um, concerned"
 if false Wrong!. Well, its not a phobia, they're actually my favorite animal, but if i came across one in the wild i'd be a little, um, concerned"

 Do I have pets?
  a yes
  if correct (Indeed! My wife and I hace two cats named Blue and Ollie:)
  if false (Incorrect.  )
 */
//===============================Greeting================================================================

var usernameAnswer = prompt('Hello! What is your name?');
alert('Hello, ' + usernameAnswer + '! My name is Claudio, welcome to my page.  I\'m excited to share a little bit about myself with you!');
alert('Let\'s play a game, ' + usernameAnswer + '! I\'ll ask you a few yes or no questions about myself and we\'ll see how many you can guess correctly. Here we go!');

// //=====================Europe Question===========================================================================

function askEuropeQuestion(){

  var europeAnswer = prompt('Have I ever been to Europe?');
  europeAnswer = europeAnswer.toUpperCase(); // makes answer all upercase so input is not case sensitive, used https://love2dev.com/blog/javascript-touppercase-tolowercase/ to figure out how to use it
  
  if(europeAnswer === 'YES' || europeAnswer === 'Y'){
    alert('Nope, unfortunately. I was actually planning a trip there for later this year, but COVID 19 derailed that :(');
    var q1 = 0;
  }else if(europeAnswer === 'NO' || europeAnswer === 'N'){
    alert('Correct! I was actually planning a trip there for later this year, but COVID 19 derailed that :(');
    q1 = 1;
  }else{
    alert('Sorry, it\'s a yes or no question');//Gives proper response if they say anything besides yes or no
    q1 = 0;
  } return q1;
} 

var q1 = askEuropeQuestion();
// console.log('q1', q1)

// //=========================Instrument Question==================================================================

function askInstrumentQuestion(){

  var instrumentAnswer = prompt('Do I know how to play an instrument?');
  var instrumentAnswer = instrumentAnswer.toUpperCase();
  
  if(instrumentAnswer === 'YES' || instrumentAnswer === 'Y'){
    alert('Correct! I can play the saxaphone and was in jazz band in high school.');
    var q2 = 1;
  }else if(instrumentAnswer === 'NO' || instrumentAnswer === 'N'){
    alert('Wrong, I can actually play the saxaphone and was in jazz band in high school.');
    q2 = 0;
  }else{
    alert('Sorry, it\'s a yes or no question');
    q2 = 0;
  } return q2;
}
  
var q2 = askInstrumentQuestion();

//=========================Marathon Question====================================================================

function askMarathonQuestion(){

  
  var marathonAnswer = prompt('Do you think I\'ve ever run a marathon?');
  var marathonAnswer = marathonAnswer.toUpperCase();
  
  if(marathonAnswer === 'YES' || marathonAnswer === 'Y'){
    alert('No, but thanks for believing in me!');
    var q3 = 0;
  }else if(marathonAnswer === 'NO' || marathonAnswer === 'N'){
    alert('You guessed it! Though maybe some day I\'ll work up the endurance!');
    q3 = 1;
  }else{
    alert('Sorry, it\'s a yes or no question');
    q3 = 0;
  } return q3;
}

var q3 = askMarathonQuestion();

// //==========================Bear Questoin===================================================================

function askBearQuestion(){

  
  var bearAnswer = prompt('Am I afraid of bears?');
  var bearAnswer = bearAnswer.toUpperCase();
  
  if(bearAnswer === 'YES' || bearAnswer === 'Y'){
    alert('Wrong!. Well, its not a phobia at least, they\'re actually my favorite animal. But if I came across one in the wild, I\'d be a little, um, concerned. I mean, who doesn\'t have a healthy fear of bears?');
    var q4 = 0;
  }else if(bearAnswer === 'NO' || bearAnswer === 'N'){
    alert('Correct! Well, its not a phobia at least, they\'re actually my favorite animal. But if I came across one in the wild, I\'d be a little, um, concerned. I mean, who doesn\'t have a healthy fear of bears?');
    q4 = 1;
  }else{
    alert('Sorry, it\'s a yes or no question');
    q4 = 0;
  } return q4;
} 

var q4 = askBearQuestion();

// //=============================Pet Question===============================================================

function askPetAnswer(){

  
  var petAnswer = prompt('Do I have any pets?');
  var petAnswer = petAnswer.toUpperCase();
  
  if(petAnswer === 'YES' || petAnswer === 'Y'){
    alert('Indeed! My wife and I have two cats named Blue and Ollie :)');
    var q5 = 1;
  }else if(petAnswer === 'NO' || petAnswer === 'N'){
    alert('You are mistaken! My wife and I have two cats named Blue and Ollie :)');
    q5 = 0;
  }else{
    alert('Sorry, it\'s a yes or no question');
    q5 = 0;
  } return q5
}

var q5 = askPetAnswer();

//========================================Interactive number questoin=====================================

function askNumberQuestion(){

  
  var intAnswer = prompt('Now you know a little more about me, but can you read my mind? I\'ll give you 4 tries to guess what number I\'m thinking of.  Pick a number between 1 and 50!');
  var numAnswer = parseInt(intAnswer); // Jennifer Chinzi helped me figure this out
  
  for (var i = 0; i < 4; i ++){
    
    if(i === 0 && numAnswer === 32){
      alert('Holy cow, ' + usernameAnswer + ', you can read minds! What will you do with all that power? Or maybe you just somehow new my favorite number was 32...');
      var q6 = 1;
      break;
    } else if(i === 3 && numAnswer === 32){
      alert('Phew! Got it on the last try! 32 is my lucky number, maybe it\'s yours too!');
      q6 = 1;
      break;
    }else if(numAnswer === 32){
      alert('Impressive! It only took you ' + (i + 1) + ' tries! How\'d you know? Maybe you used your Sherlock Holmes skills to deduce my favorite number. Well done!');
      q6 = 1;
      break;
    }else if(numAnswer < 32 && numAnswer > 0){
      alert('Nope, too low.');
    }else if ( numAnswer > 32 && numAnswer < 51){
      alert('Whoops, too high.');
    }else{
      alert('That number isn\'t between 1 and 50! Try again');
    }
    if( i < 3 ){
      intAnswer = prompt('Lets try agian! Pick a number between 1 and 50!');
      numAnswer = parseInt(intAnswer); 
    }
    if(i === 3){
      alert("Sorry, out of luck! It was 32 and it happens to be my favorite number!");
      q6 = 0;
    }
  }return q6;
}

var q6 = askNumberQuestion();

//==================================================================Array Question===============================================================================


var hpArray = ["SIRIUS", "MCGONAGALL", "HERMIONE", "LUNA", "NEVILLE", "HAGRID"];

var hpCharAnswer = prompt('I\'m a big Harry Potter fan, but who isn\'t? Everyone has their favorite characters, but can you guess one of my top 6? I\'ll give you 6 tries.').toUpperCase();

for(var guess =0; guess < 6; guess++){

  if(hpCharAnswer === hpArray[0] || hpCharAnswer === hpArray[1] || hpCharAnswer === hpArray[2] || hpCharAnswer === hpArray[3] || hpCharAnswer === hpArray[4] || hpCharAnswer === hpArray[5]){
     alert('Correct! That\'s one of them! My favorites, in no particular order are: Sirius, Mgconagall, Hermione, Luna, Neville, and, last but not least, Hagrid!');
      var q7 = 1;
     break;
    }else if(guess < 5 && guess >= 0){
      alert('Nice try, but no');
     }
    if(guess < 4){
      var hpCharAnswer = prompt('I believe in you! Make another guess.').toUpperCase();
    }
    if(guess === 4){
      var hpCharAnswer = prompt('Last try! Maybe think about someone tall and hairy.').toUpperCase();
    }
    if(guess === 5){
      alert('Really? I thought I gave it away! Oh well. FYI, my favorites, in no particular order are: Sirius, Mgconagall, Hermione, Luna, Neville, and the tall and hairy Hagrid!');
      q7=0;
    }
} 

var score= q1 + q2 + q3 + q4 + q5 + q6 + q7;

alert('You got ' + score + " out of 7 questions correct :) ");
//=====================================================Final Message====================================================================

alert('That was fun :D Thanks for going along with my game and thank you so much for visitng my page, ' + usernameAnswer + '! I\'ve written a little bio, so feel free to read it if you\'d like to learn a little bit more about me.');

