'use strict'

//Elements
const button = document.querySelector('button');
const input = document.querySelector('#year');
const result = document.querySelector('#result');

// Function
function dogYears() {
    result.innerHTML = `Your dog has ${input.value * 7} human years.`;
    result.classList.add('active');
    if (input.value < 0) {
        result.innerHTML = `You've made a mistake. Try again`;
    } else if (input.value > 20) {
        result.innerHTML = `Your dog is already dead.`;
    }
    else if (input.value === "") {
        result.innerHTML = `Please enter numerical value.`;
    }
    else {
        return;
    }
}

// Event
button.addEventListener('click', dogYears);