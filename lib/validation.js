// TODO: Validate this form
// get the elements: (all text inputs, checkbox, emailInput, submitBUtton)
const allInputs = document.querySelectorAll('.form-control');
console.log('All inputs', allInputs);
const arrayAllInputs= Array.from(allInputs);
console.log("All inputs as an array", arrayAllInputs);

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
    enableButton();
  })
})

// check for checkbox
tosCheckbox.addEventListener('change', () => {
  console.log("changing checkbox state");
  // check if all inputs are valid
  enableButton();
})

// write a function to enable the button for submission
const enableButton = () => {
  // create a variable which contains a boolean to determine if all inputs are valid
  const allInputsAreFilled = allFilled(arrayAllInputs); // TOdo

  // boolean to check if all is valid
  const tosIsValid = checkboxChecked(tosCheckbox)

  if (allInputsAreFilled && tosIsValid) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true;
  }
}

// Listen to the checkbox state
const checkboxChecked = (input) => {
  return input.checked;
}

// check if all inputs are filled
const allFilled = (inputs) => {
  return inputs.every((input) => {
    return input.classList.contains("is-valid");
  });
}

// Check for input validation
const validInput = (input) => {
  if (input === emailInput) {
    emailValidation(input);
    // Check if email input is valid
  } else {
    // Add or remove the bootstrap class
    addValidationClasses(input, input.value !== "");
  }
}

// Check if email is Valid
const emailValidation = (input) => {
  //
  const isValid = /^\w+@\w+(\.\w{2,6})+$/.test(input.value);
  // Add/remove bootstrap class if valid or not
  addValidationClasses(input, isValid);
}

// add remove bootstrap classes
// .is-invalid
// .is-valid

const addValidationClasses = (input, isValid) => {
  if (isValid) {
    input.classList.add('is-valid');
    input.classList.remove("is-invalid");
  } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
  }
}
