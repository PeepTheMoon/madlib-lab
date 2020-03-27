console.log('Howdy there!');
// Get Dom Elements

// get elements from html by id

//get word inputs from user

const nounInput = document.getElementById('noun-input');

//spans to put words into madlib

// need container that holds all of the inputs

// need a button to add the event listener 
const myButton = document.getElementById('button');

// add event listeners

function enterAnswers() {
    // this event listener should . . .
    // GET the value of the inputs
    const nounInputValue = nounInput.value;
    // use the input values to SET the value of our spans
    console.log('something', nounInputValue);
    // hide the input container
    // reveal the mad lib container

}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', enterAnswers);