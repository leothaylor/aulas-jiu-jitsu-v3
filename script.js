(function () {
  "use strict";
  var header = document.getElementById("site-header");
  var progress = document.getElementById("scroll-progress-fill");
  var mobileNav = document.getElementById("mobile-nav");
  var menuButton = document.getElementById("menu-toggle");
  var heroMedia = document.querySelector(".hero__media");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var touch = window.matchMedia("(pointer: coarse)").matches;
  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    mobileNav.hidden = true;
    document.body.style.overflow = "";
  }
  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      if (open) closeMenu();
      else {
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Fechar menu");
        mobileNav.hidden = false;
        document.body.style.overflow = "hidden";
      }
    });
    mobileNav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (innerWidth > 980) closeMenu(); });
  }
  var scheduled = false;
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 60);
      var doc = document.documentElement;
      var range = doc.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = "scaleX(" + Math.max(0, Math.min(1, range ? y / range : 0)) + ")";
      if (heroMedia && !reduceMotion && !touch && y < window.innerHeight * 1.4) {
        heroMedia.style.transform = "translate3d(0," + Math.min(y * 0.13, 150) + "px,0) scale(1.035)";
      }
      scheduled = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var revealed = document.querySelectorAll("[data-reveal]");
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-motion");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -25px 0px" });
    revealed.forEach(function (el) { observer.observe(el); });
  } else revealed.forEach(function (el) { el.classList.add("is-visible"); });

  var reviewTrack = document.getElementById("reviews-track");
  function moveReview(direction) {
    if (!reviewTrack) return;
    var card = reviewTrack.querySelector(".review");
    if (!card) return;
    var gap = parseFloat(getComputedStyle(reviewTrack).gap) || 18;
    var delta = (card.getBoundingClientRect().width + gap) * direction;
    reviewTrack.scrollBy({ left: delta, behavior: reduceMotion ? "auto" : "smooth" });
  }
  var prev = document.getElementById("review-prev");
  var next = document.getElementById("review-next");
  if (prev) prev.addEventListener("click", function () { moveReview(-1); });
  if (next) next.addEventListener("click", function () { moveReview(1); });
})();