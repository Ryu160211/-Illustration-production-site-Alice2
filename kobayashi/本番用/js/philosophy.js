document.addEventListener("DOMContentLoaded", function () {
  // 画像の読み込みが完了したらフェードインを開始
  const images = document.querySelectorAll(".top img");
  images.forEach((image) => {
    if (image.complete) {
      image.classList.add("show");
    } else {
      image.onload = function () {
        image.classList.add("show");
      };
    }
  });
});
