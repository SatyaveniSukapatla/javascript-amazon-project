import { formatCurrency } from "../Js-scripts/utils/money.js"

// Automated test to test the code using the code

console.log('test suite:formatCurrency')
console.log('convert cents into dollors')

if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('works with 0')

if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('rounds to the nearese cent')
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
}