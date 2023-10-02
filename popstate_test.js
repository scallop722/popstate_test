history.pushState(null,null,null);
window.addEventListener("popstate", (e) => {
  document.getElementById("displayTarget").innerHTML = "ブラウザバックを検知";
  console.log("back");
  alert("back");
});