console.log("読み込みました");
history.pushState(null,null,null);
window.addEventListener("popstate", (e) => {
  document.getElementById("displayTarget").innerHTML = "ブラウザバックを検知";
  console.log("ブラウザバック");
  alert("ブラウザバック");
});