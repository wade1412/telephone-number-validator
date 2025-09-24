const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const getDigits = (raw) => raw.replace(/\D/g, "");

const isInputEmpty = (str) => {
  return str.trim() === "";
};

const isValidPhone = (str) => {
  const digits = getDigits(str);
  return (
    digits.length === 10 || (digits.length === 11 && digits.startsWith("1"))
  );
};

const areBracketsValid = (str) => {
  const bracketValidRegex = /\(\d{3}\)/;
  if (str.includes("(") || str.includes(")")) {
    return bracketValidRegex.test(str);
  } else return true;
};

const inputCheck = (str) => {
  const rawStr = str.trim();
  const invalidCharactersRegex = /[a-zA-Z!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/;
  if (
    invalidCharactersRegex.test(rawStr) ||
    !isValidPhone(rawStr) ||
    !areBracketsValid(rawStr)
  ) {
    return false;
  } else {
    return true;
  }
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
