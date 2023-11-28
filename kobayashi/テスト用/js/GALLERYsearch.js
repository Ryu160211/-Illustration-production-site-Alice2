document.addEventListener('DOMContentLoaded', function () {
  
  // URLからクエリパラメータを取得
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // "search" パラメータから検索キーワードを取得
  const searchTerm = urlParams.get('search');

  // すべてのクラスを非表示にする

  // キーワードに基づいてクラスを特定して要素を表示または非表示にする
  if (searchTerm) {
    let isMatched = false;

    if (searchTerm === '妖夢' || searchTerm === '魂魄' || searchTerm === '魂魄妖夢' || searchTerm === 'ようむ') {
      isMatched = true;
      toggleClassVisibility('.you', true);
      moveElement('.you', 300, 400); // 100px右、200px下に移動
    } else {
      toggleClassVisibility('.you', false);
    }

    if (searchTerm === '魔理沙' || searchTerm === '霧雨' || searchTerm === '霧雨魔理沙' || searchTerm === 'まりさ') {
      isMatched = true;
      toggleClassVisibility('.mari', true);
      moveElement('.mari', 300, 400); // 300px右、400px下に移動
    } else {
      toggleClassVisibility('.mari', false);
    }

    if (searchTerm === '寺成美') {
      isMatched = true;
      toggleClassVisibility('.yada', true);
      moveElement('.yada', 300, 400); // 500px右、600px下に移動
    } else {
      toggleClassVisibility('.yada', false);
    }

    if (searchTerm === '高麗野' || searchTerm === 'あうん' || searchTerm === '高麗野あうん') {
      isMatched = true;
      toggleClassVisibility('.au', true);
      moveElement('.au', 300, 400); // 300px右、400px下に移動
    } else {
      toggleClassVisibility('.au', false);
    }

    if (searchTerm === '魔理沙' || searchTerm === '霧雨' || searchTerm === '霧雨魔理沙' || searchTerm === 'まりさ') {
      isMatched = true;
      toggleClassVisibility('.kiri', true);
      moveElement('.kiri', 1000, 400); // 1000px右、400px下に移動
    } else {
      toggleClassVisibility('.kiri', false);
    }
    if (searchTerm === '犬走' || searchTerm === '椛' || searchTerm === '犬走椛' || searchTerm === 'もみじ') {
      isMatched = true;
      toggleClassVisibility('.inu', true);
      moveElement('.inu', 300, 400); // 1000px右、400px下に移動
    } else {
      toggleClassVisibility('.inu', false);
    }
      if (searchTerm === '射命丸' || searchTerm === '文' || searchTerm === '射命丸文' || searchTerm === 'あや') {
        isMatched = true;
        toggleClassVisibility('.aya', true);

        moveElement('.aya', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.aya', false);
      }
      if (searchTerm === '藤原' || searchTerm === '妹紅' || searchTerm === '藤原妹紅' || searchTerm === 'もこう') {
        isMatched = true;
        toggleClassVisibility('.huji', true);

        moveElement('.huji', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.huji', false);
      }
      if (searchTerm === '蓬莱山' || searchTerm === '輝夜' || searchTerm === '蓬莱山輝夜' || searchTerm === 'かぐや') {
        isMatched = true;
        toggleClassVisibility('.hourai', true);

        moveElement('.hourai', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.hourai', false);
      }
      if (searchTerm === '鈴仙' || searchTerm === 'イナバ' || searchTerm === 'れいせん') {
        isMatched = true;
        toggleClassVisibility('.ina', true);

        moveElement('.ina', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.ina', false);
      }
      if (searchTerm === '洩矢' || searchTerm === '諏訪子' || searchTerm === '洩矢諏訪子' || searchTerm === 'すわこ') {
        isMatched = true;
        toggleClassVisibility('.suwa', true);

        moveElement('.suwa', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.suwa', false);
      }
      if (searchTerm === 'マエリベリー・ハーン' || searchTerm === 'メリー' ) {
        isMatched = true;
        toggleClassVisibility('.meri', true);

        moveElement('.meri', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.meri', false);
      }
      if (searchTerm === '八雲' || searchTerm === '紫' || searchTerm === '八雲紫' || searchTerm === 'ゆかり') {
        isMatched = true;
        toggleClassVisibility('.yukari', true);

        moveElement('.yukari', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.yukari', false);
      }
      if (searchTerm === '純狐' || searchTerm === 'じゅんこ') {
        isMatched = true;
        toggleClassVisibility('.jyun', true);

        moveElement('.jyun', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.jyun', false);
      }
      if (searchTerm === '飯綱丸' || searchTerm === '龍' || searchTerm === '飯綱丸' || searchTerm === 'いいずなまる') {
        isMatched = true;
        toggleClassVisibility('.ryu', true);

        moveElement('.ryu', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.ryu', false);
      }
      if (searchTerm === '霍青娥' || searchTerm === '霍' || searchTerm === '青娥' || searchTerm === 'せいが') {
        isMatched = true;
        toggleClassVisibility('.seiga', true);

        moveElement('.seiga', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.seiga', false);
      }
      if (searchTerm === '霧雨' || searchTerm === '魔理沙' || searchTerm === '霧雨魔理沙' || searchTerm === 'まりさ') {
        isMatched = true;
        toggleClassVisibility('.mariazu', true);

        moveElement('.mariazu', 1700, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.mariazu', false);
      }
      if (searchTerm === 'フラン' || searchTerm === 'フランドール'|| searchTerm === 'フランドールスカーレット') {
        isMatched = true;
        toggleClassVisibility('.huran', true);

        moveElement('.huran', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.huran', false);
      }
      if (searchTerm === '霧雨' || searchTerm === '魔理沙' || searchTerm === '霧雨魔理沙' || searchTerm === 'まりさ') {
        isMatched = true;
        toggleClassVisibility('.marisaaho', true);

        moveElement('.marisaaho', 300, 1200); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.marisaaho', false);
      }
      if (searchTerm === '博麗' || searchTerm === '霊夢'|| searchTerm === '博麗霊夢'||searchTerm === 'れいむ') {
        isMatched = true;
        toggleClassVisibility('.reimuaho', true);

        moveElement('.reimuaho', 300, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.reimuaho', false);
      }
      if (searchTerm === '博麗' || searchTerm === '霊夢'|| searchTerm === '博麗霊夢'||searchTerm === 'れいむ') {
        isMatched = true;
        toggleClassVisibility('.reimunasi', true);

        moveElement('.reimunasi', 1000, 400); // 1000px右、400px下に移動
      } else {
        toggleClassVisibility('.reimunasi', false);
      }
    // 他のキーワードに対応するクラスを追加
 
    if (!isMatched) {
      document.getElementById('search-results').style.display = 'block';
    }
  } else {
    // 検索キーワードが指定されていない場合も同様にメッセージを表示
    document.getElementById('search-results').style.display = 'block';
  }

  
 
});

function hideAllClasses() {
  const classList = ['.you', '.mari', '.yada', '.au', '.kiri', '.inu', '.aya', '.huji', '.hourai', '.suwa', '.meri', '.ina', '.yukari', '.jyun', '.ryu', '.seiga', '.mariazu', '.huran'
  , '.marisaaho', '.reimuaho']; // 他のクラスも追加
  classList.forEach(function(className) {
    const elements = document.querySelectorAll(className);
    elements.forEach(function (element) {
      element.style.display = 'none';
    });
  });
}

function toggleClassVisibility(className, isVisible) {
  const elements = document.querySelectorAll(className);
  elements.forEach(function (element) {
    element.style.display = isVisible ? 'block' : 'none';
  });
}

function moveElement(className, left, top) {
  const elements = document.querySelectorAll(className);
  elements.forEach(function (element) {
    element.style.position = 'absolute';
    element.style.left = left + 'px';
    element.style.top = top + 'px';
  });
}