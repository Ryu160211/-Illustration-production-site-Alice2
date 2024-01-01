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
    !isValidInput(nameValue) ||
    !isValidLength(nameValue, 2, 7) ||
    nameValue.trim() === "" ||
    nameValue.includes(" ")
  ) {
    alert("ユーザー名を2～7文字で入力してください。空白は使用できません。");
    event.preventDefault();
    return;
  }

  if (gmailValue.trim() === "") {
    alert("Gmailを入力してください。");
    event.preventDefault();
    return;
  }

  if (
    !isValidInput(psValue) ||
    psValue !== psValue.toLowerCase() ||
    !isValidLength(psValue, 6, 32)
  ) {
    alert(
      "パスワードは半角英数記号で6～32文字以内で入力してください。大文字は使用できません。"
    );
    event.preventDefault();
    return;
  }

  if (confirmationValue.trim() === "" || confirmationValue !== psValue) {
    alert("パスワードが一致しません。再度入力してください。");
    event.preventDefault();
    return;
  }

  // 全ての条件に合致した場合
  localStorage.setItem("confirmedName", nameValue);
  localStorage.setItem("confirmedGmail", gmailValue);
  localStorage.setItem("confirmedPS", psValue);
}

function isValidInput(value) {
  var regex = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
  return regex.test(value);
}

function isValidLength(value, minLength, maxLength) {
  return value.length >= minLength && value.length <= maxLength;
}
