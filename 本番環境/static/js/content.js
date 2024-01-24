function changeImage() {
  var imageElement = document.getElementById("heartImage");

  // 画像の切り替え
  if (imageElement.src.endsWith("ハートのマーク.png")) {
    imageElement.src = "image/ハートのマーク2.png";
  } else {
    imageElement.src = "image/ハートのマーク.png";
  }
}
function handleFollowClick() {
  // クリック時の処理をここに記述
  alert("Follow button clicked!");
  // 他の処理を追加する場合はここに追加
}
