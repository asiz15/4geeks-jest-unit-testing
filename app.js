
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

 function fromEuroToDollar(ammount = 0) {

    const parsedAmmount = ammountValidator(ammount)
    return {
        ammount: +(parsedAmmount * oneEuroIs.USD).toFixed(1),
        currency: 'USD',
        symbol: '$',
        mode: 'EUR-USD'
    }
}
const fromDollarToYen = (ammount) => {
    const inEUR = ammountValidator(ammount) / oneEuroIs.USD
    
    return {
        ammount: +(inEUR * oneEuroIs.JPY).toFixed(1),
        currency: 'JPY',
        symbol: '¥',
        mode: 'USD-JPY'
    }
}
const fromYanToPound = (ammount) => {
    const parsedAmmount = ammountValidator(ammount)
    const inEUR = +(parsedAmmount / oneEuroIs.JPY).toFixed(1)
    const inGBP = inEUR * oneEuroIs.GBP.toFixed(1)
    
    return {
        ammount: inGBP,
        currency: 'GBP',
        symbol: '£',
        mode: 'JPY-GBP'
    }  
}

const ammountValidator = (ammount) => {
    if(typeof(ammount) === 'string'){
        return 0
    }
    return +ammount
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound }