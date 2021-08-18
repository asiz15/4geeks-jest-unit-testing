
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (ammount = 0) => {

    return {
        ammount: +(ammountValidator(ammount) * oneEuroIs.USD).toFixed(1),
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
    const inEUR = +(ammountValidator(ammount) / oneEuroIs.JPY).toFixed(1)
    
    return {
        ammount: +(inEUR * oneEuroIs.GBP).toFixed(1),
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