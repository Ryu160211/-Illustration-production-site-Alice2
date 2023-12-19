$(document).ready(function() {
  // ページ上部に戻るボタンをクリックしたときの処理
  $(".page-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

  // スクロール位置が一定以上になったらページ上部に戻るボタンを表示
  $(window).scroll(function() {
      togglePageTopButton();
  });

  // ページ読み込み時にも一度実行
  togglePageTopButton();
});

function togglePageTopButton() {
  if ($(window).scrollTop() > 100) {
      $(".page-top").fadeIn();
  } else {
      $(".page-top").fadeOut();
  }
}