window.addEventListener('load', function () {
  // 画像の読み込みが完了したらフェードインを開始
  const fadeInImages = (selector) => {
    const images = document.querySelectorAll(selector);
    images.forEach((image) => {
      image.classList.add("show");
    });
  };

  // topクラスの画像にフェードインを適用
  fadeInImages(".top img");

  // top2クラスの画像にフェードインを適用
  fadeInImages(".top2 img");
});
