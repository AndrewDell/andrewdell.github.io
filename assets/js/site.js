// Progressive enhancement only. The site works fully without this file.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    });
  }
  // Copy buttons: <button class="copy" data-copy="text">Copy</button> with a sibling .copied[aria-live]
  document.querySelectorAll("button.copy").forEach(function (b) {
    b.addEventListener("click", function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(b.dataset.copy || "").then(function () {
        var msg = b.parentNode.querySelector(".copied");
        if (msg) { msg.textContent = "Copied!"; setTimeout(function () { msg.textContent = ""; }, 2000); }
      });
    });
  });
})();
