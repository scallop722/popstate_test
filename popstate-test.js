history.pushState(null,null,null);
window.addEventListener("popstate", (e) => {
  console.log("back");
  alert("back");
});