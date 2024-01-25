function onClickLikeButton(content_id) {
  if (document.getElementById("like-button").dataset.is_login === "None") {
    alert("ログインしてください");
    return;
  }

  var count_text = $("#like-count");
  var image = $(".like-image");
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
        image.attr("src", "/static/image/common/like.png");
      } else {
        image.attr("src", "/static/image/common/unlike.png");
      }
    })
    .fail(function () {
      console.log("failed");
    });
}
