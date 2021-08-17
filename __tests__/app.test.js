const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('../app.js')

describe('Testing over currencies converters', () => {
   describe('EUR-USD', () => {
      test('must return an object with ammount, currency, symbol and mode properties', function () {
         expect(typeof (fromEuroToDollar())).toBe('object')
         expect(fromEuroToDollar().ammount).not.toBeUndefined()
         expect(fromEuroToDollar().currency).not.toBeUndefined()
         expect(fromEuroToDollar().symbol).not.toBeUndefined()
         expect(fromEuroToDollar().mode).not.toBeUndefined()
      })
   
      test('1 Eur must return 1.2 USD', function () {
         expect(fromEuroToDollar(1).ammount).toBe(1.2)
      })
      test('If receive a string must return 0 as ammount', function () {
         expect(fromEuroToDollar('this is a long text').ammount).toBe(0)
      })
   
      test('fromEuroToDollar must return a currency name', function () {
         expect(fromEuroToDollar().currency).toBe('USD')
      })
      test('fromEuroToDollar must return an ammount', function () {
         expect(fromEuroToDollar().ammount).not.toBeNull()
      })
      test('fromEuroToDollar must not return an NaN', function () {
         expect(fromEuroToDollar(2).ammount).not.toBeNaN()
      })
      test('fromEuroToDollar.ammount type must be Number', function () {
         expect(typeof (fromEuroToDollar().ammount)).toBe('number')
      })
      test('fromEuroToDollar.mode must be equal to EUR-USD', function () {
         expect(fromEuroToDollar().mode).toBe('EUR-USD')
      })
      test('fromEuroToDollar.symbol must be equal to $', function () {
         expect(fromEuroToDollar().symbol).toBe('$')
      })
   })
   describe('USD-JPY', () => {
      test('must return an object with ammount, currency, symbol and mode properties', function () {
         expect(typeof (fromDollarToYen())).toBe('object')
         expect(fromDollarToYen().ammount).not.toBeUndefined()
         expect(fromDollarToYen().currency).not.toBeUndefined()
         expect(fromDollarToYen().symbol).not.toBeUndefined()
         expect(fromDollarToYen().mode).not.toBeUndefined()
      })
      test('1.2 USD must return 127.9 JPY', function () {
         expect(fromDollarToYen(1.2).ammount).toBe(127.90)
      })
      test('If receive a string must return 0 as ammount', function () {
         expect(fromDollarToYen('this is a long text').ammount).toBe(0)
      })
   
      test('fromDollarToYen must return a currency name', function () {
         expect(fromDollarToYen().currency).toBe('JPY')
      })
      test('fromDollarToYen must return an ammount', function () {
         expect(fromDollarToYen().ammount).not.toBeNull()
      })
      test('fromDollarToYen must not return an NaN', function () {
         expect(fromDollarToYen(2).ammount).not.toBeNaN()
      })
      test('fromDollarToYen.ammount type must be Number', function () {
         expect(typeof (fromDollarToYen().ammount)).toBe('number')
      })
      test('fromDollarToYen.mode must be equal to USD-JPY', function () {
         expect(fromDollarToYen().mode).toBe('USD-JPY')
      })
      test('fromDollarToYen.symbol must be equal to ¥', function () {
         expect(fromDollarToYen().symbol).toBe('¥')
      })
   })
   describe('JPY-GBP', () => {
      test('must return an object with ammount, currency, symbol and mode properties', function () {
         expect(typeof (fromYanToPound())).toBe('object')
         expect(fromYanToPound().ammount).not.toBeUndefined()
         expect(fromYanToPound().currency).not.toBeUndefined()
         expect(fromYanToPound().symbol).not.toBeUndefined()
         expect(fromYanToPound().mode).not.toBeUndefined()
      })
      test('127.9 JPY must return 0.8 GBP', function () {
         expect(fromYanToPound(127.9).ammount).toBe(0.8)
      })
      test('If receive a string must return 0 as ammount', function () {
         expect(fromYanToPound('this is a long text').ammount).toBe(0)
      })
   
      test('fromYanToPound must return a currency name', function () {
         expect(fromYanToPound().currency).toBe('GBP')
      })
      test('fromYanToPound must return an ammount', function () {
         expect(fromYanToPound().ammount).not.toBeNull()
      })
      test('fromYanToPound must not return an NaN', function () {
         expect(fromYanToPound(2).ammount).not.toBeNaN()
      })
      test('fromYanToPound.ammount type must be Number', function () {
         expect(typeof (fromYanToPound().ammount)).toBe('number')
      })
      test('fromYanToPound.mode must be equal to USD-JPY', function () {
         expect(fromYanToPound().mode).toBe('JPY-GBP')
      })
      test('fromYanToPound.symbol must be equal to ¥', function () {
         expect(fromYanToPound().symbol).toBe('£')
      })
   })
})
