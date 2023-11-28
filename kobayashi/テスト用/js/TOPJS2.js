function showComento() {
  var comentobox = document.getElementById("comento");
  comentobox.style.display = "block";
  comentobox.style.opacity = "1";
}

function hideComento() {
  var comentobox = document.getElementById("comento");
  comentobox.style.display = "none";
  comentobox.style.opacity = "0";
}

function handleHoverJS2(isHovered) {
  animateImageContainerJS2(isHovered);
  animateComento(isHovered);
}

function animateImageContainerJS2(isHovered) {
  var imageContainer = document.querySelector('.image-container');

  if (isHovered) {
      imageContainer.style.transform = 'translateY(100px)';
      imageContainer.style.opacity = '0.8';
  } else {
      imageContainer.style.transform = 'translateY(0)';
      imageContainer.style.opacity = '1';
  }
}

function animateComento(isHovered) {
  var comentobox = document.getElementById("comento");

  if (isHovered) {
      comentobox.style.transform = 'translateY(-20px)';
      comentobox.style.opacity = '1';
  } else {
      comentobox.style.transform = 'translateY(0)';
      comentobox.style.opacity = '0';
  }

}

function handleHover(isHovered) {
  animateImageContainerJS2(isHovered);
  if (isHovered) {
      showComento();
  } else {
      hideComento();
  }
}

