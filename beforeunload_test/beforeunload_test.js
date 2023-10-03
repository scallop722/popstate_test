window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";

  document.getElementById("displayTarget").innerHTML = "ブラウザバックを検知";
  console.log("back");
  alert("back");
});