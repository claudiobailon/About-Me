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
alert('Let\'s play a game, ' + usernameAnswer + '! I\'ll ask you a few yes or no questions about myself and we\'ll see how many you can guess correctly. Here we go!')

//=====================Europe Question===========================================================================
var EuropeAnswer = prompt('Have I ever been to Europe?');
var europeAnswer = EuropeAnswer.toUpperCase(); // makes answer all upercase so input is not case sensitive, used https://love2dev.com/blog/javascript-touppercase-tolowercase/ to figure out how to use it

if(europeAnswer === 'YES' || europeAnswer === 'Y'){
  alert('Nope, unfortunately. I was actually planning a trip there for later this year, but COVID 19 derailed that :(');
}else if(europeAnswer === 'NO' || europeAnswer === 'N'){
  alert('Correct! I was actually planning a trip there for later this year, but COVID 19 derailed that :(');
}else{
  alert('Sorry, it\'s a yes or no question');//Gives proper response if they say anything besides yes or no
}

//=========================Instrument Question==================================================================
var InstrumentAnswer = prompt('Do I know how to play an instrument?');
var instrumentAnswer = InstrumentAnswer.toUpperCase();

if(instrumentAnswer === 'YES' || instrumentAnswer === 'Y'){
  alert('Correct! I can play the saxaphone and was in jazz band in high school.');
}else if(instrumentAnswer === 'NO' || instrumentAnswer === 'N'){
  alert('Wrong, I can actually play the saxaphone and was in jazz band in high school.');
}else{
  alert('Sorry, it\'s a yes or no question');
}

//=========================Marathon Question====================================================================
var MarathonAnswer = prompt('Do you think I\'ve ever run a marathon?');
var marathonAnswer = MarathonAnswer.toUpperCase();

if(marathonAnswer === 'YES' || marathonAnswer === 'Y'){
  alert('No, but thanks for believing in me!');
}else if(marathonAnswer === 'NO' || marathonAnswer === 'N'){
  alert('You guessed it! Though maybe some day I\'ll work up the endurance!');
}else{
  alert('Sorry, it\'s a yes or no question');
}

//==========================Bear Questoin===================================================================

var BearAnswer = prompt('Am I afraid of bears?');
var bearAnswer = BearAnswer.toUpperCase();
 
if(bearAnswer === 'YES' || bearAnswer === 'Y'){
  alert('Wrong!. Well, its not a phobia at least, they\'re actually my favorite animal. But if I came across one in the wild, I\'d be a little, um, concerned. I mean, who doesn\'t have a healthy fear of bears?');
}else if(bearAnswer === 'NO' || bearAnswer === 'N'){
  alert('Correct! Well, its not a phobia at least, they\'re actually my favorite animal. But if I came across one in the wild, I\'d be a little, um, concerned. I mean, who doesn\'t have a healthy fear of bears?');
}else{
  alert('Sorry, it\'s a yes or no question');
}

//=============================Pet Question===============================================================
var PetAnswer = prompt('Do I have any pets?');
var petAnswer = PetAnswer.toUpperCase();

if(petAnswer === 'YES' || petAnswer === 'Y'){
  alert('Indeed! My wife and I have two cats named Blue and Ollie :)');
}else if(petAnswer === 'NO' || petAnswer === 'N'){
  alert('You are mistaken! My wife and I have two cats named Blue and Ollie :)');
}else{
  alert('Sorry, it\'s a yes or no question');
}


//===================================Final Message====================================================================

alert('That was fun :D Thanks for going along with my game and thank you so much for visitng my page, ' + usernameAnswer + '! I\'ve written a little bio, so feel free to read it if you\'d like to learn a little bit more about me.');

