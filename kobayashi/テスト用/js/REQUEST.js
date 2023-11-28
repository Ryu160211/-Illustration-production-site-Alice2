// 絵師の情報を表示する四角形の要素を取得
var squareElement = document.querySelector('.square');

// 初期位置の設定
squareElement.style.left = '950px'; // 初期位置を20pxに設定

// 絵師の情報を表示する四角形がクリックされたときの処理
function handleRectangleClick() {
  // squareクラスの透明度をアニメーションで変化させる
  var opacityValue = 0;
  var animationInterval = setInterval(function () {
    opacityValue += 0.1; // 透明度の変化量
    squareElement.style.opacity = opacityValue;

    // 透明度が1になったらアニメーションを停止
    if (opacityValue >= 1) {
      clearInterval(animationInterval);

      // アニメーションで移動させる
      var moveAmount = 20; // 移動させる距離（ピクセル）
      var initialLeft = parseInt(squareElement.style.left) || 0; // 現在のleftの値を取得

      var moveInterval = setInterval(function () {
        initialLeft += moveAmount / 10; // 移動量を調整
        squareElement.style.left = initialLeft + 'px';

        // 移動が終了したらアニメーションを停止
        if (initialLeft >= 100) { // 移動が終わるポイント（例: 100px）
          clearInterval(moveInterval);
        }
      }, 50); // アニメーションのインターバル（0.5秒を10分割）
    }
  }, 50); // アニメーションのインターバル（0.5秒を10分割）

  // squareクラスの表示状態を変更（非表示 → 表示）
  squareElement.style.display = 'flex';
}