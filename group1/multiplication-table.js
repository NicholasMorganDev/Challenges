
const multiplicationTable = (max) => {
  let multiInd = {}
  for (let i = 1; i <= max; i++) {
    let arr = []
    arr.push(i)
    multiInd[arr[0]] = arr
      for (let j = 0; j <= max; j++) {
      arr.push(arr[0] + arr[j])
    }
  }
  let multiTable = {}
  for (let i = 1; i <= max; i++) {
    let array = multiInd[i]
    let arrString = ''
  
  for (j = 0; j < max; j++) {
    let element = array[j]
    let numDisplay = ''
    switch (true) {
      case (element > 0) && (element < 10) :
        numberDisplay = `   ${element}`;
        break;

      case (element >= 10) && (element <= 100) :
        numberDisplay = `  ${element}`
        break;
      
      case (element >= 100) && (element < 1000) :
        numberDisplay = ` ${element}`
        break;

      default:
        numberDisplay = `${element}`;

    }
      arrString = arrString + numberDisplay
    // arrString = arrString + array[j] + ' '
    };
    multiTable[i] = arrString
  }
  for (i = 1; i <= max; i++) {
    console.log('|', multiTable[i], '|')
    
    }
  }

console.log('📕 Multiplication Table 📕')
console.log('-----------------------------------------------')
multiplicationTable(10)
console.log('-----------------------------------------------')
