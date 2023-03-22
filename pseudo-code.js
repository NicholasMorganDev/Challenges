//Write a function that takes a number of adults a number of children and a number of
//beds in a vacation home and returns true if their are enough beds for everyone
//and false if not. Assume that all adults are couples and sleep 2 to a bed.

//Divide # of adults by 2

//Add that to number of kiddos

//Is that result less than or equal to the # of beds


function vacation(adults, kids, beds){
    const adults1 = adults / 2;
    const bedsReq = adults1 + kids;
    if (bedsReq <= beds){
        console.log('True')
    } else {
        console.log('False')
    }
}
vacation(8, 4, 8)

//let answer = (result === beds) ? true : false
//console.log(vacation(8, 4, 5))

function enoughBeds (numAdults, numKids, numBeds){
    const adultsBeds = numAdults / 2;
    const totalBedsNeeded = adultsBeds + numKids;
    if (totalBedsNeeded <= numBeds){
        return true
    } else {
        return false
    }
}

const canWeFit = enoughBeds(8, 4, 5)
console.log ('Can we fit?', canWeFit)