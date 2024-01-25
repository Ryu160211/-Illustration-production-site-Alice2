function onClickFollowButton(creator_id) {
  if (document.getElementById("login").dataset.is_login === "false") {
    alert("ログインしてください");
    return;
  }

  $.ajax({
    url: "/follow",
    type: "POST",
    data: { creator_id: creator_id },
  })
    .done(function (received_data) {
      var data = JSON.parse(received_data);
      var is_follow = data["is_follow"];

      if (is_follow === "true") {
        $(".follow-button").attr("class", "followed-button");
        $(".follow").attr("class", "followed");
        $(".followed").text("followed");
      } else {
        $(".followed-button").attr("class", "follow-button");
        $(".followed").attr("class", "follow");
        $(".follow").text("follow");
      }
    })
    .fail(function () {
      console.log("failed");
    });
}
