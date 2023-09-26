
const click = document.getElementById("click");
click.addEventListener("click",Download);

function Download() {
  document.getElementById("click").innerText = "Downloading...";
  setInterval(function () {
    document.getElementById("click").innerText = "Download";
  }, 1000);
}