/* Mobile Navigation: öffnet und schließt die Menüliste unter 900 px.
   Oberhalb der Umbruchbreite steht die Liste per CSS ohnehin offen,
   deshalb wird der Zustand beim Vergrößern zurückgesetzt. */

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
