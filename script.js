const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const isInputEmpty = (str) => {
  return str.trim() === "";
};

const isPhoneNumberLengthValid = (arr) => {
  if (arr[0] === 1 || arr.length === 11) {
    return true;
  } else if (arr.length === 10) {
    return true;
  } else return false;
};

const areBracketsValid = (arr) => {
  return (
    arr.indexOf("(") - arr.indexOf(")") === -4 ||
    arr.indexOf("(") - arr.indexOf(")") === 0
  );
};

const inputCheck = (str) => {
  const invalidCharactersRegex = /[a-zA-Z!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/;
  const bracketsRegex = /[-()\s]+/gi;
  const cleanStr = str.replace(bracketsRegex, "").trim().split("");

  if (
    invalidCharactersRegex.test(str) ||
    !str.startsWith("1") ||
    !isPhoneNumberLengthValid(cleanStr) ||
    !areBracketsValid(str)
  ) {
    return false;
  } else return true;
};

const phoneNumberCheck = (str) => {
  if (isInputEmpty(str))
    return (result.innerText = `Please provide a phone number`);
  else if (inputCheck(str))
    return (result.innerText = `Valid US number: ${str}`);
  else return (result.innerText = `Invalid US number: ${str}`);
};

checkBtn.addEventListener("click", () => {
  phoneNumberCheck(userInput.value);
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  result.innerText = "";
});
