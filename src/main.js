/**
 * Adds two numbers and returns their sum
 * @param {number} n The first number
 * @param {number} m The second number
 * @returns n + m
 */
function addTwoNumbers (n, m) {
  return Number(n) + Number(m)
}

/**
 * Multiplies two numbers and returns their sum
 * @param {number} n The first number
 * @param {number} m The second number
 * @returns n * m
 */
function multiplyTwoNumbers (n, m) {
  return Number(n) * Number(m)
}

/**
 * Says "Hello!" ten times
 */
function sayHello () {
  for (let i = 0; i < 10; i++) {
    console.log('Hello!')
  }
}

/**
 * Foo!
 */
function foo () {
  console.log('foo')
}

/**
 * Bar!
 */
function bar () {
  console.log('bar')
}

/**
 * Bar 2!
 */
function bar2 () {
  console.log('bar2')
}

const banana = 1
const banaa2 = 2
const banana3 = 3

console.log(addTwoNumbers(banana, banaa2))
console.log(multiplyTwoNumbers(banana, banana3))
console.log(banana3)
console.log('Hi')
sayHello()
foo()
bar()
bar()
bar2()
