/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Script Running');

//use a variable to "capture" and element using the id.
const input = document.querySelector("#userInput")
console.log(input)

const picBox = document.querySelector("#pictureBox")
console.log(picBox)

const msg = document.querySelector("#message")
console.log(msg)

input.addEventListener("hello", (event)=> {
  console.log("HELLERRR!")
})