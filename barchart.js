"use strict"
 window.addEventListener("DOMContentLoaded", init)
function init(){
    console.log("DOMLoaded");
    arrayExceeds();
   
} 
//make dynamic array that adds 1 each time to last value
let arr = [];
let count = 0;
let timeOut = 1000;
function arrayExceeds() {
  if (count < 20) {
    addSomething();
  } else {
    // remove the last no.
    //still add something
    addSomething();
    arr.shift();
  }
}

function addSomething() {
  arr.push(Math.round((Math.random())*100));
  count++;
  console.log(arr);
  setTimeout(arrayExceeds, timeOut);
  setHeight();
}

function setHeight(){
    for(let i =0; i < 20; i++){
        let bar;
        // find the bar
bar= document.querySelector(`#container > div:nth-child(${i+1})`)
 //set the height of the bar...
 bar.style.setProperty("--height", arr[i]);
 console.log(i);
 console.log("height")
    }
}
