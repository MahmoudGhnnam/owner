'use strict';


var username = prompt ('what is your name?');
console.log ('username',username);
alert('WELCOME! ' + username);

var isownermale = prompt ('what do you think! am i a male ?').toLocaleLowerCase();
console.log ('isownerfemale',isownermale);
if (isownermale === 'n') {
  alert('Correct!');
} else {
  alert('haha not really');
}
var isownerteenager = prompt ('do you think that im older than eighteen ?').toLocaleLowerCase();
console.log ('isownerteenager',isownerteenager);
if (isownerteenager === 'y') {
  alert('are you one of my parents :D');
} else {
  alert('nope guess it again');
}

var isownergamer = prompt ('what about knowing me closer! ummm am i a gamer ?').toLocaleLowerCase();
console.log ('isownergamer',isownergamer);
if (isownergamer === 'n') {
  alert('Yees right guessing');
} else {
  alert('not really :( ');
}

var isownernice = prompt ('do you think that im a nice person?').toLocaleLowerCase();
console.log ('isownernice',isownernice);
if (isownernice === 'y') {
  alert('hahaaha thanksss ' + username);
  document.write('<h3>a big show to the sweet visitor !</h3>');

} else {
  alert('go out ' + username);
}

