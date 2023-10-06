const storageKey = "pagehideHistory"

// ローカルストレージから読み込み
let pagehideHistory = JSON.parse(localStorage.getItem(storageKey)) || [];

/**
 * ローカルストレージの内容から履歴を再描画します。
 */
const redraw = () => {
  pagehideHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
  const displayTarget = document.getElementById("displayTarget");
  while( displayTarget.firstChild ){
    displayTarget.removeChild( displayTarget.firstChild );
  }
  pagehideHistory.forEach(history => {
    const listItem = document.createElement("li");
    listItem.textContent = history;
    displayTarget.appendChild(listItem);
  });
}

redraw();

// 履歴追加
window.addEventListener("pagehide", () => {
  pagehideHistory.push(new Date());
  localStorage.setItem(storageKey, JSON.stringify(pagehideHistory));
});

// 履歴削除
document.getElementById("dataResetButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  pagehideHistory = [];
  redraw();
});

// 表示リセット
document.getElementById("displayResetButton").addEventListener("click", redraw);
