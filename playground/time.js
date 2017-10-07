var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('H:mm a'));

var createdAt = 1234;
date = moment(createdAt);
console.log(date.format('H:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
