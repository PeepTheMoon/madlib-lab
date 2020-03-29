console.log('Howdy there!');

// Get Dom Elements

// get elements from html by id
//get word inputs from user
const noun1Input = document.getElementById('noun1-input');
const noun1Span = document.getElementById('noun1-span');

const noun2Input = document.getElementById('noun2-input');
const noun2Span = document.getElementById('noun2-span');

const adj1Input = document.getElementById('adj1-input');
const adj1Span = document.getElementById('adj1-span');

const noun4Input = document.getElementById('noun4-input');
const noun4Span = document.getElementById('noun4-span');

const noun5Input = document.getElementById('noun5-input');
const noun5Span = document.getElementById('noun5-span');

const noun6Input = document.getElementById('noun6-input');
const noun6Span = document.getElementById('noun6-span');

const noun7Input = document.getElementById('noun7-input');
const noun7Span = document.getElementById('noun7-span');

const adj2Input = document.getElementById('adj2-input');
const adj2Span = document.getElementById('adj2-span');

const verb1Input = document.getElementById('verb1-input');
const verb1Span = document.getElementById('verb1-span');

const verb2Input = document.getElementById('verb2-input');
const verb2Span = document.getElementById('verb2-span');

const verb3Input = document.getElementById('verb3-input');
const verb3Span = document.getElementById('verb3-span');

const verb4Input = document.getElementById('verb4-input');
const verb4Span = document.getElementById('verb4-span');

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
    noun1Span.textContent = noun1InputValue;

    const noun2InputValue = noun2Input.value;
    noun2Span.textContent = noun2InputValue;

    const adj1InputValue = adj1Input.value;
    adj1Span.textContent = adj1InputValue;

    const noun4InputValue = noun4Input.value;
    noun4Span.textContent = noun4InputValue;

    const noun5InputValue = noun5Input.value;
    noun5Span.textContent = noun5InputValue;

    const noun6InputValue = noun6Input.value;
    noun6Span.textContent = noun6InputValue;

    const noun7InputValue = noun7Input.value;
    noun7Span.textContent = noun7InputValue;

    const adj2InputValue = adj2Input.value;
    adj2Span.textContent = adj2InputValue;

    const verb1InputValue = verb1Input.value;
    verb1Span.textContent = verb1InputValue;

    const verb2InputValue = verb2Input.value;
    verb2Span.textContent = verb2InputValue;

    const verb3InputValue = verb3Input.value;
    verb3Span.textContent = verb3InputValue;

    const verb4InputValue = verb4Input.value;
    verb4Span.textContent = verb4InputValue;

    // use the input values to SET the value of our spans
    console.log(noun1InputValue, noun2InputValue, adj1InputValue, noun4InputValue, verb1InputValue, verb2InputValue, noun5InputValue, noun6InputValue, verb3InputValue, verb4InputValue, noun7InputValue, adj2InputValue);
    
    // hide the input container
    inputContainer.style.display = 'none';

    // reveal the mad lib container
    madlibContainer.style.display = 'block';
}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', enterAnswers);