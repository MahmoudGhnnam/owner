'use strict';

var score =0;
var username = prompt ('what is your name?');
console.log ('username',username);
alert('WELCOME! ' + username);

var isownermale = prompt ('what do you think! am i a male ?');
console.log ('isownerfemale',isownermale);
if (isownermale === 'no' || isownermale === 'n' ) {
  alert('Correct!');
  score = score+1;
  console.log ('score', score);
} else {
  alert('haha not really');
}

var isownerswimmer = prompt (' am i a good swimmer ?');
console.log ('isownerswimmer',isownerswimmer);
if (isownerswimmer === 'no' || isownerswimmer === 'n' ) {
  alert('Correct!');
  score = score+1;
  console.log ('score', score);
} else {
  alert('nooope');
}


var isownerteenager = prompt ('do you think that im older than eighteen ?');
console.log ('isownerteenager',isownerteenager);
if (isownerteenager.toLocaleLowerCase() === 'y' || isownerteenager.toLocaleLowerCase() ==='yes') {
  alert('are you one of my parents :D');
  score = score+1;
  console.log ('score', score);
} else {
  alert('nope guess it again');
}


var isownergamer = prompt ('what about knowing me closer! ummm am i a gamer ?');
console.log ('isownergamer',isownergamer);
if (isownergamer.toLocaleLowerCase() === 'n' || isownergamer.toLocaleLowerCase() === 'no') {
  alert('Yees right guessing');
  score = score+1;
  console.log ('score', score);
} else {
  alert('not really :( ');
}


var isownernice = prompt ('do you think that im a nice person?');
console.log ('isownernice',isownernice);
if (isownernice.toLocaleLowerCase() === 'y' || isownernice.toLocaleLowerCase() === 'yes') {
  alert('hahaaha thanksss ' + username);
  score = score+1;
  console.log ('score', score);
  document.write('<h3>a big show to the sweet visitor !</h3>');
} else {
  alert('go out ' + username);
}



// the numberber is 7
alert ('Ummmm, what about trying with a guessing game! i will pick a number between 0 to 10, try to guess it and write it down');

for (var index = 0; index < 4; index++) {
  var number = prompt();
  parseInt(number, 4);
  console.log ('number', number);
  if (number == 7) {
    alert ('Good job thats correct! congrats');
    console.log ('score', score);
    score = score+1;
    break;
  }
  else if (number <= 5 && number >= 0) {
    alert ('too low');
  }
  else if (number > 8 && number <= 10) {
    alert ('too high');
  }
  else if (number == 6 || number == 8) {
    alert ('well, good trial ! you are getting closer ');
  }
  else {
    alert ('undefined');
  }
}
alert ('well then !the answer is 7');

var Bmovie = ['The Shawshank Redemption','The Godfather', 'The Dark Knight' , 'Pulp Fiction', 'The Lord of the Rings'];
alert ('So now it is another guessing game, i will ask you a question with more than one correct answer');
alert ('but you have only 6 trials ok!');
alert ('write down one of the best five movies in the world according to IMDb ;) ');
var i = 0;
while (i < 6) {
  var movie = prompt();
  console.log(movie);
  if (movie === Bmovie[0] || movie === Bmovie[1] || movie === Bmovie[2] || movie === Bmovie[3] || movie === Bmovie[4] ) {
    alert ('correct! it seems that you are a big fan of hollywood');
    console.log ('score', score);
    score = score+1;
    break;
  } else {
    alert ('try again');
  }
  i=i+1;
}
alert('then lets see all of the correct choices');
alert('The Shawshank Redemption , The Godfather , The Dark Knight , Pulp Fiction , The Lord of the Rings');

alert('well now i just will tell you the score');

console.log ('score', score);
alert('your score is ' + score + '/7');

