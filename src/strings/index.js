const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  let pairsArr = [];
  for(let i = 0; i < str.length; i += 2) {
    pairsArr.push(str.slice(i, i + 2));
  }
  return pairsArr;
}

const reverse = (str) => {
  let strArr = str.split('');
  let strArrRev = strArr.reverse();
  let strJoin = strArrRev.join('');
  return strJoin;

}

module.exports = {
  split,
  pairs,
  reverse
}