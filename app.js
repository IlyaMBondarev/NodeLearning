const colors = require('colors')

function prime(num = 1) {
    if (isNaN(+num)) {
        console.log(`Не число\n`)
        return
    }

    let res = 0
    const colorsForPrimes = ['red', 'yellow', 'green']
    let indexOfColor = 0
    const primeNumbers = []

    for(let candidate = 2; candidate <= num; candidate++) {
        let isPrime = true

        for(let i = 0; i < primeNumbers.length; i++) {
            if (candidate % primeNumbers[i] === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            res++
            indexOfColor = colorsForPrimes[(res-1) % colorsForPrimes.length]
            console.log(colors[indexOfColor](candidate))
            primeNumbers.push(candidate)
        }
    }

    !res && console.log(colors[colorsForPrimes[0]]('Нет простых чисел'))
    
    console.log(' ')
}

const args = process.argv.slice(2)

args.forEach(arg => prime(arg))