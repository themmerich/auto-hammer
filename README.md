# Auto Hammer GmbH — Website

Statische Seite ohne Build-Schritt. HTML, CSS und ein kleines Skript für die
mobile Navigation. Lässt sich auf jedem Webspace ablegen.

## Aufbau

```
index.html              Startseite
impressum.html          Impressum, Pflichtangaben noch als Platzhalter
datenschutz.html        Datenschutzerklärung, dito
assets/css/styles.css   Stylesheet, Tokens stehen oben in :root
assets/js/nav.js        Mobile Navigation
assets/fonts/           Barlow und Inter als WOFF2, dazu die Lizenzen
assets/img/             Bilder (noch leer)
.claude/launch.json     lokaler Vorschauserver
```

## Lokal ansehen

```bash
npx --yes serve --listen 4321 .
```

Dann http://localhost:4321 öffnen.

## Was noch fehlt

Alles davon ist im Quelltext mit einem Kommentar markiert.

- **Bilder.** Die grauen Flächen sind Platzhalter (`<span class="photo">` bzw.
  `<figure class="photo">`). Jede trägt eine Beschriftung, welches Motiv dort
  hingehört. Ersetzen durch `<img src="assets/img/....jpg" alt="…">`. Das
  Seitenverhältnis steckt in der CSS-Klasse, damit beim Tausch nichts springt.
- **Logo.** Im Kopf steht derzeit ein gezeichnetes Platzhalter-Symbol neben dem
  Schriftzug. Die Logodatei des Betriebs ersetzt das SVG in `.logo__mark`.
- **Favicon und Teilerbild.** Zwei auskommentierte Zeilen im `<head>`.
- **Karte.** Der Platzhalter im Kontaktabschnitt wartet auf eine Einbindung,
  etwa OpenStreetMap als iframe oder eine statische Karte mit Link auf die
  Route. Bei Google Maps ist die Einwilligung nach DSGVO nötig.
- **Pflichtangaben in Impressum und Datenschutz.** Beide Seiten stehen, die
  noch fehlenden Angaben sind gelb markiert (`<span class="fill">`). Nach dem
  Ausfüllen die Regel `.fill` und die beiden `.notice`-Kästen aus dem Quelltext
  löschen. Die Texte sind ein Gerüst, keine Rechtsberatung; vor dem Livegang
  anwaltlich prüfen lassen.
- **Kontaktformular.** Bewusst nicht gebaut: ein Formular braucht einen
  Empfänger auf dem Server. Aktuell führen alle Wege auf Telefon und Mail.

## Schriften

Barlow und Inter liegen als WOFF2 in `assets/fonts/` und werden vom eigenen
Server ausgeliefert. Die Seite baut keine Verbindung zu Google Fonts auf, es
verlässt also keine Besucher-IP den Server. Das war der Grund für die
Umstellung: Das Landgericht München I hat in der dynamischen Einbindung von
Google Fonts 2022 einen Verstoß gegen die DSGVO gesehen (Az. 3 O 17493/20).

Eingebunden wird über `@font-face` am Anfang des Stylesheets. Geladen werden
nur die Subsets latin und latin-ext; über `unicode-range` holt der Browser
latin-ext erst, wenn tatsächlich ein Zeichen daraus auf der Seite steht.
Inter ist eine Variable Font, eine Datei deckt die Strichstärken 400 bis 600 ab.

Beide Familien stehen unter der SIL Open Font License 1.1. Die Lizenztexte
liegen als `OFL-Barlow.txt` und `OFL-Inter.txt` daneben und müssen beim
Ausliefern der Schriften mitgeführt werden.

Kommt eine weitere Strichstärke dazu, muss die passende Datei nachgeladen und
ein `@font-face`-Block ergänzt werden. Fehlt sie, rechnet der Browser die
Stärke selbst hoch, und das sieht schlechter aus als der echte Schnitt.

## Zu prüfen

- Die Anschrift steht als `Zeppelinstr. 1`. Auf der bisherigen Seite war sie an
  einer Stelle schwer zu lesen; vor dem Livegang bitte abgleichen.
- Die Termine der Reifenwechseltage im Abschnitt „Aktuelles" stammen von der
  bisherigen Seite und sind saisonal.

## Inhaltliche Quellen

Texte, Öffnungszeiten, Auszeichnungen und Kundenzitate stammen von
auto-hammer-ufr.de. Die strukturierten Daten am Seitenende (`AutoRepair`) geben
Adresse, Telefon und Öffnungszeiten für Suchmaschinen an und müssen mit dem
Impressum übereinstimmen.
