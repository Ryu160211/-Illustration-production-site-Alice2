function expandElement(element) {
    element.style.transition = "transform 0.5s"; // アニメーションの設定
    element.style.transform = "scale(1.1)"; // 要素を拡大
  }
  
  function resetElement(element) {
    element.style.transition = "transform 0.5s"; // アニメーションの設定
    element.style.transform = "scale(1)"; // 要素を元のサイズに戻す
  }
  