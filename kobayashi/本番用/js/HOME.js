const imageContainer = document.querySelector('.image-container');
const images = [
    document.querySelectorAll('.imageactive'),
    document.querySelectorAll('.imageactive2'),
    document.querySelectorAll('.imageactive3'), // 追加
    document.querySelectorAll('.imageactive4'), // 追加
    document.querySelectorAll('.imageactive5'), // 追加
];
let currentIndex = 0;

function fadeInAndOut() {
    const currentImages = images[currentIndex % images.length];
    const nextImages = images[(currentIndex + 1) % images.length];

    // 各画像の初期状態を設定
    currentImages.forEach(image => {
        image.classList.add('initial');
    });

    // 新しい画像は非表示
    nextImages.forEach(image => {
        image.classList.remove('initial'); // 初期状態をリセット
        image.classList.add('fade-out');   // フェードアウトの状態に設定
    });

    // ① imageactiveが画面の真ん中、少し下にある。
    currentImages.forEach(image => {
        image.style.transition = 'opacity 1s, transform 1s';
        image.style.opacity = 1;
        image.style.transform = 'translate(-10%, 20%)';
    });

    // ② 6秒経過したらimageactiveは右に少し移動しながら1秒かけフェードアウト。
    // 同時に左から①でimageactiveが表示されていた位置にimageactive2を移動させながら1秒かけフェードイン。
    setTimeout(() => {
        // 以下、現在の画像 (imageactive) の処理
        currentImages.forEach(image => {
            // フェードアウトのアニメーション設定
            image.style.transition = 'opacity 1s, transform 1s';
            image.style.opacity = 0; // 画像を透明にする
            image.style.transform = 'translate(10%, 20%)'; // 画像を右に少し移動
        });

        // 6秒後に新しい画像を表示する
        setTimeout(() => {
            // 以下、新しい画像 (imageactive2) の処理
            nextImages.forEach(image => {
                // フェードインのアニメーション設定
                image.style.transition = 'opacity 1s, transform 1s';
                image.style.opacity = 1; // 画像を不透明にする
                image.style.transform = 'translate(10%, 20%)'; // 画像を左から指定の位置に移動
            });

            // すべての画像を非表示に
            currentImages.forEach(image => {
                image.style.opacity = 0;
                image.style.transform = 'translate(10%, 20%)';
            });

            // ③ ループ
            setTimeout(() => {
                currentIndex++;

                // 初期状態に戻す
                images.forEach(imageList => {
                    imageList.forEach(image => {
                        image.style.opacity = 0;
                        image.style.transform = 'translate(-20%, 20%)';
                    });
                });

                // 6秒後に次の画像を表示する
                fadeInAndOut();
            }, 0); // 0秒後に実行
        }, 1000); // フェードアウト後、1秒後に新しい画像を表示する
    }, 6000); // 6秒後に実行
}

// 初期状態: 最初の画像を表示
images[0].forEach(image => {
    image.style.opacity = 1;
    image.style.transform = 'translate(-50%, 20%)';
});

// 新しい画像は非表示
images.slice(1).forEach(imageList => {
    imageList.forEach(image => {
        image.style.opacity = 0;
        image.style.transform = 'translate(-50%, 20%)';
    });
});

// 6秒ごとに画像を切り替える
setTimeout(fadeInAndOut, 6000);