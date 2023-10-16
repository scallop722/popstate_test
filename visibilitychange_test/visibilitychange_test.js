const storageKey = "visibilitychangeHistory"

// ローカルストレージから読み込み
let visibilitychangeHistory = JSON.parse(localStorage.getItem(storageKey)) || [];

/**
 * ローカルストレージの内容から履歴を再描画します。
 */
const redraw = () => {
  visibilitychangeHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
  const displayTarget = document.getElementById("displayTarget");
  while (displayTarget.firstChild) {
    displayTarget.removeChild(displayTarget.firstChild);
  }
  visibilitychangeHistory.forEach(history => {
    const listItem = document.createElement("li");
    listItem.textContent = history;
    displayTarget.appendChild(listItem);
  });
}

redraw();

var lastState = ""
// 履歴追加
document.addEventListener("visibilitychange", () => {
  visibilitychangeHistory.push(new Date() + ":" + document.visibilityState);
  localStorage.setItem(storageKey, JSON.stringify(visibilitychangeHistory));
  redraw();
  if (lastState === "hidden" && document.visibilityState === "visible") {
    alert("非表示から表示状態になりました。");
  }
  lastState = document.visibilityState;
});

// 履歴削除
document.getElementById("dataResetButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  visibilitychangeHistory = [];
  redraw();
});

// 表示リセット
document.getElementById("displayResetButton").addEventListener("click", redraw);
