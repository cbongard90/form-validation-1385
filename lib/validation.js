// TODO: Validate this form
// get the elements: (all text inputs, checkbox, emailInput, submitBUtton)
const allInputs = document.querySelectorAll('.form-control');
const emailInput = document.querySelector('#email');
const tosCheckbox = document.querySelector("#tos");
const submitButton = document.querySelector(".btn");

// We put Listeners
// Listener for all inputs (blur)
allInputs.forEach((input) => {
  input.addEventListener('blur', () => {
    console.log('exiting the input');
    // check input validation
    // check if all inputs are valid
  })
})

// check for checkbox
tosCheckbox.addEventListener('change', () => {
  console.log("changing checkbox state");
  // check if all inputs are valid
})

// write a function to enable the button for submission
const enableButton = () => {
  // create a variable which contains a boolean to determine if all inputs are valid
  const allInputsAreFilled = true // TOdo

  // boolean to check if all is valid
  const tosIsValid = true

  if (allInputsAreFilled && tosIsValid) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true;
  }
}
