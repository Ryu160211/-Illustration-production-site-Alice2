document.getElementById('search-button').addEventListener('click', function () {
  // 検索欄の値を取得
  const searchTerm = document.getElementById('search-bar').value;
  // リダイレクトURLを生成
  const redirectURL = `GALLERYsearch.html?search=${searchTerm}`;
  
  // ページをリダイレクト
  window.location.href = redirectURL;
});

