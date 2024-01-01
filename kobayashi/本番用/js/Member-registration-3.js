window.onload = function () {
  // localStorageからHTML1で保存した入力内容を取得してHTML2に表示
  document.getElementById("confirmedName").value =
    localStorage.getItem("confirmedName");
  document.getElementById("confirmedGmail").value =
    localStorage.getItem("confirmedGmail");
  document.getElementById("confirmedPS").value =
    localStorage.getItem("confirmedPS");
};
