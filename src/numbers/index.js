const isEven = (num) => {
  if(num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const sum = (arr) => {
  return arr.reduce((acc,curVal) => acc + curVal);

}

const comboSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) { 
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}