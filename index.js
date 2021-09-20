/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = "Ashwaq Almutairi"
let yearOfBirth = 1995
let hobby = "drawing"
let funFact = "I do my work at last min and it works!"
const image = "https://lh3.googleusercontent.com/proxy/XUBCRvoBGzZd1K6jnBT-XH89Ix9rpFGPmLu3N5VEw45ZiFNkjadwM1-VBXcyzqvVIQvmo9lKjkXqoXiL4xeXv2VGa6x_BBBi2cyL_N-5YwBz6UdfHtpV"


/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${"Ashwaq Almutairi"}`;
const yearOfBirthString = `I am ${"21"}`;
const hobbyString = `My hobby is ${"drawing"}`;




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars = stars + 1;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻

  if (stars > 0)
  {
    stars = stars - 1;
  }
  else
  {
    stars = 0
  }
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars + 2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  if (stars > 1)
  {
    stars = stars - 2;
  }
  else
  {
    stars = 0
  }
}
