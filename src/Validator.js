export class Validator {
  constructor(inputElement) {
    this.field = inputElement;
    this.validCheck = [];
  }

  isValid = () => {
    // Check if input is valid
    if (this.validCheck.length === 0) {
      return;
    }

    for (const { validFunction, errorMessage } of this.validCheck) {
      if (validFunction(this.field.value) === true) {
        this.showError("");
        this.field.classList.remove("invalid");
      } else {
        this.showError(errorMessage);
        this.field.classList.add("invalid");
        break;
      }
    }
  };

  // Takes an object including
  addValidCheck(validFunction, errorMessage) {
    this.validCheck.push({ validFunction, errorMessage });
  }

  showError(message) {
    // Try find error element next to the input if it already exists
    let errorContainer = document.querySelector(`#${this.field.id} + .error`);

    // If not create a new one and add it after the input
    if (!errorContainer) {
      errorContainer = document.createElement("span");
      errorContainer.classList = "error";
      this.field.insertAdjacentElement("afterend", errorContainer);
    }

    errorContainer.textContent = message;
  }
}
