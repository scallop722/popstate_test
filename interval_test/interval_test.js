const timer = setInterval(() => {
  document.getElementById("displayTarget").innerHTML = "30秒経過";
  console.log("30秒経過");
  alert("30秒経過");
  clearInterval(timer);
}, 30 * 1000)
