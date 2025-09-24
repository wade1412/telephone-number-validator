const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const isInputEmpty = (str) => {
  return str.trim() === "" ? true : false;
};

const isPhoneNumberLengthValid = (arr) => {
  if (arr[0] === 1 || arr.length === 11) {
    return true;
  } else if (arr.length === 10) {
    return true;
  } else return false;
};

const areBracketsValid = (arr) => {
  if (
    arr.indexOf("(") - arr.indexOf(")") === -4 ||
    arr.indexOf("(") - arr.indexOf(")") === 0
  )
    return true;
  else return false;
};

const inputCheck = (str) => {
  const invalidCharactersRegex = /[a-zA-Z!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?~]/;
  const bracketsRegex = /[-()]/;
  let cleanStr = str.replace(bracketsRegex, "").trim();
  if (
    invalidCharactersRegex.test(str) ||
    !str.startsWith("1") ||
    !isPhoneNumberLengthValid(str) ||
    !areBracketsValid(str)
  ) {
    return false;
  } else return true;
};

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  result.innerText = "";
});
