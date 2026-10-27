/* Mobile Navigation: öffnet und schließt die Menüliste unter 900 px.
   Oberhalb der Umbruchbreite steht die Liste per CSS ohnehin offen,
   deshalb wird der Zustand beim Vergrößern zurückgesetzt. */

/* Misst die Höhe des mitlaufenden Kopfes und schreibt sie nach --header-h.
   Das Stylesheet hält damit den Platz frei, den ein Ankersprung braucht.
   Ohne JavaScript gilt der feste Wert aus dem Stylesheet. */

(function () {
  var header = document.querySelector('.header');
  if (!header) return;

  function syncHeaderHeight() {
    var mitlaufend = getComputedStyle(header).position === 'sticky';
    var hoehe = mitlaufend ? Math.round(header.getBoundingClientRect().height) : 0;
    document.documentElement.style.setProperty('--header-h', hoehe + 'px');
  }

  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);

  // Die Schriften ändern die Höhe des Kopfes, sobald sie geladen sind.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncHeaderHeight);
  }
})();

(function () {
  var toggle = document.getElementById('nav-toggle');
  var list = document.getElementById('nav-list');

  if (!toggle || !list) return;

  function setOpen(open) {
    list.dataset.open = open ? 'true' : 'false';
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  setOpen(false);

  toggle.addEventListener('click', function () {
    setOpen(list.dataset.open !== 'true');
  });

  // Nach dem Sprung zu einem Abschnitt soll das Menü nicht offen bleiben.
  list.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && list.dataset.open === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  var wide = window.matchMedia('(min-width: 901px)');
  var onChange = function (event) {
    if (event.matches) setOpen(false);
  };

  if (typeof wide.addEventListener === 'function') {
    wide.addEventListener('change', onChange);
  } else {
    wide.addListener(onChange);
  }
})();
