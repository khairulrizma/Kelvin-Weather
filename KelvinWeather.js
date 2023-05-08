//Build Kelvin Weather
//need to convert Kelvin to Celsius

//create const variable name kelvin and set to 293
const kelvin = 293

//create variable celsius and subtract kelvin with 273
let celsius = kelvin - 273

//store the answer in fahrenheit
// let fahrenheit = celsius * (9/5) + 32

//use Math.floor to get integer value
let fahrenheit = Math.floor(celsius * (9 / 5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//convert celsius to Newton
let newton = celsius * (33 / 100)
console.log(Math.floor(newton))
