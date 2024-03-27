
function getParams(a) {
  var b = document.getElementsByTagName("script");
  for (var i = 0; i < b.length; i++) {
    if (b[i].src.indexOf("/" + a) > -1) {
      var c = b[i].src.split("?").pop().split("&");
      var p = {};
      for (var j = 0; j < c.length; j++) {
        var d = c[j].split("=");
        p[d[0]] = d[1];
      }
      return p;
    }
  }
  return {};
  }
function hasVisited() {

    if (document.cookie.indexOf('luidz=') === -1) {
      return false;
    }
    else {
      return true;
    }

} 
const isNew = !hasVisited();
if (isNew) {
  
  const modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.style.width = "512px";
  modal.style.height = "512px";
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.backgroundColor = "red";
  modal.style.borderRadius = "8px";
  modal.style.zIndex = "1000";
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  modal.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    modal.remove();
    document.cookie = "luidz=true"
    console.log("nouveau, cookie updaté")
  });
  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.src = "https://luids.vercel.app/?id=" + getParams("luidz.js")["id"];
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.zIndex = "-1";
  iframe.style.borderRadius = "8px";
  modal.appendChild(iframe);
  window.addEventListener(
    "message",
    function (event) {
      if (event.data === "fermerModal") {
        modal.remove();
        document.cookie = "luidz=true"
        console.log("nouveau, cookie updaté")
      }
    },
    false
  );
} else {
  console.log("déjà venu")
  //It's not a new user
}
