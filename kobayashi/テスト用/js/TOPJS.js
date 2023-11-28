const imageContainer = document.querySelector('.image-container');
const images = [
    document.querySelectorAll('.imageactive'),
    document.querySelectorAll('.imageactive2'),
    document.querySelectorAll('.imageactive3'),
    document.querySelectorAll('.imageactive4'),
    document.querySelectorAll('.imageactive5')
];
let currentIndex = 0;

function fadeInAndOut() {
    const currentImages = images[currentIndex % images.length];
    const nextImages = images[(currentIndex + 1) % images.length];

    // 現在の画像をフェードアウトしながら右から左に移動
    currentImages.forEach(image => {
        image.style.transition = 'opacity 2s, transform 2s';
        image.style.opacity = 0;
        image.style.transform = 'translateX(-10%)';
    });

    // 次の画像をフェードイン
    nextImages.forEach(image => {
        image.style.transition = 'opacity 2s, transform 2s';
        image.style.opacity = 1;
        image.style.transform = 'translateX(0)';
    });

    // 7秒待って次のスライドへ
    setTimeout(() => {
        currentIndex++;

        // すべての画像を非表示に
        images.forEach(imageList => {
            imageList.forEach(image => {
                image.style.opacity = 0;
                image.style.transform = 'translateX(-10%)';
            });
        });

        setTimeout(fadeInAndOut, 0); // 7秒間の静止時間
    }, 7000); // 7秒間の表示時間
}

// 初期化: 最初の画像を表示
images[0].forEach(image => {
    image.style.opacity = 1;
    image.style.transform = 'translateX(0)';
});

// 新しい画像は非表示
images.slice(1).forEach(imageList => {
    imageList.forEach(image => {
        image.style.opacity = 0;
        image.style.transform = 'translateX(-10%)';
    });
});

// 7秒ごとに画像を切り替える
setTimeout(fadeInAndOut, 7000);

setTimeout(function() {
    var initialSquare = document.querySelector('.initial-square');
    initialSquare.style.opacity = 0;
    
    // フェードアウトが完了したら非表示にする
    initialSquare.addEventListener('transitionend', function() {
      initialSquare.style.display = 'none';
    });
  }, 200); // 1秒後に実行