document.querySelector(".black-square").addEventListener("click", function () {
  // ユーザー名のチェック
  var username = document.getElementById("name").value;
  if (username.length < 2 || username.length > 7) {
    alert("2～7文字以内でユーザー名を設定してください");
    return;
  }
  if (/\s/.test(username)) {
    alert("空白を使用しないでユーザー名を設定してください");
    return;
  }
  if (username.trim() === "") {
    alert("ユーザー名を設定してください");
    return;
  }

  // パスワードのチェック
  var password = document.getElementById("PS").value;
  if (password.trim() === "") {
    alert("パスワードを設定してください");
    return;
  }
  if (/[^A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    alert("英半角数字記号以外を使用せずパスワードを設定してください");
    return;
  }
  if (password.length < 6 || password.length > 32) {
    alert("6～32文字以内でパスワードを設定してください");
    return;
  }

  // パスワード(確認)のチェック
  var passwordConfirmation = document.getElementById("confirmation").value;
  if (passwordConfirmation.trim() === "") {
    alert("パスワードを入力してください");
    return;
  }
  if (password !== passwordConfirmation) {
    alert("パスワードが一致しません");
    return;
  }

  // 全ての条件を満たした場合、LocalStorageに値を保存
  localStorage.setItem("name", username);
  localStorage.setItem("PS", password);

  // Member-registration-3.htmlに移動
  window.location.href = "Member-registration-3.html";
});
