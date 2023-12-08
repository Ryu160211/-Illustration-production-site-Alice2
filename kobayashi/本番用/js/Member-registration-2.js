document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".black-square")
    .addEventListener("click", checkRequiredInputs);
});

function checkRequiredInputs(event) {
  var nameValue = document.getElementById("name").value;
  var gmailValue = document.getElementById("Gmail").value;
  var psValue = document.getElementById("PS").value;
  var confirmationValue = document.getElementById("confirmation").value;

  if (
    !nameValue ||
    !gmailValue ||
    !psValue ||
    !confirmationValue ||
    !isValidInput(nameValue) ||
    !isValidInput(gmailValue) ||
    !isValidInput(psValue) ||
    !isValidInput(confirmationValue) ||
    !isValidLength(psValue) ||
    !isValidLength(confirmationValue)
  ) {
    alert("入力されていない項目があります。もう一度入力してください。");
    event.preventDefault();
  } else {
    // HTML2に入力内容を渡す
    localStorage.setItem("confirmedName", nameValue);
    localStorage.setItem("confirmedGmail", gmailValue);
    localStorage.setItem("confirmedPS", psValue);
  }
}

function isValidInput(value) {
  var regex = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
  return regex.test(value);
}

function isValidLength(value) {
  return value.length >= 6 && value.length <= 32;
}
