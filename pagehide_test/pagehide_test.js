const storageKey = "pagehideHistory"

let pagehideHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
        // 配列の各要素をli要素として追加
const displayTarget = document.getElementById("displayTarget");
pagehideHistory.forEach(history => {
  const listItem = document.createElement("li");
  listItem.textContent = history;
  displayTarget.appendChild(listItem);
});

// 履歴追加
window.addEventListener("pagehide", () => {
  pagehideHistory.push(new Date());
  localStorage.setItem(storageKey, JSON.stringify(pagehideHistory));
});

// 履歴削除
document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  pagehideHistory = [];
  while( displayTarget.firstChild ){
    displayTarget.removeChild( displayTarget.firstChild );
  }
});

