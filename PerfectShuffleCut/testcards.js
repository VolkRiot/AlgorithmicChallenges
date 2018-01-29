
function generateDeck (n) {
    var deck = [];
    for(var i = 1; i <= n; i++){
        deck.push(i);
    }
    return deck;
}

function generateArrayValue (n) {
    var arrayValues = [];
    for(var i = 0; i < n; i++){
        arrayValues.push(i);
    }
    return arrayValues;
}


function howManyShuffles (deck, c){

    var copyOfDeck = [...deck];    
    var topPortion = deck.splice(0, c);
    var bottomPortion = deck;
    var shuffledDeck = shuffleCards(topPortion, bottomPortion);
    var counter = 1;

    
    // console.log(shuffledDeck);

    var commonCycles = [];
    var arrayValues = generateArrayValue(copyOfDeck.length);
    var checkedIndx = [];

    // console.log('All index values are ', arrayValues);

    while (arrayValues.length !== 0) {

    for(var i = 0; i < arrayValues.length; i++) {
        if (copyOfDeck[arrayValues[i]] === shuffledDeck[arrayValues[i]]){
                if(commonCycles.indexOf(counter) == -1) {
                    commonCycles.push(counter);
                }
                checkedIndx.push(i);
            }
        }

        // Remove alredy checked;
        for (var i = checkedIndx.length - 1; i >= 0; i--){
            arrayValues.splice(checkedIndx[i], 1);
        }

        checkedIndx = [];

        topPortion = shuffledDeck.splice(0, c);
        bottomPortion = shuffledDeck;
        shuffledDeck = shuffleCards(topPortion, bottomPortion);
        counter++;
    }
    console.log('Final commonCycles list', commonCycles);
    return lcmIter(commonCycles, commonCycles.length);
    
}


function shuffleCards (topPortion, bottomPortion) {
    
    var shuffledDeck = [];

    while (topPortion.length !== 0 && bottomPortion.length !== 0) {
        shuffledDeck.unshift(topPortion.pop());
        shuffledDeck.unshift(bottomPortion.pop());
    }
    var leftOver = topPortion.length > 0 ? topPortion : bottomPortion;
    var shuffledDeck = leftOver.concat(shuffledDeck);
    return shuffledDeck;

}

// Calculate LCM Code Helper
//////////////////////////////////////////////////////////////////////////////

function gcd(max,min){
    var rem = max%min;
    max=min; // update variables until remainder is equal to 0
    min=rem;
    if(rem === 0) {
        return max; // return the max variable for GCD
    } 
    else {
        return  gcd(max,min);
    }
}

//This function computes the LCM
function lcm(a,b){
    return (a*b)/gcd(a,b)
}

//This function is the Iterator, it computes the LCM for the numbers
//in the INPUT array recursively by calling the previous function
function lcmIter(arr,len){
    //LENGTH of array -> 2 is the base case here, if there are only  
    //two numbers just compute its LCM and return it.
    if(len === 2){
        return lcm(arr[0],arr[1])
    }
    //If there are more than two numbers, compute the LCM of last 
    //number with the rest of array(now the array is one less)
    else{
        return lcm(arr[len-1],lcmIter(arr,len-1))
    }
}
//This is your input array
var array = generateDeck(105);
//call your iterator with the array and its length

console.log('Shuffles needed:', howManyShuffles(array, 24));

// console.log("Call to doSomething took " + (end - start) + " milliseconds.")
