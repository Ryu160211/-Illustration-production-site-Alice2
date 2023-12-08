document.addEventListener("DOMContentLoaded", function () {
  // 画像の読み込みが完了したらフェードインを開始
  const images = document.querySelectorAll(".top img");
  images.forEach((image) => {
    image.onload = function () {
      image.classList.add("show");
    };
  });
});
