function changeImage(content_id) {
  if (document.getElementById("like_button").dataset.is_login === "None") {
    alert("ログインしてください");
    return;
  }

  var count_text = $("#like_count");
  var image = $("#like-button");
  $.ajax({
    url: "/like",
    type: "POST",
    data: { content_id: content_id },
  })
    .done(function (received_data) {
      var data = JSON.parse(received_data);
      var is_like = data["is_like"];
      var like_count = data["like_count"];
      count_text.text(like_count);
      if (is_like === "true") {
        image.children("img").attr("src", "/static/image/common/unlike.png");
      } else {
        image.attr("src", "/static/image/common/like.png");
      }
    })
    .fail(function () {
      console.log("failed");
    });
}

function handleFollowClick() {
  // クリック時の処理をここに記述
  alert("Follow button clicked!");
  // 他の処理を追加する場合はここに追加
}
