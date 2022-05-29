// import moment here; use this package in each function
var moment = require('moment'); // require
moment().format(); 

const today = () => {
  let now = moment().format("dddd");
  return now;
}
console.log(today())
const calendar = () => {
  let cal = moment().format("MMMM DD, YYYY");
  return cal;
}
console.log(calendar());
const currentTime = () => {
  let time = moment().format("h:mm:ss A");
  return time;
}
  console.log(currentTime());
module.exports = {
  today,
  calendar,
  currentTime
}

