document.addEventListener('DOMContentLoaded', function () {
    // triangle要素を取得
    var triangle = document.querySelector('.triangle');
    // Other-portraits要素を取得
    var otherPortraits = document.querySelector('.Other-portraits');
  
    // triangleがクリックされた時の処理
    triangle.addEventListener('click', function () {
      // Other-portraitsにshowクラスを追加
      otherPortraits.classList.add('show');
    });
  });