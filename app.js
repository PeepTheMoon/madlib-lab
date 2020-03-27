console.log('Howdy there!');

// Get Dom Elements

// get elements from html by id

//get word inputs from user
const noun1Input = document.getElementById('noun1-input');

const noun2Input = document.getElementById('noun2-input');

const noun3Input = document.getElementById('noun3-input');

const noun4Input = document.getElementById('noun4-input');

const noun5Input = document.getElementById('noun5-input');

const noun6Input = document.getElementById('noun6-input');

const noun7Input = document.getElementById('noun7-input');

const noun8Input = document.getElementById('noun8-input');

const verb1Input = document.getElementById('verb1-input');

const verb2Input = document.getElementById('verb2-input');

const verb3Input = document.getElementById('verb3-input');

const verb4Input = document.getElementById('verb4-input');

// spans to put words into madlib
const madlibContainer = document.getElementById('mad-lib-container');

// need container that holds all of the inputs
const inputContainer = document.getElementById('input-container');

// need a button to add the event listener 
const myButton = document.getElementById('button');

// add event listeners

function enterAnswers() {
    // this event listener should . . .
    // GET the value of the inputs
    const noun1InputValue = noun1Input.value;
    const noun2InputValue = noun2Input.value;
    const noun3InputValue = noun3Input.value;
    const noun4InputValue = noun4Input.value;
    const noun5InputValue = noun5Input.value;
    const noun6InputValue = noun6Input.value;
    const noun7InputValue = noun7Input.value;
    const noun8InputValue = noun8Input.value;
    const verb1InputValue = verb1Input.value;
    const verb2InputValue = verb2Input.value;
    const verb3InputValue = verb3Input.value;
    const verb4InputValue = verb4Input.value;

    // use the input values to SET the value of our spans
    console.log(noun1InputValue, noun2InputValue, noun3InputValue, noun4InputValue, verb1InputValue, verb2InputValue, noun5InputValue, noun6InputValue, verb3InputValue, verb4InputValue, noun7InputValue, noun8InputValue);
    
    // hide the input container
    // reveal the mad lib container
}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', enterAnswers);