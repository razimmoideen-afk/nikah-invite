(function () {
  // Guests' RSVPs open in WhatsApp. Put your number here with country code, no + or spaces
  // (example: "919876543210"). Left empty, WhatsApp lets the guest pick the contact.
  var RSVP_WHATSAPP = "";

  var env = document.getElementById("env"), seal = document.getElementById("seal"), body = document.body;

  function openEnvelope() {
    if (env.classList.contains("open")) return;
    env.classList.add("open");
    body.classList.add("opened");
    setTimeout(function () { body.classList.remove("locked"); }, 700);
    setTimeout(function () { env.classList.add("gone"); }, 1300);
  }
  seal.addEventListener("click", openEnvelope);

  // scroll reveals
  var els = [].slice.call(document.querySelectorAll(".rv"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // countdown to 11 Nov 2026, 00:00 IST
  var target = new Date("2026-11-11T00:00:00+05:30").getTime();
  var ids = ["d", "h", "m", "s"].map(function (i) { return document.getElementById(i); });
  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var t = Math.max(0, Math.floor((target - Date.now()) / 1000));
    ids[0].textContent = pad(Math.floor(t / 86400));
    ids[1].textContent = pad(Math.floor(t % 86400 / 3600));
    ids[2].textContent = pad(Math.floor(t % 3600 / 60));
    ids[3].textContent = pad(t % 60);
  }
  tick(); setInterval(tick, 1000);

  // RSVP
  var form = document.getElementById("rsvp"), status = document.getElementById("rs");
  var toggles = [].slice.call(form.querySelectorAll(".tg button"));
  toggles.forEach(function (b) {
    b.addEventListener("click", function () {
      toggles.forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("nm").value.trim();
    if (!name) { status.textContent = "Please enter your name."; document.getElementById("nm").focus(); return; }
    var attend = form.querySelector(".tg .on").getAttribute("data-v");
    var msg = "RSVP - Fouzan & Hasna's Nikah (11 November 2026)\n" +
      "Name: " + name + "\nAttending: " + attend + "\nGuests: " + document.getElementById("gs").value;
    var note = document.getElementById("ws").value.trim();
    if (note) msg += "\nMessage: " + note;
    window.open("https://wa.me/" + RSVP_WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    status.textContent = "Opening WhatsApp. Tap send there to confirm your RSVP.";
  });
})();
