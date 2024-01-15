document.addEventListener("DOMContentLoaded", function () {
  // LocalStorageから値を取得
  var name = localStorage.getItem("name");
  var Gmail = localStorage.getItem("Gmail");
  var PS = localStorage.getItem("PS");

  // 取得した値を表示
  document.getElementById("confirmedName").value = name;
  document.getElementById("confirmedGmail").value = Gmail;
  document.getElementById("confirmedPS").value = PS;

  // 入力フィールドを読み取り専用に設定
  document.getElementById("confirmedName").readOnly = true;
  document.getElementById("confirmedGmail").readOnly = true;
  document.getElementById("confirmedPS").readOnly = true;
});
