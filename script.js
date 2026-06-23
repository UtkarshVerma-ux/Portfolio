/* ============================================
   UTKARSH VERMA — PORTFOLIO
   script.js
   ============================================ */


/* ---------- SCROLL PROGRESS BAR ---------- */
// Updates the thin orange bar at the top as you scroll
window.addEventListener('scroll', function () {
  var scrolled = window.scrollY;
  var total    = document.body.scrollHeight - window.innerHeight;
  var percent  = (scrolled / total) * 100;

  document.getElementById('progress').style.width = Math.min(percent, 100) + '%';
}, { passive: true });


/* ---------- SCROLL REVEAL ---------- */
// Elements with class .rv are hidden by default (in CSS)
// When they enter the viewport, we add .on which fades them in
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -24px 0px'
});

// Observe all reveal elements
document.querySelectorAll('.rv').forEach(function (el) {
  revealObserver.observe(el);
});