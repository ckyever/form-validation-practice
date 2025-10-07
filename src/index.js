import "./styles.css";
import { Validator } from "./Validator.js";

// Email validation
const email = document.getElementById("email");
const emailValidator = new Validator(email);

emailValidator.addValidCheck((value) => {
  return value.length > 0;
}, "Please enter an email");

emailValidator.addValidCheck((value) => {
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  return emailRegExp.test(value);
}, "Invalid email (e.g. example@email.com)");

email.addEventListener("blur", emailValidator.isValid);

// Country validation
const country = document.getElementById("country");
const countryValidator = new Validator(country);

countryValidator.addValidCheck((value) => {
  return value.length > 0;
}, "Please enter a country");

countryValidator.addValidCheck((value) => {
  const countryRegExp = /^[A-Za-z]+$/;
  return countryRegExp.test(value);
}, "Country can only contain letters");

country.addEventListener("blur", countryValidator.isValid);
