// app.js

document.addEventListener("DOMContentLoaded", () => {

  const bootLines = [
    "> MOUNTING LEDGER DB...",
    "> INITIATING QUEUE WORKERS...",
    "> CONNECTING PROVIDER FABRIC...",
    "> ENVIRONMENT READY."
  ];

  const bootContainer = document.getElementById("boot-text");

  let delay = 400;

  bootLines.forEach((line) => {

    setTimeout(() => {

      const el = document.createElement("div");

      el.innerText = line;

      bootContainer.appendChild(el);

    }, delay);

    delay += 400;

  });

  setTimeout(() => {

    const overlay = document.getElementById("boot-overlay");

    overlay.style.opacity = "0";
    overlay.style.transform = "translateY(-20px)";

    document.body.classList.remove("overflow-hidden");

    document.getElementById("top-bar").style.opacity = "1";

    document.getElementById("main-nav").style.opacity = "1";
    document.getElementById("main-nav").style.transform = "translateY(0)";

    document.getElementById("main-content").style.opacity = "1";

    document.getElementById("main-footer").style.opacity = "1";

  }, delay + 600);

  setInterval(() => {

    const now = new Date();

    const timeEl = document.getElementById("live-time");

    if(timeEl) {
      timeEl.innerText =
        now.toISOString().substring(11,19) + " UTC";
    }

  }, 1000);

});

function switchTab(tabId) {

  const tabs = ["core","domains","runtime","design"];

  tabs.forEach((tab) => {

    const tabEl = document.getElementById("tab-" + tab);

    tabEl.classList.remove("tab-active");

  });

  document
    .getElementById("tab-" + tabId)
    .classList.add("tab-active");

}
