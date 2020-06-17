/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Script Running");

//use a variable to "capture" and element using the id.
let input = document.querySelector("#userInput");
console.log(input);
console.log(input.value);

const picBox = document.querySelector("#pictureBox")
console.log(picBox)

// const msg = document.querySelector("#message")
// console.log(msg)

input.addEventListener("input", event => {
  if ((input.value === "eleven") | ("Eleven")) {
    console.log("Yessss!");
    picBox.innerHTML += `YOU GOT ELEVEN`
  } else {
    console.log("HELLERRR?");
  }
});

