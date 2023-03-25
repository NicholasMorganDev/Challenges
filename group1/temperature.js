//create a function that converts temperature.

function temperature (fahrenheit) {
  let celsius = Math.floor((fahrenheit - 32) * .5556);
  console.log(`Today is 80F ${celsius}.`)
}

temperature (80)

//function that converts to yen

const yenToUSD = {
  conversionRate: .0077,
  convert(amount){
    return amount * this.conversionRate
  }
}

console.log(yenToUSD.convert(500))

//get largest # in an array

const sumInt = [6,1,643,234,123,4,7,9]

const getLargestNumber = (sumInt) => {
  let highest = 0
  sumInt.forEach ((item) => {
    if (item > highest) {
      highest = item
    }
  })
  return highest 
}

console.log(getLargestNumber(sumInt))

//sum total of array

const getSumTotal = (sumInt) => {
  let sum = 0
  sumInt.forEach((item) => {
  sum += item
  })
}

//count odd Number

const countNumber = [1,3,7,6,13,20,2,5,33,9,14]

const countOddNumber = () => {
  let count = 0
  countNumber.forEach((num) => {
    if (num % 2 === 1) {
    count ++
    }
  })
  return count
}

console.log(countOddNumber())

let word = 'level'
const palindromeFinder = (word) => {
  if (word.length % 2 === 1) {

  }
}
