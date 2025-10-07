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

// Postcode validation
const postcode = document.getElementById("postcode");
const postcodeValidator = new Validator(postcode);

postcodeValidator.addValidCheck((value) => {
  return value.length > 0;
}, "Please enter a postcode");

postcodeValidator.addValidCheck((value) => {
  const postcodeRegExp = /^[0-9]+$/;
  return postcodeRegExp.test(value);
}, "Postcode can only contain numbers");

postcodeValidator.addValidCheck((value) => {
  return value.length <= 10;
}, "Postcode must be less than 10 digits long");

postcode.addEventListener("blur", postcodeValidator.isValid);

// Password validation
const password = document.getElementById("password");
const passwordValidator = new Validator(password);

passwordValidator.addValidCheck((value) => {
  return value.length > 0;
}, "Please enter a password");

passwordValidator.addValidCheck((value) => {
  return value.length >= 8;
}, "Password must be 8 characters or longer");

passwordValidator.addValidCheck((value) => {
  const passwordRegExp = /(?=.*\d)/;
  return passwordRegExp.test(value);
}, "Password must include at least one number");

passwordValidator.addValidCheck((value) => {
  const passwordRegExp = /[!@#$%^&*(),.?":{}|<>;]/;
  return passwordRegExp.test(value);
}, "Password must include at least one special character");

password.addEventListener("blur", passwordValidator.isValid);

const confirmPassword = document.getElementById("password-confirm");
const confirmPasswordValidator = new Validator(confirmPassword);

confirmPasswordValidator.addValidCheck((value) => {
  return value.length > 0;
}, "Please confirm your password");

confirmPasswordValidator.addValidCheck((value) => {
  const passwordString = password.value;
  return value === passwordString;
}, "Passwords must match");

confirmPassword.addEventListener("blur", confirmPasswordValidator.isValid);
