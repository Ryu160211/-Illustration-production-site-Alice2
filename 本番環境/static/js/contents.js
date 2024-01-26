// キャラクターボタン
function getRandomDarkColor() {
  // HSL形式に変換し、明度を下げる
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 101);
  const lightness = Math.floor(Math.random() * 21) + 20; // 20～40の範囲で調整
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function setRandomDarkColor(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.style.backgroundColor = getRandomDarkColor();
  }
}

// ボタンのIDを指定してランダムな暗い色をセット
setRandomDarkColor("button1");
setRandomDarkColor("button2");
setRandomDarkColor("button3");
setRandomDarkColor("button4");
setRandomDarkColor("button5");
setRandomDarkColor("button6");
setRandomDarkColor("button7");
setRandomDarkColor("button8");
setRandomDarkColor("button9");
setRandomDarkColor("button10");
setRandomDarkColor("button11");
setRandomDarkColor("button12");
setRandomDarkColor("button13");
