function showComento1() {
  var comentobox = document.getElementById("comento1");
  comentobox.style.display = "block";
  comentobox.style.opacity = "1";
}

function hideComento1() {
  var comentobox = document.getElementById("comento1");
  comentobox.style.display = "none";
  comentobox.style.opacity = "0";
}

function handleHoverJS3(isHovered) {
  animateImageContainerJS3(isHovered);
  animateComento1(isHovered);
}

function animateImageContainerJS3(isHovered) {
  var imageContainer = document.querySelector('.image-container');

  if (isHovered) {
      imageContainer.style.transform = 'translateY(100px)';
      imageContainer.style.opacity = '0.8';
  } else {
      imageContainer.style.transform = 'translateY(0)';
      imageContainer.style.opacity = '1';
  }
}

function animateComento1(isHovered) {
  var comentobox = document.getElementById("comento1");

  if (isHovered) {
      comentobox.style.transform = 'translateY(-20px)';
      comentobox.style.opacity = '1';
  } else {
      comentobox.style.transform = 'translateY(0)';
      comentobox.style.opacity = '0';
  }
}

function handleHover1(isHovered) {
  animateImageContainerJS3(isHovered);
  if (isHovered) {
      showComento1();
  } else {
      hideComento1();
  }
}
